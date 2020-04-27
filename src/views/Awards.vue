<template>
    <main>
        <article class="main" v-lazy-container="{ selector: 'img' }">
            <h2 class="about-title">Awards</h2>
        </article>
    </main>
</template>

<script>
export default {
  name: 'Awards',
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