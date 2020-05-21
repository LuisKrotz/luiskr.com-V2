<template>
  <main class="main">
    <article class="project home-project max-area">
      <img v-if="post === undefined" class="project-background" :src="placeholder" alt="">
      <picture v-else-if="post.video === undefined" :key="'bg-' + post.id">
        <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
        <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
        <img class="project-background" :src="storage + post.img.src + webp" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
      </picture>
      <video v-else class="project-background" :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img + webp2" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop :key="'bg-' + post.id">
        <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
        <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
        <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
      </video>

      <h2 class="project-title" v-if="translations !== undefined">{{ translations.project }}</h2>
      <h3 class="project-subtitle" v-if="post !== undefined">{{ post.project }}</h3>

      <div class="project-info">
        <img v-if="post === undefined" class="project-media" :src="placeholder" alt="">
        <picture v-else-if="post.video === undefined" :key="'media-' + post.id">
            <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
            <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
            <img :src="storage + post.img.src + webp" class="project-media" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
        </picture>
        <video v-view="viewHandler" v-else :width="post.video.width" class="project-media" :height="post.video.height" :poster="storage + post.video.img + webp2" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop controls :key="'media-' + post.id">
          <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
          <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
          <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
        </video>

        <div class="project-info-content" v-if="translations !== undefined && post !== undefined">
          <div class="project-info-description">
            <a class="project-info-link" :href="post.at_link">
              <h4 class="project-info-link-title">{{ translations.at }}</h4>
              {{ post.at_place }}
              </a>

            <h5 class="project-info-role">
              <span class="project-info-role-title">{{ translations.role }}</span> <span>{{ post.role }}</span>
            </h5>

            <div class="project-info-more">
              <h6 class="first">{{ translations.description}}</h6>
              <p v-html="post.description"></p>
              <h6>{{ translations.contribuition}}</h6>
              <p v-html="post.part"></p>
              <h6 class="project-info-credit" >{{ translations.credits[0] }} {{ post.at_place.replace('@', '') }} {{translations.credits[1]}}</h6>
              <p>
                <a :href="post.at_link" rel="noopener" target="_blank" @click="sendAnalyticsEvent('project_link', 'click', post.at_place, 25)">
                  <img v-if="post.at_logo === undefined" class="project-info-credit-logo" :src="placeholder" alt="">
                  <img v-else class="project-info-credit-logo" :src="storage + 'media/' + post.at_logo" :alt="post.at_place">
                </a>
              </p>
            </div>

            <div  v-if="post.extra !== undefined">
              <div v-for="extra in post.extra" :key="extra.id" class="project-info-more">
                <h6 class="title">{{ extra.alt }}</h6>

                <picture v-if="extra.type === 'img'">
                  <source type="image/jpeg" :srcset="storage +  extra.src + '.jpg'">
                  <source type="image/webp" :srcset="storage +  extra.src + '.webp'">
                  <img :src="storage +  extra.src + webp" class="project-media" :width="extra.width" :height="extra.height" :alt="extra.alt" loading="lazy">
                </picture>
                <video v-else :width="extra.width" class="project-media" :height="extra.height" :poster="storage +  extra.img" :alt="extra.alt" loading="lazy" playsinline autoplay muted loop controls>
                  <source type="application/vnd.apple.mpegurl" :src="storage +  extra.src + '.m3u8'"/>
                  <source type="video/mp4" :src="storage +  extra.src + '.mp4'"/>
                  <source type="video/webm" :src="storage +  extra.src + '.webm'"/>
                </video>
              </div>
            </div>
          </div>

          <a class="project-info-check" :href="post.link" target="_blank" rel="noopener" @click="sendAnalyticsEvent('project_link', 'click', translations.checkit, 25)">
            <img v-if="translations.animation_alt === undefined" class="project-info-check-it" :src="placeholder" alt="">
            <video v-else class="project-info-check-it" width="480" height="480" :poster="storage + 'animations/'+ random + webp" :title="translations.animation_title" :alt="translations.animation_alt[0] +  translations.animation[random] + translations.animation_alt[1]" loading="lazy" playsinline autoplay muted loop>
              <source type="application/vnd.apple.mpegurl" :src="storage + 'animations/' + random + '.m3u8'"/>
              <source type="video/mp4" :src="storage + 'animations/' + random + '.mp4'"/>
              <source type="video/webm" :src="storage + 'animations/' + random + '.webm'"/>
            </video>
            <span class="project-info-check-txt">
            {{ translations.checkit }}
            </span>
          </a>
        </div>
      </div>
      <div class="project-iframe-parent" :style="itoggle ? 'width: 414px': ''" @click="sendAnalyticsEvent('project_link', 'toggle', 'iframe', 100)">
        <button class="project-iframe-toggle" @click="toggleiframe()">
          <span class="project-iframe-mark" :style="itoggle ? 'transform: translateX(100%);': ''"></span>
          <span class="project-iframe-slide">
            <svg class="left" width="13" height="13" style="fill:white">
              <use xlink:href="#svg-desktop"/>
            </svg>

            <svg class="right" width="14" height="14" style="fill:white">
              <use xlink:href="#svg-mobile"/>
            </svg>
          </span>
        </button>
        <iframe class="project-iframe" frameborder="0" :src="ilink"/>
      </div>

    </article>
    <footer class="footer has-media" v-if="translations !== undefined">
      <div class="max-area">
        <a class="footer-link left" :href="prev.path" v-if="prev !== undefined" @click="sendAnalyticsEvent('project_link', 'click', translations.prev + ': ' + prev.project, 100)">
          <span class="footer-link-icon" @click="nextprev(prev.id)">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.prev }}</p>
        </a>

        <router-link class="footer-link home" to="/">
          <span class="footer-link-icon" @click="sendAnalyticsEvent('project_link', 'click', translations.home, 100)">
            <span class="footer-link-home first"></span>
            <span class="footer-link-home second"></span>
            <span class="footer-link-home third"></span>
            <span class="footer-link-home fourth"></span>
            <span class="footer-link-home fifth"></span>
          </span>

          <p class="hdn">{{ translations.home }}</p>
        </router-link>

        <a class="footer-link right" :href="next.path" v-if="next !== undefined" @click="sendAnalyticsEvent('project_link', 'click', translations.next + ': ' + next.project, 100)">
          <span class="footer-link-icon" @click.prevent="nextprev(next.id)">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.next }}</p>
        </a>
      </div>
    </footer>
  </main>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'Project',
  data() {
    return {
      ilink: '',
      itoggle: false,
      storage: this.$parent.storage,
      webp: this.$parent.webp,
      webp2: this.$parent.webp2,
      placeholder: this.$parent.placeholder,
      origin: this.$parent.origin,
      translations: undefined,
      post: undefined,
      random: Math.round(Math.random() * 4) + 1,
      next: undefined,
      prev: undefined,
      total: Number
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
    fetch(`${this.origin}/translations/en_us/projects.json`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.translations = data;
      });

    this.getPost();
  },
  methods: {
    getPost() {
      let self = this;

      document.body.classList.add("getting");

      fetch(`${self.origin}/projects/${self.data_id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          let last, title, path;

          self.post = data;
          self.ilink = self.post.link;

          last = self.post.last;
          self.last = Boolean(last !== undefined ? last : false);

          title = `luiskr.com | ${self.post.project}`;
          path = self.origin + self.post.path;
          document.title = title;
          window.history.replaceState({ page: path }, title, path);

          document.body.classList.remove("getting");
        });

      fetch(`${self.origin}/projects/${self.total === Number(self.data_id) ? 1 : Number(self.data_id) + 1}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.next = data;
        });

      fetch(`${self.origin}/projects/${self.data_id === 1 ? self.total : Number(self.data_id) -1 }.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.prev = data;
        });
    },
    toggleiframe() {
      this.ilink = '';
      if (this.itoggle) {
        this.itoggle = false;
        window.setTimeout(() => this.ilink = this.post.link, 500);
      } else {
        this.itoggle = true;
        window.setTimeout(() => this.ilink = this.post.link, 500);
      }
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
    viewHandler(e) {
      this.$parent.viewHandler(e);
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
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
