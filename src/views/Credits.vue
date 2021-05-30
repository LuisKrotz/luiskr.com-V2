<template>
<div class="footer-open">
    <main class="max-area credits">
        <article>
          <div class="about main">
            <h2 class="main-title" v-view>Credits</h2>
            <h3 class="main-subtitle" v-view>Thanks</h3>
            <p class="main-text" v-view><span>Special thanks to everyone that makes the web a better place by sharing resources. On this page, are listed the main technologies used to build this website and resource sources.</span></p>
            <h3 class="main-subtitle" v-view><span>Tech</span></h3>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'VueJS', 50)" href="https://vuejs.org/">VUEJS</a>, for Vue being the handiest and amazing framework to build quick, reliable and easy to maintain projects. Great shout out. </span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Google Fonts', 50)" href="https://fonts.google.com/">Google Fonts</a>, for providing amazing typography without cost to beautify the web.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Sass', 50)" href="https://sass-lang.com/">Sass</a>, for making my life a lot easier.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Modernizr', 50)" href="https://modernizr.com/download/?-webp-setclasses">Modernizr</a>, for feature detection.</span></p>
            <p class="main-text" v-view><span><a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'Checkview', 50)" href="https://vtimofeev.github.io/vue-check-view/index.html">Check Viewport Plugin from Vtimofeev</a>, an amazing plugin to detect if an object is on the current viewport.</span></p>

            <h3 class="main-subtitle" v-view><span>GIPHY</span></h3>
            <p class="main-text" v-view><span>All gifs used on this project can be found at: <a target="_blank" rel="noopener" @click="sendAnalyticsEvent('credits_link', 'click', 'GIPHY', 50)" href="https://giphy.com">GYPHY.COM</a> and all the credits of them are of its creators.</span></p>
          </div>
      </article>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'Credits',
  data() {
    return {
      storage: this.$parent.storage,
      webp2: this.$parent.webp2
    }
  },
  created() {
    document.title = this.$route.meta.title;
    document.body.classList.add("black");
    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  sendAnalyticsEvent(category, action, label, value) {
    this.$parent.sendAnalyticsEvent(category, action, label, value);
  }
}
</script>