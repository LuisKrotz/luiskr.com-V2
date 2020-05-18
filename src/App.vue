<template>
  <div id="app">
    <h1 class="hdn">luiskr.com</h1>
    <HeaderComponent />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import WebFontLoader from 'webfontloader'                         // https://github.com/typekit/webfontloader
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
     HeaderComponent
  },
  data() {
      return {
        webp: '.jpg',
        webp2: '.jpg',
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        storage: 'https://storage.googleapis.com/luiskr.com/public/',
        origin: window.location.origin
      }
    },
    created() {
      let self = this;

      Modernizr.on('webp', function (result) {
        self.webp = result ? '.webp' : seld.webp;
        self.webp2 = result ? '.jpg.webp' : seld.webp2;
      });

      WebFontLoader.load({
        google: {
          families: ['Work+Sans:200,300,400,500,600']
        },
        active: self.setFontLoaded,
      });
    },
    methods: {
      setFontLoaded() {
        this.$emit('font-loaded');
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
