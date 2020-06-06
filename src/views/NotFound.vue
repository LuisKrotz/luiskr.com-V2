<template>
  <div class="footer-open">
    <video class="notfound-bg" :poster="storage + 'elvira' + webp2" loop muted autoplay playsinline alt="Background - Elvira mistress of the dark scene - Exploding a gas station while driving - Feeling lost">
        <source type="application/vnd.apple.mpegurl" :src="storage + 'elvira' + '.m3u8'"/>
        <source type="video/mp4" :src="storage + 'elvira' + '.mp4'"/>
        <source type="video/webm" :src="storage + 'elvira' + '.webm'"/>
    </video>
    <main class="max-area">
        <article class="about main">
          <h2 class="main-title">Are u lost?</h2>
          <p class="main-subtitle">Click on any link at the bottom.</p>
          <h3 class="main-text">Looks like there is nothing here. Try going to luiskr.com at the home link.</h3>
          <p class="main-text">If have q request, please contact me at <a  @click="sendAnalyticsEvent('not_found_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a></p>
        </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      storage: this.$parent.storage,
      webp2: this.$parent.webp2
    }
  },
  created() {
    document.body.classList.add("black");
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

@import '../sass/AboutComponent/main.scss';
@import '../sass/NotFoundComponent/main.scss';
</style>
