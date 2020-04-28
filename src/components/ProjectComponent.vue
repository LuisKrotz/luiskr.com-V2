<template>
    <div class="main">
    <article class="home-project max-area">
      <img v-if="post.img === undefined && post.video === undefined" class="project-background" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
      <picture v-else-if="post.video === undefined">
        <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
        <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
        <img class="project-background" :src="storage + post.img.src + '.jpg'" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
      </picture>
      <video v-else class="project-background" :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop>
        <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
        <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
        <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
      </video>

      <h2 class="project-title">{{ translations.project }}</h2>
      <h3 class="project-subtitle">{{ post.project }}</h3>

      <div class="project-info">
        <img v-if="post.img === undefined && post.video === undefined" class="project-media" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
        <picture v-else-if="post.video === undefined">
          <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
          <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
          <img :src="storage + post.img.src + '.jpg'" class="project-media" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
        </picture>
        <video v-else :width="post.video.width" class="project-media" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop controls>
          <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
          <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
          <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
        </video>

        <div class="project-info-content">
          <div class="project-info-description">
            <h4>{{ translations.at }}</h4>
            <a :href="post.at_link">{{ post.at_place }}</a>

            <h4>{{ translations.role }}</h4>
            <p>{{ post.role }}</p>
          </div>

          <a class="project-info-check" :href="post.link" target="_blank" rel="noopener">
            <video class="project-info-check-it" width="480" height="480" :poster="origin + '/assets/animations/animation-juggling-handrawn.jpg'" title="Animation by Giphy.com, credits on luiskr.com/credits" alt="GIPHY.com animation of handrawn man juggling an arrow representing the mouse cursor, more info at: luiskr.com/credits" loading="lazy" playsinline autoplay muted loop>
              <source type="application/vnd.apple.mpegurl" :src="origin + '/assets/animations/animation-juggling-handrawn.m3u8'"/>
              <source type="video/mp4" :src="origin + '/assets/animations/animation-juggling-handrawn.mp4'"/>
              <source type="video/webm" :src="origin + '/assets/animations/animation-juggling-handrawn.webm'"/>
            </video>
            <p class="project-info-check-blend">
              <span class="project-info-check-txt">
              {{ translations.checkit }}
              </span>
            </p>
          </a>
        </div>
      </div>

    </article>
    <footer class="footer max-area">
      <router-link class="footer-link" :to="prev.path">
        <svg width="24" height="24" style="fill:white">
          <use xlink:href="#svg-arrow-left"/>
        </svg>
        <p class="hdn">previous</p>
      </router-link>
      <router-link class="footer-link" to="/">
        <svg width="18" height="18" style="fill:white">
          <use xlink:href="#svg-home"/>
        </svg>
        <p class="hdn">home</p>
      </router-link>
      <router-link class="footer-link" :to="next.path">
        <svg width="24" height="24" style="fill:white">
          <use xlink:href="#svg-arrow-right"/>
        </svg>
        <p class="hdn">next</p>
      </router-link>
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'ProjectComponent',
    data() {
      return {
        storage: '',
        origin: this.$parent.origin,
        translations: Object,
        post: Object,
        next: {
          path: "/"
        },
        prev: {
          path: "/"
        }
      }
    },
    props: {
      data_id: {
        required: true
      },
      last: {
        default: false,
        required: false
      }
    },
    created() {
      document.body.classList.add("black");
    },
    mounted() {
      this.storage = this.$parent.storage,
      this.getPost();
    },
    methods: {
      getPost() {
        let self = this;

          fetch(`${self.origin}/translations/en_us/projects.json`)
          .then((response) => {
            return response.json();
          }).then((data) => {
            self.translations = data;

            fetch(`${self.origin}/projects/${Number(self.translations.total) === Number(self.data_id) ? 1 : Number(self.data_id) + 1}.json`)
            .then((response) => {
              return response.json();
            }).then((data) => {
              self.next = data;
            });

            fetch(`${self.origin}/projects/${self.data_id === 1 ? self.translations.total : Number(self.data_id) -1 }.json`)
            .then((response) => {
              return response.json();
            }).then((data) => {
              self.prev = data;
            });
        });

        fetch(`${self.origin}/projects/${self.data_id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.post = data;
        });
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
