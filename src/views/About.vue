<template>
  <div>
    <HeaderComponent current="about" />

    <main>
        <article class="main">
            <h2 class="main-title">About Me</h2>

            <nav>
              <a href="https://www.linkedin.com/in/luis-kr%C3%B6tz">
                <svg width="36" height="36" style="fill:white">
                  <use xlink:href="#svg-linkedin"/>
                </svg>
                <p>Linkedin</p>
              </a>
              <a href="https://www.instagram.com/j_luiskrotz">
                <svg width="36" height="36" style="fill:white">
                  <use xlink:href="#svg-instagram"/>
                </svg>
                <p>Instagram</p>
              </a>
              <a href="https://medium.com/@luis.krotz">
                <svg width="36" height="36" style="fill:white">
                  <use xlink:href="#svg-medium"/>
                </svg>
                <p>Medium</p>
              </a>
              <a href="https://www.twitch.tv/luiskrotz">
                <svg width="36" height="36" style="fill:white">
                  <use xlink:href="#svg-twitch"/>
                </svg>
                <p>Twitch</p>
              </a>
              <a href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">
                <svg width="36" height="36" style="fill:white">
                  <use xlink:href="#svg-youtube"/>
                </svg>
                <p>Youtube</p>
              </a>
            </nav>
        </article>

        <aside>
            <a href="mailto:luis.krotz@gmail.com">
              <svg width="36" height="36" style="fill:white">
                <use xlink:href="#svg-envelope"/>
              </svg>
              <p>Mail</p>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5551982274782">
              <svg width="36" height="36" style="fill:white">
                <use xlink:href="#svg-whatsapp"/>
              </svg>
              <p>Whatsapp</p>
            </a>
            <a href="sms://+14035550185">
              <svg width="36" height="36" style="fill:white">
                <use xlink:href="#svg-mobile"/>
              </svg>
              <p>iMessage</p>
            </a>
            <a href="https://github.com/LuisKrotz">
              <svg width="36" height="36" style="fill:white">
                <use xlink:href="#svg-github"/>
              </svg>
              <p>Github</p>
            </a>
        </aside>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'About',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      storage: this.$parent.storage,
      origin: this.$parent.origin,
      translations: undefined
    }
  },
  created() {
    let self = this;

    document.body.classList.add("black");

    fetch(`${self.origin}/translations/en_us/about.json`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        self.translations = data;
      });
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
