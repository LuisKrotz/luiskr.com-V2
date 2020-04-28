<template>
    <main>
        <article class="main">
            <h2 class="about-title">Credits</h2>
            <p><a href="https://giphy.com/gifs/animation-juggling-handrawn-U4XvsG5EDgAOd1ecDQ">via GIPHY</a></p>
        </article>
    </main>
</template>

<script>
export default {
  name: 'Credits',
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
