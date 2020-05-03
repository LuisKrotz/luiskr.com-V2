<template>
<div class="footer-open">
  <HeaderComponent current="info" />
    <video class="credits-bg" :poster="origin + '/assets/the-end.min.jpg'" loop muted autoplay playsinline alt="Bage background - the end">
        <source type="application/vnd.apple.mpegurl" :src="origin + '/assets/the-end' + '.m3u8'"/>
        <source type="video/mp4" :src="origin + '/assets/the-end' + '.mp4'"/>
        <source type="video/webm" :src="origin + '/assets/the-end' + '.webm'"/>
    </video>
    <main class="max-area credits">
        <article>
          <div class="about main">
            <h2 class="main-title">Credits</h2>
            <p class="main-text"><span>Special thanks for eveyone thar makes the web a bette place by sharing resources. In this page, are listed all imagens, and main tecnologies used to build this website.</span></p>
            <h3 class="main-subtitle"><span>GIPHY, for the amazing images that gave life to this project.</span></h3>
            <p class="main-text"><a href="https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ"><iframe src="https://giphy.com/embed/U4XvsG5EDgAOd1ecDQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/corona-covid19-quarantine-ZdliYXsCr5IAd3c3ZC"><iframe src="https://giphy.com/embed/ZdliYXsCr5IAd3c3ZC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/l0MYz8G9LOyebz0Qg"><iframe src="https://giphy.com/embed/l0MYz8G9LOyebz0Qg" width="480" height="332" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/art-pink-green-3oFzm91Nna2F7SOceY"><iframe src="https://giphy.com/embed/3oFzm91Nna2F7SOceY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/cat-video-kitty-r7Y17m4862kdW"><iframe src="https://giphy.com/embed/r7Y17m4862kdW" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/glitch-vhs-max-capacity-yugSj8GSC0wXm"><iframe src="https://giphy.com/embed/yugSj8GSC0wXm" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/1990s-vhs-old-r7yDTMHecleQo"><iframe src="https://giphy.com/embed/r7yDTMHecleQo" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/trippy-gif-artist-ericaofanderson-5bDAc3il2DySZAFGpQ"><iframe src="https://giphy.com/embed/5bDAc3il2DySZAFGpQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/loop-stripes-trapcodetao-l46Cv2c0OzyhzUUMM"></iframe><iframe src="https://giphy.com/embed/l46Cv2c0OzyhzUUMM" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/filmeditor--halloween-elvira-mistress-of-the-dark-3otPopD7T9VunkHd3a"><iframe src="https://giphy.com/embed/3otPopD7T9VunkHd3a" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>

            <h3 class="main-subtitle"><span>Tech</span></h3>
            <p class="main-text"><span><a href="https://www.here.com/">Here Maps</a>, for the terms of use location map showing where to find me.</span></p>
            <p class="main-text"><span><a href="https://vuejs.org/">VUEJS</a>, for Vue being the most handy and amazing framework to build quick, reliable and easy to maintain projects. Great shout out. </span></p>
            <p class="main-text"><span><a href="https://fonts.google.com/">Google Fonts</a>, for providing with amazing typography without cost to beautify the web.</span></p>
            <p class="main-text"><span><a href="https://sass-lang.com/">Sass</a>, for making my life a lot easier</span></p>

            <h3 class="main-subtitle"><span>Font Awsome</span></h3>
            <p class="main-text"><span><a href="https://fontawesome.com/license">Font Awsome</a>, for the amazing icons.</span></p>
          </div>
      </article>
    </main>
    <FooterComponent current="credits"/>
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Credits',
  data() {
    return {
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

.credits {
    iframe {
        border-radius: to-em(4);
        background-color: rgba(255, 255, 255, .5);
        box-shadow: -2px -2px 5px 0 rgba(255, 255, 255, .05), 2px 2px 5px 0 rgba(255, 255, 255, .1);
    }

    &-bg {
        background: none;
        width: 100%;
        height: 100vh;
        top: 50%;
        left: 50%;
        position: fixed;
        filter: blur(5px);
        object-fit: cover;
        object-position: center;
        opacity: 0.9;
        transform: translate(-50%, -50%);
    }

    .main-title {
        text-shadow: to-em(70) to-em(3) to-em(20px) $color-white;
    }

    .main-text span {
        background: $color-black;
        padding: to-em(2);
    }

    .main-subtitle span {
        font-weight: 500;
        mix-blend-mode: exclusion;
        background: $color-white;
        color:  $color-black;
    }
}
</style>