<template>
    <main>
        <article class="main" v-lazy-container="{ selector: 'img' }">
            <h2 class="about-title">About Me</h2>
        </article>

        <footer class="footer">
            <a href="mailto:luis.krotz@gmail.com">Mail</a>
            <a href="https://api.whatsapp.com/send?phone=+5551982274782">Whatsapp</a>
            <a href="sms://+14035550185">iMessage</a>
            <a href="https://github.com/LuisKrotz">Github</a>
            <a href="https://www.linkedin.com/in/luis-kr%C3%B6tz/">Linkedin</a>
            <a href="https://www.instagram.com/j_luiskrotz/">Instagram</a>
            <a href="https://medium.com/@luis.krotz">Medium</a>
            <a href="https://www.twitch.tv/luiskrotz">Twitch</a>
            <a href="https://www.youtube.com/channel/UCtjY-xreMd_JF7ovY-paRAw?view_as=subscriber">Youtube</a>
        </footer>
    </main>
</template>

<script>
export default {
  name: 'About',
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
