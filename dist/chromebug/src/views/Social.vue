<template>
  <div>
    <video class="social-bg" :poster="storage + 'glitch' + webp2" loop muted autoplay playsinline alt="Background - Glitch">
        <source type="application/vnd.apple.mpegurl" :src="storage + 'glitch' + '.m3u8'"/>
        <source type="video/mp4" :src="storage + 'glitch' + '.mp4'"/>
        <source type="video/webm" :src="storage + 'glitch' + '.webm'"/>
    </video>
    <main class="max-area">
        <article class="social main">
            <h2 class="social-title">Say Hello :)</h2>
            <h2 class="social-text exception">This are my main contact and social media accounts. Feel free to leave me a message or start a chat.</h2>
            
            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','mailto', 200)" href="mailto:luis.krotz@gmail.com">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-envelope"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','mailto', 200)" href="mailto:luis.krotz@gmail.com">Mail</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','whatsapp', 100)" href="https://api.whatsapp.com/send?phone=+5551982274782">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-whatsapp"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','whatsapp', 100)" href="https://api.whatsapp.com/send?phone=+5551982274782">Whatsapp</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('home_link', 'click','tel', 100)" href="sms://+14035550185">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-mobile"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('home_link', 'click','tel', 100)" href="sms://+14035550185">iMessage</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','git', 50)" href="https://github.com/LuisKrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-github"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','git', 50)" href="https://github.com/LuisKrotz">Github</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','linkedin', 75)" href="https://www.linkedin.com/in/luis-kr%C3%B6tz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-linkedin"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','linkedin', 75)" href="https://www.linkedin.com/in/luis-kr%C3%B6tz">Linkedin</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','instagram', 25)" href="https://www.instagram.com/j_luiskrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-instagram"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','instagram', 25)" href="https://www.instagram.com/j_luiskrotz">Instagram</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','medium', 25)" href="https://medium.com/@luis.krotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-medium"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','medium', 25)" href="https://medium.com/@luis.krotz">Medium</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','twitch', 10)" href="https://www.twitch.tv/luiskrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-twitch"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','twitch', 10)" href="https://www.twitch.tv/luiskrotz">Twitch</a>

            <a class="social-subtitle" @click="sendAnalyticsEvent('social_link', 'click','youtube', 10)" href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-youtube"/>
              </svg>
            </a>
            <a class="social-text" @click="sendAnalyticsEvent('social_link', 'click','youtube', 10)" href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">Youtube</a>
        </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      placeholder: this.$parent.placeholder,
      storage: this.$parent.storage,
      origin: this.$parent.origin,
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
@import '../sass/SocialComponent/main.scss';
</style>