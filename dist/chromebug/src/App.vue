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

    <transition name="cookie">
      <div v-if="!show_cookie" class="cookie-banner">
        <div class="max-area">
          <p>
            This site uses third-party cookies from Google Analytics and Facebook Pixel to track page visits and events.<br>
            <router-link to="/?show-recors=true">Click here</router-link> and open your browser's console to see the ANONYMOUS data sent to Google and Pixel Analytics.<br>
            Get more info about data, cookies and terms of use at <router-link to="GDPR">GDPR</router-link>, <router-link to="terms-of-use">Terms of Use</router-link>, and <router-link to="privacy-policy">Privacy policy</router-link> of this website.<br>
            This page don't send pageviews and events without consent and don't store any visitor's data.<br>
            All session data is stored locally on your own browser, by the use of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener" target="_blank">local storage API</a>.<br>
            The consent can be revoked by cleaning your browser's locally stored data.
          </p>
          <div class="second-column">
            <div class="second-column-fixed">
              <button class="accept" @click="accept()"><span>I accept</span></button>
              <button class="refuse" @click="close()"><span>Ignore me</span></button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import WebFontLoader from 'webfontloader'                         // https://github.com/typekit/webfontloader
import HeaderComponent from '@/components/HeaderComponent.vue'
import checkView from 'vue-check-view'

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
        origin: window.location.origin
      }
    },
    created() {
      let self = this;

      Modernizr.on('webp', function (result) {
        self.webp = result ? '.webp' : self.webp;
        self.webp2 = result ? '.jpg.webp' : self.webp2;
      });

      WebFontLoader.load({
        google: {
          families: ['Work+Sans:200,300,400,500,900']
        },
        active: self.setFontLoaded,
      });

      try {
        document.createEvent("TouchEvent");
        self.has_touch =  true;
      } catch (e) {
        self.has_touch =  false;
      }
    },
    methods: {
      setFontLoaded() {
        this.$emit('font-loaded');
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
      viewHandler(e) {
        let video, promise, i, t;

        video = e.target.element;
        if (e.percentInView > 0) {
            for (i = 0, t = video.lenght; i < t; i+=1) {
                promise = video[i].play();

                if (promise !== undefined) {
                    promise.then(_ => {
                        resolve(video[i].play());
                    }).catch(error => {
                        return void(0);
                    });
                }
            }
        } else {
            for (i = 0, t = video.lenght; i < t; i+=1) {
                promise = video[i].pause();

                if (promise !== undefined) {
                    promise.then(_ => {
                        resolve(video[i].pause());
                    }).catch(error => {
                        return void(0);
                    });
                }
            }
        }

        //console.log(e.type) // 'enter', 'exit', 'progress'
        //console.log(e.percentInView) // 0..1 how much element overlap the viewport
        //console.log(e.percentTop) // 0..1 position of element at viewport 0 - above , 1 - below
        //console.log(e.percentCenter) // 0..1 position the center of element at viewport 0 - center at viewport top, 1 - center at viewport bottom
        //console.log(e.scrollPercent) // 0..1 current scroll position of page
        //console.log(e.scrollValue) // 0..1 last scroll value (change of page scroll offset)
        //console.log(e.target.rect) // element.getBoundingClientRect() result
      },
      accept() {
        localStorage.setItem('cookie', true);
        this.show_cookie = true;

        document.dispatchEvent(new Event("accepted"));
      },
      close() {
          this.show_cookie = true;
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
</style>
