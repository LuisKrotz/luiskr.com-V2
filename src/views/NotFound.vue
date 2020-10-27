<template>
  <div class="footer-open">
    <video class="notfound-bg" :poster="storage + 'elvira' + webp2" loop muted autoplay playsinline alt="Background - Elvira mistress of the dark scene - Exploding a gas station while driving - Feeling lost">
        <source type="application/vnd.apple.mpegurl" :src="storage + 'elvira' + '.m3u8'"/>
        <source type="video/mp4" :src="storage + 'elvira' + '.mp4'"/>
        <source type="video/webm" :src="storage + 'elvira' + '.webm'"/>
    </video>
    <main class="max-area">
        <article class="about main">
          <h2 class="main-title" v-view>Are u lost?</h2>

          <h3 class="main-subtitle" v-view>404</h3>

          <h3 class="main-text" v-view @click="sendAnalyticsEvent('not_found_link', 'click','home', 100)"><router-link to="/">Try going to luiskr.com</router-link></h3>
        </article>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'NotFound',
  data() {
    return {
      storage: this.$parent.storage,
      webp2: this.$parent.webp2
    }
  },
  created() {
    document.title = this.$route.meta.title;

    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  methods: {
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

@import '../sass/NotFoundComponent/main.scss';
</style>
