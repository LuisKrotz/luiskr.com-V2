<template>
  <div id="app" :class="!show_cookie ? 'show-banner' : ''">
    <h1 class="hdn">luiskr.com</h1>
    <HeaderComponent />

    <main class="home max-area">
      <div class="home-c1" ref="c1_media_height">
        <img class="home-c1-media" :src="$store.state.sideImage" width="180" height="180">
      </div>

      <div :style="{'padding-top': generalPadding}">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>

    <FooterComponent /> 

    <transition name="cookie">
      <aside v-if="!show_cookie && domLoaded" class="cookie-banner">
        <div class="max-area">
          <p>
            This site uses third-party cookies from Google Analytics to track page visits and events.
            Get more info about data, cookies and terms of use at GDPR, Terms of Use and Privacy policy of this website.
            This page doesn't send pageviews and events without consent and doesn't store any visitor's data.
            All session data is stored locally on your own browser, by the use of the local storage API.
            The consent can be revoked by clearing your browser's locally stored data.
          </p>
          <div class="second-column">
            <div class="second-column-fixed">
              <button class="second-column-button" @click="accept()"><span class="accept">Accept</span></button>
              <button class="second-column-button" @click="close()"><span class="refuse">Don't track</span></button>
            </div>
          </div>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
     HeaderComponent,
     FooterComponent
  },
  data() {
      return {
        show_cookie: Boolean(localStorage.getItem('cookie')),
        has_touch: false,
        smallHeader: false,
        webp: '.jpg',
        webp2: '.jpg',
        placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        storage: 'https://storage.googleapis.com/luiskr.com/public/',
        origin: window.location.origin,
        domLoaded: false,
        generalPadding: null,
        smallHeader: false,
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
        },
        headerFooterArray: {
            "title": "Menu",
            "toggle": [
                "Open Menu",
                "Close Menu"
            ],
            "home": [
                "/",
                " Projects "
            ],
            "about": [
                "/about",
                " About "
            ],
            "contact": [
                "/contact",
                " Contact "
            ],
            "awards": [
                "/awards",
                " Awards "
            ],
            "productions": [
                "/productions",
                "productions"
            ],
            "mail": [
                "mailto:luis.krotz@gmail.com?subject=Contact%20from%20luiskr.com&body",
                "Mail"
            ],
            "privacy_policy": [
                "/privacy-policy",
                "Privacy Policy"
            ],
            "terms_of_use": [
                "/terms-of-use",
                "Terms of Use"
            ],
            "GDPR": [
                "/GDPR",
                "GDPR"
            ],
            "credits": [
                "/credits",
                "Credits"
            ],
            "instagram": [
                "https://www.instagram.com/j_luiskrotz",
                "Instagram"
            ],
            "linkedin": [
                "https://www.linkedin.com/in/luis-kr%C3%B6tz/",
                "linkedin"
            ],
            "github": [
                "https://github.com/LuisKrotz",
                "github"
            ],
            "phone": [
                "tel:+5551982274782",
                "phone"
            ]
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
    mounted() {
      this.generalPadding = `${this.$refs.c1_media_height.clientHeight + this.$refs.c1_media_height.offsetTop}px`;
    },
    methods: {
      updateStatus(status) {
        this.smallHeader = status;
      },
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
        if (Boolean(localStorage.getItem('cookie:accepted')) === true) {
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

        } else if(this.records) console.log('Not tracking. Cookies not allowed');
      },
      accept() {
        localStorage.setItem('cookie', true);
        this.show_cookie = true;
        document.body.classList.remove('show-banner');

        document.dispatchEvent(new Event("accepted"));
      },
      close() {
          this.show_cookie = true;
          document.body.classList.remove('show-banner');
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
