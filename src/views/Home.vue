<template>
  <div>
    <main class="home">
      <article class="main">
        <div class="home-cover-parent">
          <div class="max-area home-cover">
            <div class="home-cover-mobile" aria-hidden="true">
              <div class="home-cover-mobile-content">
                <span class="main-title"><span>luiskr.com</span></span>
                <span class="main-subtitle">Hy, I'm Luis.</span>
              </div>
            </div>

            <h2 class="main-title desk"><span>luiskr.com</span></h2>
            <h3 class="main-subtitle desk">Hy, I'm Luis.</h3>

            <p class="main-text first"><span>I'm a Frond-End Developer currently working full time at <a @click="sendAnalyticsEvent('home_link', 'click','transainc', 100)" href="https://www.instagram.com/transainc_" rel="noopener">transainc</a>. Living in Porto Alegre / Brazil, and a part-time Freelancer.</span></p>
          </div>

          <div class="max-area home-cover second">
            <p class="main-text"><span>In this page, you'll find more info about the <a href="#portfolio">jobs and projects</a> I worked on in the past few years and a little bit <router-link class="footer-link" to="/about">about me.</router-link></span></p>
            <p class="main-text"><span>Feel free to explore and contact me at any time, by <a @click="sendAnalyticsEvent('home_link', 'click','mailto', 200)" href="mailto:luis.krotz@gmail.com" rel="noopener">email</a>, <a @click="sendAnalyticsEvent('home_link', 'click','tel', 200)" href="tel:+55982274782" rel="noopener">imessage</a> or <a @click="sendAnalyticsEvent('home_link', 'click','whatsapp', 200)" href="https://api.whatsapp.com/send?phone=+5551982274782" rel="noopener">whatsapp</a>.</span></p>
          </div>
        </div>

        <section class="home-projects">
          <h3 class="main-title" id="portfolio"><span>Portfolio</span></h3>
          <div class="max-area home-project-parent">
            <router-link class="home-project" :to="post.path" v-for="post in posts" :key="post.id" :style="sethover">
                <div @mouseleave="clear()" @mouseenter="hover($event)" @mousemove="onMouseMove($event)" @click="projectClick('portfolio_link', 'click', post.project, 100)">
                    <picture v-if="post.img !== undefined" :key="'home-' + post.id">
                      <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
                      <source type="image/webp" :srcset="storage + post.img.src + '.jpg.webp'">
                      <img class="lazy home-media" :src="storage + post.img.src + webp" :width="post.img.height" :height="post.img.width" :alt="post.img.alt">
                    </picture>

                    <picture v-if="post.video !== undefined" :key="'home-' + post.id">
                      <source type="image/jpeg" :srcset="storage + post.video.src + '.jpg'">
                      <source type="image/webp" :srcset="storage + post.video.src + '.jpg.webp'">
                      <img class="lazy home-media" :src="storage + post.video.src + webp" :width="post.video.height" :height="post.video.width" :alt="post.video.alt">
                    </picture>

                    <h3 class="home-project-title">
                        <span>{{ post.project }}</span>
                    </h3>

                    <h4 class="home-project-at">
                        <span>{{ projects.at }} 
                          <a :href="post.at_link" target="_blank" rel="noopenner" @click="sendAnalyticsEvent('portfolio_link', 'click', projects.at + ': ' + post.at_place, 25)">{{ post.at_place }}</a>
                        </span>
                    </h4>

                  <span class="home-project-read" :to="post.path">Read<br>More</span>
                </div>
            </router-link>
          </div>
        </section>

        <img v-if="this.$parent.domLoaded" :src="storage + 'click/'+ random + '.gif'" class="hover" :style="'transform: translate3D(' + page.left + 'px, ' + page.top + 'px, 0);'+ (showhover ? ' visibility: visible; opacity: 1' : ' visibility: hidden; opacity: 0')" alt="" aria-hidden="true">
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
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

      self.stop = false;
    });
  },
  mounted() {
    let self = this,
        innerHeight = window.innerHeight;

    let half = innerHeight;

    window.addEventListener('scroll', function() {
      if(self.$router.currentRoute.name === 'Home') {
          let offset = window.pageYOffset;

          if (offset + innerHeight >= document.body.scrollHeight - half && !self.stop) {
            self.getPosts(self.start, self.end);

            self.start = self.end - 1;
            self.end = self.end - 1 > 0 ? self.end - 1 : 1;
            self.stop = self.start === 0;
          }
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
    onMouseMove(e) {
      if(!this.$parent.has_touch) {
        this.page.left = e.pageX - 50;
        this.page.top = e.pageY - 25;
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