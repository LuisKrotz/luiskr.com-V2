<template>
  <main>
    <article class="main" v-lazy-container="{ selector: 'img' }">
      <h2 class="hdn" v-html="translations.home.title"></h2>

      <!-- Projects -->
      <router-link class="home-project" :to="post.path + '?id=' + post.id" v-for="post in posts" :key="post.id">
        <img v-if="post.video === undefined" :width="post.img.width" :height="post.img.height" :data-src="storage + post.img.src" :alt="post.img.alt">
        <video v-else :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt">
          <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
          <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
          <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
        </video>

        <h3 class="home-project-title">{{ post.project }}</h3>
        <h4 class="home-project-at"><a :href="post.at_link" target="_blank" rel="noopenner">{{ post.at_place }}</a></h4>
        <h5 class="home-project-role">{{ post.role }}</h5>
      </router-link>


      <router-view/>
    </article>


      <footer class="footer">
          <router-link to="/about">About</router-link>
          <router-link to="/awards">Awards</router-link>

          <button>Footer</button>

          <nav>
            <h4>Some Legal stuff</h4>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
            <router-link to="/terms-of-use">Terms of Use</router-link>
            <router-link to="/GDPR">GDPR</router-link>
          </nav>
      </footer>

    <ScrollTopComponent />
  </main>
</template>

<script>
import ScrollTopComponent from '@/components/partials/ScrollTopComponent.vue'

export default {
  name: 'HomeComponent',
  data() {
    return {
      storage: 'https://storage.googleapis.com/luiskr.com/media',
      origin: window.location.origin,
      translations: {
        home: Object,
        projects: Object
      },
      posts: [],
      stop: true,
      start: Number,
      end: Number
    }
  },
  created() {
    let self = this;

    document.body.classList.remove("black");

    // Fetch home translations
    fetch(`${self.origin}/translations/en_us/home.json`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      self.translations.home = data;
    });

    // Fetch projects translations
    fetch(`${self.origin}/translations/en_us/projects.json`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      self.translations.projects = data;

      self.start = self.translations.projects.total;
      self.end = self.translations.projects.total - 10;

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
      ScrollTopComponent
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
