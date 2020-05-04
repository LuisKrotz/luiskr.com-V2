<template>
  <div id="app">
    <h1 class="hdn">luiskr.com</h1>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import WebFontLoader from 'webfontloader'     // https://github.com/typekit/webfontloader

export default {
  data() {
    return {
      webp: false,
      placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      storage: 'https://storage.googleapis.com/luiskr.com/',
      origin: window.location.origin
    }
  },
  created() {
    let self = this;
    Modernizr.on('webp', function(result) {
      self.webp = result ? '.webp' : '.jpg';
    });

    WebFontLoader.load({
      google: {
        families: ['Work+Sans:200,300,400,500']
      },
      active: self.setFontLoaded,
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit('font-loaded');
    },
    footerOpen() {
      if(this.footeropen) {
        this.openclass = 'footer-open';
      }
    }
  },
};
</script>

<style lang="scss">
@import 'sass/variables';
@import 'sass/mixins';
@import 'sass/structure';
@import 'sass/placeholders';
@import 'sass/extends';

@import 'sass/AppComponent/main.scss';
</style>
