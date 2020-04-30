<template>
  <div>
    <HeaderComponent current="home" />

    <main class="max-area">
      <article class="main">
        <h2 class="hdn" v-html="translations.home.title"></h2>

        <router-link class="home-project" :to="post.path" v-for="post in posts" :key="post.id">
          <picture v-if="post.video === undefined">
            <source type="image/jpeg" :srcset="storage + post.img.src + '.jpg'">
            <source type="image/webp" :srcset="storage + post.img.src + '.webp'">
            <img class="home-media" :src="storage + post.img.src + '.jpg'" :width="post.img.width" :height="post.img.height" :alt="post.img.alt" loading="lazy">
          </picture>
          <video v-else class="home-media" :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt" loading="lazy">
            <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'">
            <source type="video/mp4" :src="storage + post.video.src + '.mp4'">
            <source type="video/webm" :src="storage + post.video.src + '.webm'">
          </video>

          <h3 class="home-project-title">{{ post.project }}</h3>
          <h4 class="home-project-at"><a :href="post.at_link" target="_blank" rel="noopenner">{{ post.at_place }}</a></h4>
          <h5 class="home-project-role">{{ post.role }}</h5>
        </router-link>

        <router-view/>
      </article>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeComponent',
  data() {
    return {
      storage: this.$parent.storage,
      origin: this.$parent.origin,
      total: Number,
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
