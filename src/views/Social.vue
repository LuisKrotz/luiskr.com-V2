<template>
  <div>
    <HeaderComponent current="social" />
    <video class="social-bg" :poster="origin + '/assets/glitch.min' + webp" loop muted autoplay playsinline alt="Background - Glitch">
        <source type="application/vnd.apple.mpegurl" :src="origin + '/assets/glitch' + '.m3u8'"/>
        <source type="video/mp4" :src="origin + '/assets/glitch' + '.mp4'"/>
        <source type="video/webm" :src="origin + '/assets/glitch' + '.webm'"/>
    </video>
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
      origin: this.$parent.origin,
      webp: this.$parent.webp
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

.social {
    padding-bottom: to-em(272);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: to-em($gap-320);


    &-title {
        mix-blend-mode: difference;
        text-align: center;
        display: block;
        position: relative;
        margin: 0 auto;
        font-size: to-em(64);
        font-weight: 500;

        @include layout-768() {
            font-weight: 300;
            font-size: to-em(104);
        }
    }

    &-subtitle {
        text-align: right;
        display: inline-block;
        position: relative;
        font-size: to-em(40);

        @include layout-960() {
            text-transform: uppercase;
            font-weight: 200;
        }
    }

    &-text {
        font-weight: 300;
        font-size: to-em(64);
        line-height: to-em(64);
        text-align: justify;
        position: relative;

        @include layout-768() {
            font-size: to-em(104);
            line-height: to-em(128);
        }

        a {
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .social-title {
        grid-column-start: 1;
        grid-column-end: 6;
    }

    .social-text.exception {
        font-weight: 200;
        grid-column-start: 1;
        grid-column-end: 6;
        padding: to-em(104) 0;

        @include layout-1680() {
            padding: 0;
        }
    }

    .social-subtitle {
        grid-column-start: 1;
        text-align: left;
    }

    .social-text {
        grid-column-start: 2;
        grid-column-end: 6;
    }

    @include layout-640() {
        grid-gap: to-em($gap-640);
    }

    @include layout-768() {
        grid-gap: to-em($gap-768);
    }

    @include layout-1024() {
        grid-gap: to-em($gap-1024);
    }

    @include layout-1440() {

        .social-title {
            grid-column-start: 1;
            grid-column-end: 6;
        }

        .social-text.exception {
            grid-column-start: 2;
            grid-column-end: 5;
        }

        .social-subtitle {
            grid-column-start: 2;
            text-align: right;
        }

        .social-text {
            grid-column-start: 3;
            grid-column-end: 5;
        }
    }

    @include layout-1680() {
        grid-gap: to-em($gap-1680);
    }

    @include layout-2560() {
        grid-gap: to-em($gap-2560);
    }

    &-bg {
        background: none;
        width: 150%;
        height: 150vh;
        top: 50%;
        left: 50%;
        position: fixed;
        filter: blur(15px);
        object-fit: cover;
        object-position: center;
        opacity: 0.9;
        transform: translate(-50%, -50%);
    }

    svg {
        fill: $color-white;
        mix-blend-mode: difference;
        width: to-em(64);
        height: to-em(64);

        @include layout-768() {
            width: to-em(128);
            height: to-em(128);
        }
    }
}
</style>