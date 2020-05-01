<template>
<div class="footer-open">
  <HeaderComponent current="info" />
    <main>
        <article class="main">
            <h2 class="main-title">Credits</h2>
            <p><a href="https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ">via GIPHY</a></p>
            <iframe src="https://giphy.com/embed/ZdliYXsCr5IAd3c3ZC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/corona-covid19-quarantine-ZdliYXsCr5IAd3c3ZC">via GIPHY</a></p>
            <iframe src="https://giphy.com/embed/l0MYz8G9LOyebz0Qg" width="480" height="332" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/l0MYz8G9LOyebz0Qg">via GIPHY</a></p>
            <iframe src="https://giphy.com/embed/3oFzm91Nna2F7SOceY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/art-pink-green-3oFzm91Nna2F7SOceY">via GIPHY</a></p>
            <iframe src="https://giphy.com/embed/r7Y17m4862kdW" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-video-kitty-r7Y17m4862kdW">via GIPHY</a></p>

            https://legal.here.com/en-gb/terms/documentation-license
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
  components: {
    HeaderComponent,
    FooterComponent
  },
  created() {
    document.body.classList.add("black");
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
