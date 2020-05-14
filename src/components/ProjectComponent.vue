<template>
    <div class="main">
    <article class="home-project max-area">
      <img v-if="post.img === undefined && post.video === undefined" class="project-background" :src="placehlolder" alt="">
      <picture v-else-if="post.video === undefined">
        <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
        <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
        <img class="project-background" :src="storage + post.img.src + webp" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
      </picture>
      <video v-else class="project-background" :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img + webp" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop>
        <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
        <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
        <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
      </video>

      <h2 class="project-title">{{ translations.project }}</h2>
      <h3 class="project-subtitle">{{ post.project }}</h3>

      <div class="project-info">
        <img v-if="post.video === undefined && post.img === undefined" class="project-media" :src="placehlolder" alt="">
            <picture v-else-if="post.video === undefined">
            <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
            <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
            <img :src="storage + post.img.src + webp" class="project-media" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
        </picture>
        <video v-else :width="post.video.width" class="project-media" :height="post.video.height" :poster="storage + post.video.img + webp" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop controls>
          <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
          <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
          <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
        </video>

        <div class="project-info-content">
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
                <a :href="post.at_link" rel="noopener" target="_blank">
                  <img v-if="post.at_logo === undefined" class="project-info-credit-logo" :src="placehlolder" alt="">
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


          <a class="project-info-check" :href="post.link" target="_blank" rel="noopener">
            <img v-if="translations.animation_alt === undefined" class="project-info-check-it" :src="placehlolder" alt="">
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
      <div class="project-iframe-parent" :style="itoggle ? 'width: 414px': ''">
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
    <footer class="footer has-media">
      <div class="max-area">
        <router-link class="footer-link left" :to="prev.path">
          <span class="footer-link-icon">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.prev }}</p>
        </router-link>
        <router-link class="footer-link home" to="/">
          <svg width="36" height="36" style="fill:white" class="shuttle">
            <use xlink:href="#svg-space-shuttle"/>
          </svg>
          <p class="footer-link-title">{{ translations.home }}</p>
        </router-link>
        <router-link class="footer-link right" :to="next.path">
          <span class="footer-link-icon">
            <span class="footer-link-arrow top"></span>
            <span class="footer-link-arrow middle"></span>
            <span class="footer-link-arrow bottom"></span>
          </span>
          <p class="hdn">{{ translations.next }}</p>
        </router-link>
      </div> 
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'ProjectComponent',
    data() {
      return {
        ilink: '',
        itoggle: false,
        storage: '',
        webp: this.$parent.webp,
        placeholder: this.$parent.placehlolder,
        origin: this.$parent.origin,
        translations: Object,
        post: Object,
        random: Math.round(Math.random() * 4) + 1,
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
      document.body.scrollTop = 0;                // For Safari
      document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
    },
    mounted() {
      this.storage = this.$parent.storage,
      this.getPost();
    },
    methods: {
      getPost() {
        let self = this;

          fetch(`${self.origin}/projects/${self.data_id}.json`)
          .then((response) => {
            return response.json();
          }).then((data) => {
            self.post = data;
            self.ilink = self.post.link;
          });

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
