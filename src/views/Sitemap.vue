<template>
  <div class="footer-open">
    <HeaderComponent current="info" />
    <main>
        <article class="main">
            <h2 class="main-title">Sitemap</h2>
        </article>
    </main>
    <FooterComponent current="sitemap"/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Sitemap',
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