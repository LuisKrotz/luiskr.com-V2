<template>
  <div class="footer-open">
    <HeaderComponent current="info" />
    <video class="notfound-bg" :poster="storage + 'elvira' + webp" loop muted autoplay playsinline alt="Background - Elvira mistress of the dark scene - Exploding a gas station while driving - Feeling lost">
        <source type="application/vnd.apple.mpegurl" :src="storage + 'elvira' + '.m3u8'"/>
        <source type="video/mp4" :src="storage + 'elvira' + '.mp4'"/>
        <source type="video/webm" :src="storage + 'elvira' + '.webm'"/>
    </video>
    <main class="max-area">
        <article class="about main">
          <h2 class="main-title">Are u lost?</h2>
          <p class="main-subtitle">Click on any link at the bottom.</p>
          <h3 class="main-text">Looks like there is nothing here. Try going to luiskr.com at the home link.</h3>
          <p class="main-text">If have q request, please contact me at <a href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a></p>
        </article>
    </main>
    <FooterComponent current="gdpr"/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'NotFound',
  data() {
    return {
      placeholder: this.$parent.placeholder,
      storage: this.$parent.storage,
      origin: this.$parent.origin,
      webp: this.$parent.webp
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    document.body.classList.add("black");
    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  methods: {
    tracking(category, action, label, value) {
      this.$parent.tracking(category, action, label, value);
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

.notfound-bg {
  background: none;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  filter: blur(5px);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  opacity: .9;
}
</style>
