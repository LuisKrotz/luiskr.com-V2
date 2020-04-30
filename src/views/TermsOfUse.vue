<template>
  <div>
    <HeaderComponent current="info" />
    <main>
        <article class="main">
            <h2 class="about-title">Terms of Use</h2>
        </article>
    </main>
    <FooterComponent absolute="true" current="terms-of-use"/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'TermsOfUse',
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
