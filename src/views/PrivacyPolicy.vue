<template>
  <div>
    <HeaderComponent current="info" />
    <main>
        <article class="main">
            <h2 class="about-title">Privacy Policy</h2>
        </article>
    </main>
    <FooterComponent absolute="true" current="privacy-policy"/>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'PrivacyPolicy',
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
