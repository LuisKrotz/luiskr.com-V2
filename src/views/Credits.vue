<template>
<div class="footer-open">
  <HeaderComponent current="info" />
    <main class="max-area credits">
        <article>
          <div class="about main">
            <h2 class="main-title">Credits</h2>
            <p class="main-text">Special thanks for eveyone thar makes the web a bette place by sharing resources. In this page, are listed all imagens, and main tecnologies used to build this website.</p>
            <h3 class="main-subtitle">GIPHY, for the amazing images that gave life to this project.</h3>
            <p class="main-text"><a href="https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ"><iframe src="https://giphy.com/embed/U4XvsG5EDgAOd1ecDQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/corona-covid19-quarantine-ZdliYXsCr5IAd3c3ZC"><iframe src="https://giphy.com/embed/ZdliYXsCr5IAd3c3ZC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/l0MYz8G9LOyebz0Qg"><iframe src="https://giphy.com/embed/l0MYz8G9LOyebz0Qg" width="480" height="332" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/art-pink-green-3oFzm91Nna2F7SOceY"><iframe src="https://giphy.com/embed/3oFzm91Nna2F7SOceY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/cat-video-kitty-r7Y17m4862kdW"><iframe src="https://giphy.com/embed/r7Y17m4862kdW" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/glitch-vhs-max-capacity-yugSj8GSC0wXm"><iframe src="https://giphy.com/embed/yugSj8GSC0wXm" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>
            <p class="main-text"><a href="https://giphy.com/gifs/1990s-vhs-old-r7yDTMHecleQo"><iframe src="https://giphy.com/embed/r7yDTMHecleQo" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></a></p>

            <h3 class="main-subtitle">Tech</h3>
            <p class="main-text"><a href="https://www.here.com/">Here Maps</a>, for the terms of use location map showing where to find me.</p>
            <p class="main-text"><a href="https://vuejs.org/">VUEJS</a>, for Vue being the most handy and amazing framework to build quick, reliable and easy to maintain projects. Great shout out. </p>
            <p class="main-text"><a href="https://fonts.google.com/">Google Fonts</a>, for providing with amazing typography without cost to beautify the web.</p>
            <p class="main-text"><a href="https://sass-lang.com/">Sass</a>, for making my life a lot easier</p>

            <h3 class="main-subtitle">Font Awsome</h3>
            <p class="main-text"><a href="https://fontawesome.com/license">Font Awsome</a>, for the amazing icons.</p>
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
</style>
