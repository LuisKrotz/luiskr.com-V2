<template>
    <article class="home-c2">
      <router-link :to="post.path" v-for="(post, index) in posts" :key="index">
        <h3 class="project-link" @click="projectClick('portfolio_link', 'click', post.project, 100)">
          <div class="project-link-info">
            <img class="project-link-info-media" :src="`${storage}${post.img === undefined ? post.video.img : post.img.src}.jpg`" width="32" height="32"/>
            <span class="project-link-info-name">{{ post.project }}</span>
          </div>
          <span  class="project-link-more">
            <span class="hdn"> more </span>
            <span aria-hidden="true"> ► </span>
          </span>
        </h3>
      </router-link>
    </article>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'HomeComponent',
  data() {
    return {
        storage: this.$parent.storage,
        origin: this.$parent.origin,
        webp: '.gif',
        posts: [],
        links: {
          "about": [
              "/about",
              "About"
          ],
          "productions": [
              "/productions",
              "productions"
          ],
          "mail": [
              "mailto:luis.krotz@gmail.com?subject=Contact%20from%20luiskr.com&body",
              "Mail"
          ],
          "privacy_policy": [
              "/privacy-policy",
              "Privacy Policy"
          ],
          "terms_of_use": [
              "/terms-of-use",
              "Terms of Use"
          ],
          "GDPR": [
              "/GDPR",
              "GDPR"
          ],
          "credits": [
              "/credits",
              "Credits"
          ],
          "instagram": [
              "https://www.instagram.com/j_luiskrotz",
              "Instagram"
          ],
          "linkedin": [
              "https://www.linkedin.com/in/luis-kr%C3%B6tz/",
              "linkedin"
          ],
          "github": [
              "https://github.com/LuisKrotz",
              "github"
          ],
          "phone": [
              "tel:+5551982274782",
              "phone"
          ]
      },
    }
  },
  created() {
    let self = this;

    Modernizr.on('webp', function (result) {
      self.webp = result ?  self.webp : '.gif';
    });
  },
  mounted() {
    document.title = this.$route.meta.title;

    this.getPosts();
  },
  methods: {
    getPosts() {
      let self = this;
      let i = 77;
      let urls = [];

      while(i > 0) {
        urls.push(`${self.origin}/projects/${i}.json`);
        i--;
      }

      async function request() {
        for (const [idx, url] of urls.entries()) {
            const response = await fetch(url);
            const json = await response.json();

            self.posts.push(json);
        }

        console.log('Finished!');
      }

      request();
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    projectClick(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    }
  }
}
</script>