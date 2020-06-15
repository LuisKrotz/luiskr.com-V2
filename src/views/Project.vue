<template>
  <div>
    <transition name="fade" mode="out-in">
      <picture v-if="post !== undefined && post.video === undefined" :key="'bg-' + post.id">
        <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
        <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
        <img class="project-background" :src="storage + post.img.src + webp" :width="post.img.width" :height="post.img.height" :alt="post.img.alt">
      </picture>
  
      <picture v-if="post !== undefined && post.video !== undefined" :key="'bg-' + post.id">
        <source type="image/jpeg" :srcset="storage + post.video.src + '.jpg'">
        <source type="image/webp" :srcset="storage + post.video.src + '.jpg.webp'">
        <img class="project-background" :src="storage + post.video.src + webp" :width="post.video.width" :height="post.video.height" :alt="post.video.alt">
      </picture>
    </transition>

    <main class="main">
      <article :class="'project home-project max-area ' + (loaded ? 'loaded' : '')">
        <h2 class="project-title" v-view v-if="translations !== undefined" @click="sendAnalyticsEvent('project_link', 'click','home', 100)"><router-link to="/" :style="'background-color: #' + random_colors[random_color]">luiskr</router-link></h2>
        <h3 class="project-subtitle" v-view v-if="post !== undefined">{{ post.project }}</h3>

        <div class="project-info">
          <transition name="fade" mode="out-in">
          <picture v-if="post !== undefined && post.video === undefined" :key="'media-' + post.id">
              <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
              <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
              <img :src="storage + post.img.src + webp" class="project-media" :width="post.img.width" :height="post.img.height" :alt="post.img.alt">
          </picture>
          <video v-if="post !== undefined && post.video !== undefined" :width="post.video.width" class="project-media" :height="post.video.height" :poster="storage + post.video.img + webp2" :alt="post.video.alt" playsinline autoplay muted loop :key="'media-' + post.id">
            <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
            <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
            <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
          </video>
          </transition>

          <div class="project-info-content" v-if="translations !== undefined && post !== undefined">
            <div class="project-info-description">
              <a class="project-info-link" v-view :href="post.at_link">
                <h4 class="project-info-link-title">{{ translations.at }}</h4>
                {{ post.at_place }}
                </a>

              <h5 class="project-info-role" v-view>
                <span class="project-info-role-title">{{ translations.role }}</span> <span>{{ post.role }}</span>
              </h5>

              <div class="project-info-more" v-view>
                <h6 class="first">{{ translations.description}}</h6>
                <p v-html="post.description"></p>
                <h6>{{ translations.contribuition}}</h6>
                <p v-html="post.part"></p>
                <h6 class="project-info-credit" v-view>{{ translations.credits[0] }} {{ post.at_place.replace('@', '') }} {{translations.credits[1]}}</h6>
                <p>
                  <a :href="post.at_link" rel="noopener" target="_blank" @click="sendAnalyticsEvent('project_link', 'click', post.at_place, 25)">
                    <img v-view v-if="post.at_logo === undefined" class="project-info-credit-logo" :src="placeholder" alt="">
                    <img v-view v-else class="project-info-credit-logo" :src="storage + 'media/' + post.at_logo" :alt="post.at_place">
                  </a>
                </p>
              </div>

              <div  v-if="post.extra !== undefined">
                <div v-for="extra in post.extra" :key="extra.id" v-view class="project-info-more">
                  <h6 class="title">{{ extra.alt }}</h6>

                  <picture v-if="extra.type === 'img'">
                    <source type="image/jpeg" :srcset="storage +  extra.src + '.jpg'">
                    <source type="image/webp" :srcset="storage +  extra.src + '.webp'">
                    <img v-view :src="storage +  extra.src + webp" class="project-media" :width="extra.width" :height="extra.height" :alt="extra.alt">
                  </picture>
                  <video v-view v-else :width="extra.width" class="project-media" :height="extra.height" :poster="storage +  extra.img" :alt="extra.alt" playsinline autoplay muted loop>
                    <source type="application/vnd.apple.mpegurl" :src="storage +  extra.src + '.m3u8'"/>
                    <source type="video/mp4" :src="storage +  extra.src + '.mp4'"/>
                    <source type="video/webm" :src="storage +  extra.src + '.webm'"/>
                  </video>
                </div>
              </div>
            </div>

            <a class="project-info-check" :href="post.link" target="_blank" rel="noopener" @click="sendAnalyticsEvent('project_link', 'click', translations.checkit, 25)">
              <img  v-view  v-if="translations.animation_alt === undefined" class="project-info-check-it" :src="placeholder" alt="">
              <video  v-view  v-else class="project-info-check-it" width="480" height="480" :poster="storage + 'animations/'+ random + webp" :title="translations.animation_title" :alt="translations.animation_alt[0] +  translations.animation[random] + translations.animation_alt[1]" playsinline autoplay muted loop>
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
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

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
      random: Math.round(Math.random() * 4) + 1,
      next: undefined,
      prev: undefined,
      total: Number,
      loaded: false,
      last: false,
      random_color: Math.round(Math.random() * 18) - 1,
      random_colors: [
        '3f3fec', '2929e2', '1a1a48', '55daad', '38886d', '38886d',
        '25463b', '573279', '962626', '191970', '5f9ea0', '4bc18b',
        '525252', 'A1D470', '580edc', '723c7b', '009688', 'c54a8d',
        '29d',
      ]
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
    this.getPost();
  },
  methods: {
    getPost() {
      let self = this;

      document.body.classList.add("getting");
      self.loaded = false;

      fetch(`${self.origin}/projects/${self.data_id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          let last, title, path;

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

          document.body.classList.remove("getting");
        });
    },
    nextprev(id) {
      this.data_id = id;
      this.getPost();
      this.random_color = Math.round(Math.random() * 18) - 1;

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
