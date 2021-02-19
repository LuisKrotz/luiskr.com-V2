<template>
  <div>
    <main class="main">
      <article :class="'internal' + (loaded ? ' loaded' : '')">
        <h2 class="internal-title" v-if="post !== undefined" ref="title_wrapper">
            <div class="internal-title-wrapper">
              <div class="internal-title-marquee">
                <template v-for="n in 10">
                  {{ post.project }}&nbsp;\&nbsp;
                </template>
              </div>
            </div>
        </h2>

        <div class="internal-info">
          <transition name="fade" mode="out-in">
            <picture v-if="post !== undefined && post.video === undefined" :key="'media-' + post.id">
                <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
                <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
                <img :src="storage + post.img.src + webp" class="internal-media" :width="post.img.width" :height="post.img.height" :alt="post.img.alt">
            </picture>
            <video v-if="post !== undefined && post.video !== undefined" :width="post.video.width" class="internal-media" :height="post.video.height" :poster="renderPoster(post.video.width, post.video.height)" :alt="post.video.alt" playsinline autoplay muted loop :key="'media-' + post.id">
              <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
              <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
              <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
            </video>
          </transition>

          <div class="internal-info-content" v-if="translations !== undefined && post !== undefined">
            <div class="internal-info-description">
              <div class="internal-info-data">
                <h3 class="first">{{ translations.at }}</h3>
                <p>
                  <a class="internal-info-link" :href="post.at_link">
                    {{ post.at_place }}
                  </a>
                </p>

                <h4>{{ translations.role }}</h4>
                <p>{{ post.role }}</p>

                <h5>{{ translations.description }}</h5>
                <p v-html="post.description"></p>
                <h5>{{ translations.contribuition}}</h5>
                <p v-html="post.part"></p>

                <h5 v-html="translations.originalURL"></h5>
                <p>
                  <a :class="'internal-info-url' + (post.link_unavaliable === undefined && !post.link_unavaliable ? '':  ' unavaliable')" :href="post.link" target="_blank" rel="noopener" @click="sendAnalyticsEvent('project_link', 'click', translations.checkit, 25)">
                    <template v-if="post.link.indexOf('?') > -1">
                      {{ post.link.replace(/(^\w+:|^)\/\//, '').replace(/[^?]*$/g, '').replace('?', '') }}
                    </template>
                    <template v-else>
                      {{ post.link.replace(/(^\w+:|^)\/\//, '') }}
                    </template>
                  </a>
                </p>
              </div>

              <div class="internal-info-data" v-if="post.extra !== undefined">
                <div v-for="extra in post.extra" :key="extra.id" class="internal-info-more">
                  <h5 v-html="extra.title"></h5>

                  <picture v-if="extra.type === 'img'">
                    <source type="image/jpeg" :srcset="storage +  extra.src + '.jpg'">
                    <source type="image/webp" :srcset="storage +  extra.src + '.webp'">
                    <img :src="storage +  extra.src + webp" class="internal-media extra" :width="extra.width" :height="extra.height" :alt="extra.alt">
                  </picture>
                  <video v-else :width="extra.width" class="internal-media extra" :height="extra.height" :poster="storage +  extra.img" :alt="extra.alt" playsinline autoplay muted loop>
                    <source type="application/vnd.apple.mpegurl" :src="storage +  extra.src + '.m3u8'"/>
                    <source type="video/mp4" :src="storage +  extra.src + '.mp4'"/>
                    <source type="video/webm" :src="storage +  extra.src + '.webm'"/>
                  </video>
                </div>
              </div>
            </div>

            <a class="internal-info-check" :href="post.link" target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', translations.checkit, 25)">
              <a :href="post.at_link" rel="noopener" target="_blank" @click="sendAnalyticsEvent('credits_link', 'click', post.at_place, 25)">
                <img v-if="post.at_logo === undefined" class="internal-info-credit-logo" :src="placeholder" alt="">
                <img v-else class="internal-info-check-it" :src="storage + 'media/' + post.at_logo" :alt="post.at_place" width="480" height="480">
              </a>


              <span class="internal-info-check-txt">
                {{ translations.checkit }} {{ post.at_place.replace('@', '') }}
              </span>
            </a>
          </div>
        </div>
      </article>
    </main>
    <footer class="footer has-media" v-if="translations !== undefined">
      <div class="max-area">
        <a class="footer-link left" :href="next.path" v-if="next !== undefined" @click.prevent="sendAnalyticsEvent('project_link', 'click', translations.prev + ': ' + next.project, 100)">
          <span class="footer-link-icon" @click.prevent="nextprev(next.id)">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.prev }}</p>
        </a>

        <a class="footer-link right" :href="prev.path" v-if="prev !== undefined" @click.prevent="sendAnalyticsEvent('project_link', 'click', translations.next + ': ' + prev.project, 100)">
          <span class="footer-link-icon" @click.prevent="nextprev(prev.id)">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.next }}</p>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Project',
  data() {
    return {
      storage: this.$parent.storage,
      webp: this.$parent.webp,
      webp2: this.$parent.webp2,
      placeholder: this.$parent.placeholder,
      origin: this.$parent.origin,
      translations: this.$parent.projects,
      post: undefined,
      next: undefined,
      prev: undefined,
      total: Number,
      loaded: false,
      last: false
    }
  },
  created() {
    let self = this;
    let meta = self.$route.meta;
    let last = meta.last;

    document.body.classList.add("black");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    self.data_id = Number(meta.id);
    self.last = Boolean(last !== undefined ? last : false);
    self.total = Number(meta.total);
  },
  mounted() {
    let self = this;

    document.body.classList.remove("on-bottom");

    self.$store.commit('stopHeaderScroll', true);

    self.getPost();
    self.scrollPosition();
  },
  methods: {
    renderPoster(width, height) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
    },
    getPost() {
      let self = this;

      document.body.classList.add("getting");
      self.loaded = false;

      fetch(`${self.origin}/projects/${self.data_id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          let title, path;

          self.post = data;

          title = `luiskr.com | ${self.post.project}`;
          path = self.origin + self.post.path;
          document.title = title;
          window.history.replaceState({ page: path }, title, path);

          fetch(`${self.origin}/projects/${self.total === Number(self.data_id) ? 1 : Number(self.data_id) + 1}.json`)
            .then((response) => {
              return response.json();
            }).then((data) => {
              self.next = data;
            });

          fetch(`${self.origin}/projects/${Number(self.data_id) === 1 ? self.total : Number(self.data_id) - 1 }.json`)
            .then((response) => {
              return response.json();
            }).then((data) => {
              self.prev = data;
              self.loaded = true;
            });

          self.$store.commit('loadedProjectData', `${self.storage}media/${self.post.at_logo}`);

          document.body.classList.remove("getting");
        });
    },
    nextprev(id) {
      this.data_id = id;
      this.getPost();

      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };

      scrollToTop();
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    scrollPosition () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) 
          document.body.classList.add("on-bottom");
        else 
          document.body.classList.remove("on-bottom");
      }
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables';
@import '../sass/mixins';
@import '../sass/placeholders';
@import '../sass/extends';

@import '../sass/ProjectComponent/main.scss';
</style>
