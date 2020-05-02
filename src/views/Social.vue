<template>
  <div>
    <HeaderComponent current="social" />
    <video class="social-bg" :src="origin + '/assets/glitch.mp4'" loop muted autoplay playsinline alt="" playbackRate="0.5"></video>
    <main class="max-area">
        <article class="social main">
            <h2 class="social-title">Social Media</h2>
            <h2 class="social-text exception">Hey, this are my main contact and social media accounts. Feel free to leave a message.</h2>
            
            <a class="social-subtitle" href="mailto:luis.krotz@gmail.com">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-envelope"/>
              </svg>
            </a>
            <a class="social-text" href="mailto:luis.krotz@gmail.com">Mail</a>

            <a class="social-subtitle" href="https://api.whatsapp.com/send?phone=+5551982274782">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-whatsapp"/>
              </svg>
            </a>
            <a class="social-text" href="https://api.whatsapp.com/send?phone=+5551982274782">Whatsapp</a>

            <a class="social-subtitle" href="sms://+14035550185">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-mobile"/>
              </svg>
            </a>
            <a class="social-text" href="sms://+14035550185">iMessage</a>

            <a class="social-subtitle" href="https://github.com/LuisKrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-github"/>
              </svg>
            </a>
            <a class="social-text" href="https://github.com/LuisKrotz">Github</a>

            <a class="social-subtitle" href="https://www.linkedin.com/in/luis-kr%C3%B6tz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-linkedin"/>
              </svg>
            </a>
            <a class="social-text" href="https://www.linkedin.com/in/luis-kr%C3%B6tz">Linkedin</a>

            <a class="social-subtitle" href="https://www.instagram.com/j_luiskrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-instagram"/>
              </svg>
            </a>
            <a class="social-text" href="https://www.instagram.com/j_luiskrotz">Instagram</a>

            <a class="social-subtitle" href="https://medium.com/@luis.krotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-medium"/>
              </svg>
            </a>
            <a class="social-text" href="https://medium.com/@luis.krotz">Medium</a>

            <a class="social-subtitle" href="https://www.twitch.tv/luiskrotz">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-twitch"/>
              </svg>
            </a>
            <a class="social-text" href="https://www.twitch.tv/luiskrotz">Twitch</a>

            <a class="social-subtitle" href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">
              <svg width="128" height="128" style="fill:white">
                <use xlink:href="#svg-youtube"/>
              </svg>
            </a>
            <a class="social-text" href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">Youtube</a>
        </article>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Social',
  data() {
    return {
      placeholder: this.$parent.placeholder,
      storage: this.$parent.storage,
      origin: this.$parent.origin
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
  }
}
</script>

<style lang="scss">
@import '../sass/variables';
@import '../sass/mixins';
@import '../sass/placeholders';
@import '../sass/extends';

@import '../sass/AboutComponent/main.scss';
</style>