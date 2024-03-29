<template>
  <div>
    <transition name="fade" mode="out-in">
      <img v-if="post !== undefined" class="award-background" aria-hidden="true"
        :src="storage + post.img.src" 
        :width="post.img.width"
        :height="post.img.height"
        :alt="post.img.alt"
        :longdesc="post.img.longdesc"
        :key="'bg-' + post.id">
    </transition>

    <main class="main">
      <article :class="'award max-area ' + (loaded ? 'loaded' : '')">
        <h2 class="award-title" v-view v-if="translations !== undefined" ref="title_wrapper">
            <div class="award-title-wrapper">
              <div class="award-title-marquee">
                <template v-for="n in 30">
                  {{ translations.title }}&nbsp;\&nbsp;
                </template>
              </div>
            </div>
        </h2>


        <div class="award-info">
          <transition name="fade" mode="out-in">
              <img v-if="post !== undefined" class="award-media"
                :src="storage + post.img.src" 
                :width="post.img.width"
                :height="post.img.height"
                :alt="post.img.alt"
                :longdesc="post.img.longdesc"
                :key="'media-' + post.id">
          </transition>

          <div class="award-info-content" v-if="translations !== undefined && post !== undefined">
            <div class="award-info-description">
              <div class="award-info-data">
                <a class="award-info-link" v-view :href="post.link">
                  <h3 class="award-info-link-title first">{{ post.award }}</h3>
                </a>
                <p class="hdn">{{ post.img.longdesc }}</p>
                <p v-view>{{ post.date }}</p>
              </div>
            </div>

            <a class="award-info-check" :href="post.link" target="_blank" rel="noopener" @click="sendAnalyticsEvent('awards_link', 'click', translations.checkit, 25)">
              <img  v-view  v-if="translations.animation_alt === undefined" class="award-info-check-it" :src="placeholder" alt="">
              <video  v-view  v-else class="award-info-check-it" width="480" height="480" :poster="storage + 'animations/'+ random + webp" :title="translations.animation_title" :alt="translations.animation_alt[0] +  translations.animation[random] + translations.animation_alt[1]" playsinline autoplay muted loop>
                <source type="application/vnd.apple.mpegurl" :src="storage + 'animations/' + random + '.m3u8'"/>
                <source type="video/mp4" :src="storage + 'animations/' + random + '.mp4'"/>
                <source type="video/webm" :src="storage + 'animations/' + random + '.webm'"/>
              </video>
              <span class="award-info-check-txt">
              {{ translations.checkit }}
              </span>
            </a>
          </div>
        </div>
      </article>
    </main>

    <footer class="footer has-media" v-if="translations !== undefined">
      <div class="max-area">
        <a class="footer-link left" :href="next.path" v-if="prev !== undefined" @click.prevent="sendAnalyticsEvent('awards_link', 'click', translations.prev + ': ' + next.project, 100)">
          <span class="footer-link-icon" @click.prevent="nextprev(next.id)">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.prev }}</p>
        </a>

        <a class="footer-link right" :href="prev.path" v-if="prev !== undefined" @click.prevent="sendAnalyticsEvent('awards_link', 'click', translations.next + ': ' + next.project, 100)">
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
  name: 'Award',
  data() {
    return {
      storage: this.$parent.storage,
      webp: this.$parent.webp,
      webp2: this.$parent.webp2,
      placeholder: this.$parent.placeholder,
      origin: this.$parent.origin,
      translations: this.$parent.awards,
      post: undefined,
      random: Math.round(Math.random() * 4) + 1,
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

    document.title = this.$route.meta.title;

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

      fetch(`${self.origin}/awards/${self.data_id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          let last, title, path;

          self.post = data;

          title = `luiskr.com | ${self.post.award}`;
          path = self.origin + self.post.path;
          document.title = title;
          window.history.replaceState({ page: path }, title, path);

          fetch(`${self.origin}/awards/${self.total === Number(self.data_id) ? 1 : Number(self.data_id) + 1}.json`)
            .then((response) => {
              return response.json();
            }).then((data) => {
              self.next = data;
            });

          fetch(`${self.origin}/awards/${Number(self.data_id) === 1 ? self.total : Number(self.data_id) - 1 }.json`)
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
