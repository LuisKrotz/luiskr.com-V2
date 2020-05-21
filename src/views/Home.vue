<template>
  <div>
    <main class="home">
      <article class="main">
        <div class="home-cover-parent">
          <div class="max-area home-cover">
            <div class="home-cover-mobile" aria-hidden="true">
              <span class="main-title"><span>luiskr.com</span></span>
              <span class="main-subtitle">Hy, I'm Luis.</span>
            </div>

            <h2 class="main-title desk"><span>luiskr.com</span></h2>
            <h3 class="main-subtitle desk">Hy, I'm Luis.</h3>

            <p class="main-text first"><span>I'm a Frond-End Developer currently working full time at <a @click="sendAnalyticsEvent('home_link', 'click','transainc', 100)" href="https://www.instagram.com/transainc_" rel="noopener">transainc</a>. Living in Porto Alegre / Brazil, and a part time Freelancer.</span></p>
          </div>
          <div class="max-area home-cover black">
            <p class="main-text"><span>In this page you'll find more info about the <a href="#portfolio">jobs and projects</a> I worked on the past few years and a little bit <router-link class="footer-link" to="/about">about me.</router-link></span></p>
            <p class="main-text"><span>Feel free to explore and contact me at any time, by <a @click="sendAnalyticsEvent('home_link', 'click','mailto', 200)" href="mailto:luis.krotz@gmail.com" rel="noopener">email</a>, <a @click="sendAnalyticsEvent('home_link', 'click','tel', 200)" href="tel:+55982274782" rel="noopener">imessage</a> or <a @click="sendAnalyticsEvent('home_link', 'click','whatsapp', 200)" href="https://api.whatsapp.com/send?phone=+5551982274782" rel="noopener">whatsapp</a>.</span></p>
          </div>
        </div>

        <section class="home-projects">
          <h3 class="main-title" id="portfolio">Portfolio</h3>
          <div class="max-area home-project-parent">

            <router-link class="home-project" :to="post.path" v-for="post in posts" :key="post.id" :style="sethover">
                <div @mouseleave="clear()" @mouseenter="hover($event)" @mousemove="onMouseMove($event)" @click="projectClick('portfolio_link', 'click', post.project, 100)">
                    <div v-if="post.video === undefined && post.img === undefined" :style="'padding-top:' + (480 / 720 * 100) + '%'">
                        <img v-view v-if="prev.img === undefined && prev.video === undefined" class="home-media" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
                    </div>
                    <div class="lz-container" v-else-if="post.video === undefined" :style="'padding-top:' + (post.img.height / post.img.width * 100) + '%'">
                        <picture v-if="loaded" :key="'home-' + post.id">
                            <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
                            <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
                            <img class="lazy home-media" :src="storage + post.img.src + webp" :width="post.img.height" :height="post.img.width" :alt="post.img.alt" loading="lazy">
                        </picture>
                    </div>
                    <div class="lz-container" v-else :style="'padding-top:' + (post.video.height / post.video.width * 100) + '%'">
                        <video v-if="loaded" v-view="viewHandler" :width="post.video.width" class="lazy home-media" :height="post.video.height" :poster="storage + post.video.img + webp2" :alt="post.video.alt" loading="lazy" playsinline autoplay muted loop :key="'home-' + post.id">
                            <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
                            <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
                            <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
                        </video>
                    </div>

                    <h3 class="home-project-title">
                        <span>{{ post.project }}</span>
                    </h3>

                    <h4 class="home-project-at">
                        <span>{{ projects.at }} </span>
                        <a :href="post.at_link" target="_blank" rel="noopenner" @click="sendAnalyticsEvent('portfolio_link', 'click', projects.at + ': ' + post.at_place, 25)">{{ post.at_place }}</a>
                    </h4>

                    <h5 class="home-project-role">
                        <span>{{ projects.role }} </span>
                        <span>{{ post.role }}</span>
                    </h5>

                    <router-link class="home-project-read" :to="post.path">
                        Read<br>More
                    </router-link>
                </div>
            </router-link>
          </div>
        </section>

        <img :src="storage + 'scroll-down.gif'" class="home-scroll-down" border="0" @mouseenter="sendAnalyticsEvent('home_link', 'hover','scroll bottom', 10)" alt="Scroll Down"/>
        <img v-if="loaded" :src="storage + 'click/'+ random + '.gif'" class="hover" :style="'transform: translate(' + page.left + 'px, ' + page.top + 'px); visibility: '+ (showhover ? 'visible' : 'hidden')" alt="" aria-hidden="true">
      </article>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'HomeComponent',
  data() {
    return {
        loaded: document.readyState === "complete",
        placeholder: this.$parent.placeholder,
        storage: this.$parent.storage,
        origin: this.$parent.origin,
        webp: this.$parent.webp,
        webp2: this.$parent.webp2,
        total: Number,
        projects: Object,
        sethover: '',
        posts: [],
        stop: true,
        start: Number,
        end: Number,
        hovers: 13,
        showhover: false,
        random: 0,
        page: {
          left : 0,
          top: 0
        }
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
      self.end = self.end - 1;
    });
  },
  mounted() {
    let self = this,
        innerHeight = window.innerHeight;

    let half = innerHeight;
    let scrolldownicon = document.querySelector('.home-scroll-down');

    window.addEventListener('scroll', function() {
      if(self.$router.currentRoute.name === 'Home') {
        let offset = window.pageYOffset;

        if (offset + innerHeight >= document.body.scrollHeight - half && !self.stop) {
          self.getPosts(self.start, self.end);

          self.start = self.end - 1;
          self.end = self.end - 1 > 0 ? self.end - 1 : 1;
          self.stop = self.start === 0;

          self.loaded = document.readyState === "complete";
        }

        scrolldownicon.style = `opacity: -${offset - 1};`
        }
    });
  },
  methods: {
    getPosts(start, end) {
      let i = start, self = this;
 
      document.body.classList.add("getting");

      for(i = start; end <= i; i--) {
        fetch(`${self.origin}/projects/${i}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.posts.push(data);
          document.body.classList.remove("getting");
        })
      }
    },
    viewHandler(e) {
      this.$parent.viewHandler(e);
    },
    onMouseMove(e) {
      if(!this.$parent.has_touch) {
        this.page.left = e.pageX;
        this.page.top = e.pageY;
      }
    },
    hover(e) {
      if(!this.$parent.has_touch) {
        this.showhover = true;
        this.random = Math.round(Math.random() * this.hovers);

        this.onMouseMove(e);
      }
    },
    clear() {
        this.showhover = false;
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    projectClick(category, action, label, value) {

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

@import '../sass/HomeComponent/main.scss';
</style>