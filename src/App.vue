<template>
  <div id="app" :class="!show_cookie ? 'show-banner' : ''">
    <HeaderComponent data-no-snippet />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <span class="loading" data-no-snippet>Loading</span>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
     HeaderComponent
  },
  data() {
      return {
        show_cookie: Boolean(localStorage.getItem('cookie')),
        has_touch: false,
        webp: '.jpg',
        webp2: '.jpg',
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        storage: 'https://storage.googleapis.com/luiskr.com/public/',
        origin: window.location.origin,
        domLoaded: false,
        projects: {
            "project":          "Project",
            "at":               "Developed at ",
            "role":             "Role ",
            "originalURL":      "Original URL ",
            "checkit":          "Tap to visit ",
            "next":             "next: ",
            "prev":             "previous: ",
            "home":             "home",
            "home_link":        "home",
            "contribuition":    "My Contribuition ",
            "description":      "Description "
        },
        awards: {
          "next":             "next: ",
          "prev":             "previous: ",
          "checkit":          "Check out this award",
          "title":            "Awards",
          "animation_title":  "Animation by Giphy.com, credits on luiskr.com/credits",
          "animation_alt": [
              "GIPHY.com animation of ",
              "representing the mouse cursor, more info at: luiskr.com/credits"
          ],
          "animation":[
              "hands touching in pink background",
              "hands touching in universe background",
              "cat trying to get mouse pointer on computer",
              "3d face o looking to poiner",
              "handrawn man juggling an arrow "
          ],
        }
      }
    },
    created() {
      let self = this;

      Modernizr.on('webp', function (result) {
        self.webp = result ? '.webp' : self.webp;
        self.webp2 = result ? '.jpg.webp' : self.webp2;
      });

      try {
        document.createEvent("TouchEvent");
        self.has_touch =  true;
      } catch (e) {
        self.has_touch =  false;
      }

      window.addEventListener("load", function() {
        self.domLoaded = true;
      });
    },
    methods: {
      sendAnalyticsEvent(category, action, label, value) {
          // General Method to send Analytics, to be inheriteed
          this.$ga.event({
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value,
          });
      }
    }
  };
</script>

<style lang="scss">
@import 'sass/variables';
@import 'sass/mixins';
@import 'sass/structure';
@import 'sass/placeholders';
@import 'sass/extends';

@import 'sass/AppComponent/main.scss';
@import 'sass/HomeComponent/main.scss';
@import 'sass/AboutComponent/main.scss';
</style>
