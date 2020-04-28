<template>
    <main>
        <article class="main">
            <h2 class="about-title">PrivacyPolicy</h2>
        </article>
    </main>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
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
