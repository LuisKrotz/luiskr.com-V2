<template>
  <div>
    <HeaderComponent current="home" />

    <main class="home">
      <article class="main">
        <div class="home-cover-parent">
          <div class="max-area home-cover">
            <h2 class="main-title">luiskr.com</h2>
            <h3 class="main-subtitle">Hy, I'm Luis.</h3>

            <p class="main-text">I'm a Frond-End Developer currently working full time at <a href="" rel="noopener">transainc</a>, living in Porto Alegre / Brazil and as a part time Freelancer.</p>
          </div>
          <div class="max-area home-cover">
            <p class="main-text">In this page you'll find more info about the <a href="#portfolio">jobs and projects</a> I worked in on the past few years and a little bit <router-link class="footer-link" to="/about">about me.</router-link></p>
            <p class="main-text">Feel free to explore and contact me at any time, by <a href="mailto:luis.krotz@gmail.com" rel="noopener">email</a>, <a href="tel:+55982274782" rel="noopener">imessage</a> or <a href="https://api.whatsapp.com/send?phone=+5551982274782" rel="noopener">whatsapp</a>.</p>
          </div>
        </div>

        <section class="home-projects">
          <h3 class="main-title" id="portfolio">Portfolio</h3>
          <div class="max-area home-project-parent">

            <router-link class="home-project" :to="post.path" v-for="post in posts" :key="post.id">
              <picture v-if="post.video === undefined">
                <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
                <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
                <img class="home-media" :src="storage + post.img.src + '.jpg'" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
              </picture>
              <video v-view="viewHandler" v-else class="home-media" :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt" loading="lazy" loop playsinline muted autoplay>
                <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'">
                <source type="video/mp4" :src="storage + post.video.src + '.mp4'">
                <source type="video/webm" :src="storage + post.video.src + '.webm'">
              </video>

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
import checkView from 'vue-check-view'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HereMapsComponent from '@/components/HereMapsComponent.vue'

Vue.use(checkView);

export default {
  name: 'HomeComponent',
  data() {
    return {
      placeholder: this.$parent.placeholder,
      storage: this.$parent.storage,
      origin: this.$parent.origin,
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
      self.end = self.projects.total - 10;

      self.getPosts(self.start, self.end);
      self.stop = false;

      self.start = self.end - 1;
      self.end = self.end - 10;
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
          self.end = self.end - 10 > 0 ? self.end - 10 : 1;
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
          //
        }).then((data) => {
          self.posts.push(data);
        })
      }
    },
    footerOpen() {
      this.$parent.footerOpen();
    },
    viewHandler(e) {
      let video, promise, i, t;

      video = e.target.element;
      if (e.percentInView > 0) {
          for (i = 0, t = video.lenght; i < t; i+=1) {
              promise = video[i].play();

              if (promise !== undefined) {
                  promise.then(_ => {
                      resolve(video[i].play());
                  }).catch(error => {
                      return void(0);
                  });
              }
          }
      } else {
          for (i = 0, t = video.lenght; i < t; i+=1) {
              promise = video[i].pause();

              if (promise !== undefined) {
                  promise.then(_ => {
                      resolve(video[i].pause());
                  }).catch(error => {
                      return void(0);
                  });
              }
          }
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

@import '../sass/HomeComponent/main.scss';
</style>
