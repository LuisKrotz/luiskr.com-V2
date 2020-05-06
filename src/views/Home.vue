<template>
  <div>
    <HeaderComponent current="home" />
    <video class="home-cover-bg" :poster="storage + 'loopreflection' + webp" loop muted autoplay playsinline alt="Background - Loop animation - 3D reflective fractal from giphy.com">
        <source type="application/vnd.apple.mpegurl" :src="storage + 'loopreflection' + '.m3u8'"/>
        <source type="video/mp4" :src="storage + 'loopreflection' + '.mp4'"/>
        <source type="video/webm" :src="storage + 'loopreflection' + '.webm'"/>
    </video>
    <main class="home">
      <article class="main">
        <div class="home-cover-parent">
          <div class="max-area home-cover">
            <h2 class="main-title"><span>luiskr.com</span></h2>
            <h3 class="main-subtitle">Hy, I'm Luis.</h3>

            <p class="main-text"><span>I'm a Frond-End Developer currently working full time at <a href="" rel="noopener">transainc</a>. Living in Porto Alegre / Brazil, and a part time Freelancer.</span></p>
          </div>
          <div class="max-area home-cover">
            <p class="main-text"><span>In this page you'll find more info about the <a href="#portfolio">jobs and projects</a> I worked on the past few years and a little bit <router-link class="footer-link" to="/about">about me.</router-link></span></p>
            <p class="main-text"><span>Feel free to explore and contact me at any time, by <a href="mailto:luis.krotz@gmail.com" rel="noopener">email</a>, <a href="tel:+55982274782" rel="noopener">imessage</a> or <a href="https://api.whatsapp.com/send?phone=+5551982274782" rel="noopener">whatsapp</a>.</span></p>
          </div>
        </div>

        <section class="home-projects">
          <h3 class="main-title" id="portfolio">Portfolio</h3>
          <div class="max-area home-project-parent">

            <router-link class="home-project" :to="post.path" v-for="post in posts" :key="post.id">
                <div v-if="post.video === undefined && post.img === undefined" :style="'padding-top:' + (480 / 720 * 100) + '%'">
                    <img v-if="prev.img === undefined && prev.video === undefined" class="home-media" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
                </div>
                <div class="lz-container" v-else-if="post.video === undefined" :style="'padding-top:' + (post.img.height / post.img.width * 100) + '%'">
                    <picture>
                        <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
                        <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
                        <img class="lazy home-media" :src="storage + post.img.src + webp" :width="post.img.height" :height="post.img.width" :alt="post.img.alt" loading="lazy">
                    </picture>
                </div>
                <div class="lz-container" v-else :style="'padding-top:' + (post.video.height / post.video.width * 100) + '%'">
                    <picture>
                        <source type="image/jpeg" :srcset="storage + post.video.src + '.jpg'">
                        <source type="image/webp" :srcset="storage + post.video.src + '.webp'">
                        <img class="lazy home-media" :src="storage + post.video.src + webp" :width="post.video.height" :height="post.video.width" :alt="post.video.alt" loading="lazy">
                    </picture>
                </div>

                <h3 class="home-project-title">
                    <span>{{ post.project }}</span>
                </h3>

                <h4 class="home-project-at">
                    <span>{{ projects.at }} </span>
                    <a :href="post.at_link" target="_blank" rel="noopenner">{{ post.at_place }}</a>
                </h4>

                <h5 class="home-project-role">
                    <span>{{ projects.role }} </span>
                    <span>{{ post.role }}</span>
                </h5>

                <router-link class="home-project-read" :to="post.path">
                    Read<br>More
                </router-link>

                </router-link>
          </div>
        </section>
      </article>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HereMapsComponent from '@/components/HereMapsComponent.vue'

export default {
  name: 'HomeComponent',
  data() {
    return {
        placeholder: this.$parent.placeholder,
        storage: this.$parent.storage,
        origin: this.$parent.origin,
        webp: (this.$parent.webp ? '.webp' : '.jpg'),
        total: Number,
        projects: Object,
        posts: [],
        stop: true,
        start: Number,
        end: Number
    }
  },
  created() {
    let self = this;

    document.body.classList.remove("black");

    // Fetch projects translations
    fetch(`${self.origin}/translations/en_us/projects.json`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      self.projects = data;

      self.start = self.projects.total;
      self.end = self.projects.total - 2;

      self.getPosts(self.start, self.end);
      self.stop = false;

      self.start = self.end - 1;
      self.end = self.end - 2;
    });
  },
  mounted() {
    let self = this,
        innerHeight = window.innerHeight;

    let half = innerHeight / 2;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset + innerHeight >= document.body.scrollHeight - half && !self.stop) {
          self.getPosts(self.start, self.end);

          self.start = self.end - 1;
          self.end = self.end - 2 > 0 ? self.end - 2 : 1;
          self.stop = self.start === 0;
        }
    });
  },
  components: {
      HeaderComponent,
      FooterComponent
  },
  methods: {
    getPosts(start, end) {
      let i = start, self = this;
  
      for(i = start; end <= i; i--) {
        fetch(`${self.origin}/projects/${i}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.posts.push(data);
        })
      }
    },
    footerOpen() {
      this.$parent.footerOpen();
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables';
@import '../sass/mixins';
@import '../sass/placeholders';
@import '../sass/extends';

.home {
    .main {
        padding: 0;
    }

    &-cover {
        box-sizing: border-box;
        padding-top: to-em(104);
        padding-bottom: to-em(104);
        min-height: 75vh;

        .main-title {
            font-size: to-em(40);
            font-weight: 200;

            span {
                background: $color-black;
                color: $color-white;
            }
        }

        .main-subtitle {
            text-align: center;
        }

        .main-text {
            font-size: to-em(24);
            line-height: to-em(64);
            padding-top: to-em(168);

            span {
                background: $color-white;
            }
        }

        @include layout-640() {
            .main-title {
                font-weight: 300;
                font-size: to-em(104);
            }
        }

        @include layout-1024() {
            display: grid;
            min-height: 100vh;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: to-em(64);

            .main-title,
            .main-subtitle {
                margin: 0;
                padding: 0;
                text-align: justify;
            }

            .main-title {
                grid-column-start: 2;
                grid-column-end: -1;
            }

            .main-subtitle {
                line-height: to-em(64);
                font-weight: 500;
                text-transform: uppercase;
                grid-column-start: 1;
            }

            .main-text {
                grid-column-start: 2;
                grid-column-end: 5;
                padding: 0;
            }
        }

        @include layout-1280() {
            .main-title {
                grid-column-start: 3;
                grid-column-end: 5;
            }

            .main-text {
                grid-column-start: 3;
                grid-column-end: 5;
                padding: 0;
            }
        }

        @include layout-1680() {
            .main-subtitle {
                grid-column-start: 2;
            }
        }

        @include layout-1920() {
            grid-gap: to-em(40);
        }

        @include layout-2560() {
            grid-row-gap: to-em(40);
            grid-column-gap: to-em(64);
        }

        &-bg {
            background: none;
            width: 102vw;
            height: 100vh;
            top: 0;
            left: 50%;
            position: fixed;
            transform: translateX(-50%);
            filter: blur(20px) invert(1) sepia(.5);
            object-fit: cover;
            object-position: center;
            opacity: 0.15;

            @include layout-1024() {
                transform: none;
                filter: blur(20px) invert(1);
                width: 50%;
                right: 0;
            }
        }
    }

    &-projects {
        padding-bottom: to-em(104);
        position: relative;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, .025) 25%);

        .main-title {
            padding-top: to-em(24);

            @include layout-640() {
                padding-top: to-em(16);
            }

            @include layout-768() {
            }

            @include layout-1024() {
                padding-top: to-em(40);
            }

            @include layout-1280() {
            }

            @include layout-1680() {
                padding-top: to-em(64);
            }

            @include layout-2560() {
                padding-top: to-em(104);
            }
        }
    }

    &-project {
        position: relative;
        display: block;
        text-align: center;

        .home & {
            background: $color-white;
            box-shadow: -2px -2px 5px 0 rgba(0, 0, 0, .025), 2px 2px 5px 0 rgba(0, 0, 0, .05);
            border-top-right-radius: to-em(2);
            border-top-left-radius: to-em(2);
            border-radius: to-em(4);
            overflow: hidden;
        }

        &-parent {
            background-size: cover;
            position: relative;
            display: grid;
            padding-top: to-em($gap-320);
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-column-gap: to-em($gap-320);
            grid-row-gap: to-em(24);

            @include layout-640() {
                padding-top: to-em($gap-640);
                grid-column-gap: to-em($gap-640);
                grid-row-gap: to-em(16);
                grid-template-columns: repeat(2, 1fr);
            }

            @include layout-768() {
                padding-top: to-em($gap-768);
                grid-gap: to-em($gap-768);
                grid-template-columns: repeat(2, 1fr);
            }

            @include layout-1024() {
                padding-top: to-em($gap-1024);
                grid-gap: to-em($gap-1024);
                grid-row-gap: to-em(40);
            }

            @include layout-1280() {
                grid-template-columns: repeat(3, 1fr);
            }

            @include layout-1680() {
                padding-top: to-em($gap-1680);
                grid-gap: to-em($gap-1680);
                grid-row-gap: to-em(64);
            }

            @include layout-2560() {
                padding-top: to-em($gap-2560);
                grid-row-gap: to-em(104);
                grid-template-columns: repeat(5, 1fr);
            }
        }


        &-title,
        &-at,
        &-role {
            position: relative;
            text-align: justify;
        }

        &-title {
            padding: to-em(24) to-em(16) 0;

            span {
                line-height: to-em(32);
                font-size: to-em(24);
                font-weight: 500
            }
        }

        &-at {
            padding: to-em(16) to-em(16) 0;
            line-height: to-em(20);
            font-size: to-em(16);

            span {
                font-weight: 300;
            }

            a {
                font-weight: 300;
            }
        }

        &-role {
            padding: to-em(8) to-em(16) to-em(32);
            text-transform: uppercase;
            line-height: to-em(11);
            font-size: to-em(11);

            span {
                font-weight: 200;
            }
        }

        &-read {
            text-transform: uppercase;
            font-weight: 500;
            text-align: right;
            position: absolute;
            right: 0;
            padding: to-em(4) to-em(8);
            padding-right: to-em(2);
            word-break: break-all;
            text-align: center;
            background: rgba(0, 0, 0, .6);
            color: white;
            top: 50%;
            border-top-left-radius: to-em(4);
            border-bottom-left-radius: to-em(4);
            transform: translateY(-100%);
            box-shadow: -2px -2px 2px 0 rgba(0, 0, 0, .15), 2px 2px 3px 0 rgba(0, 0, 0, .3);
        }
    }

    &-media {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
        box-shadow: -2px -2px 3px 0 rgba(0, 0, 0, .05), 1px 2px 3px rgba(0, 0, 0, .2);
    }
}
</style>