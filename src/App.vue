<template>
  <div id="app">
    <h1 class="hdn">luiskr.com</h1>
    <HeaderComponent />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <span class="loading">
      <span class="loading-1">L</span>
      <span class="loading-2">o</span>
      <span class="loading-3">a</span>
      <span class="loading-4">d</span>
      <span class="loading-5">i</span>
      <span class="loading-6">n</span>
      <span class="loading-7">g</span>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
     HeaderComponent
  },
  data() {
      return {
        has_touch: false,
        webp: '.jpg',
        webp2: '.jpg',
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        storage: 'https://storage.googleapis.com/luiskr.com/public/',
        origin: window.location.origin,
        domLoaded: false,
        projects: {
            "project":          "Project",
            "at":               "Developed at:",
            "role":             "Role:",
            "credits":          ["Check out for more info about ", " at:"],
            "checkit":          "Visit this project",
            "next":             "next: ",
            "prev":             "previous: ",
            "home":             "home",
            "home_link":        "home",
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
            "contribuition":    "My Contribuition:",
            "description":      "Description:"
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
      getUrlParam(parameter, defaultvalue){
        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });

            return vars;
        }

        var urlparameter = defaultvalue;
          if (window.location.href.indexOf(parameter) > -1)
              urlparameter = getUrlVars()[parameter];

        return urlparameter;
      },
      sendAnalyticsEvent(category, action, label, value) {
        // General Method to send Analytics, to be inheriteed
        this.$ga.event({
          eventCategory: category,
          eventAction: action,
          eventLabel: label,
          eventValue: value,
        });

        if (window.fbq !== undefined) {
          window.fbq('track', 'Lead', {
              content_name: label,
              value: value,
              currency: 'BRL'
          });
        }

        // Show Analytics on consle, object to be recorded
        function Record(category, action, label, value) {
            this.category = category;
            this.action = action,
            this.label = label,
            this.value = value;
        }

        // Show Analytics on console, display table with recordings
        if (this.records) console.table(new Record(category, action, label, value));
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
