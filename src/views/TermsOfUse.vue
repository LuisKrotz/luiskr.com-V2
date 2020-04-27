<template>
    <main>
        <article class="main" v-lazy-container="{ selector: 'img' }">
            <h2 class="about-title">Terms of Use</h2>
        </article>
    </main>
</template>

<script>
export default {
  name: 'TermsOfUse',
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
