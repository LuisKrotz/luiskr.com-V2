<template>
  <div id="app">
    <header id="nav" class="nav">
      <router-link class="nav-logo" to="/">
        <h1>luiskr.com</h1>
      </router-link>

      <div class="nav-right">
        <router-link class="nav-link" to="/about">About</router-link>

        <a class="nav-link" href="" target="_blank">Say Hello</a>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import WebFontLoader from 'webfontloader' //https://github.com/typekit/webfontloader
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3,
  observer: 'IntersectionObserver' in window ? true : false,
  listenEvents: [ 'scroll', 'resize', 'animationend']
});
export default {
  created() {
    WebFontLoader.load({
      google: {
        families: ['Work+Sans:200,300,600']
      },
      active: this.setFontLoaded,
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
