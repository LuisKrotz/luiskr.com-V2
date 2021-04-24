<template>
    <article class="home-c2">
        <router-link class="project"
          :to="($store.state.postsArrayLoaded ? post.path : '')"
          v-for="(post, index) in $store.state.posts"
          :key="index">

          <h3 class="project-link"
            @click="projectClick('portfolio_link', 'click', ($store.state.postsArrayLoaded ? post.project : '') , 100)"
            @mouseenter="projectHover($store.state.postsArrayLoaded ? `${storage}${post.img === undefined ? post.video.img : post.img.src}.jpg` : load)">

            <div class="project-link-info">
              <img class="project-link-info-media" :src="($store.state.postsArrayLoaded ? `${storage}${post.img === undefined ? post.video.img : post.img.src}.jpg` : load)" width="32" height="32"/>
              <span class="project-link-info-name">{{ ($store.state.postsArrayLoaded ? post.project : '...') }}</span>
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
        load: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjI5MXB4IiBoZWlnaHQ9IjI5MXB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDcuNSIgeT0iMzUuNSIgcng9IjIuNSIgcnk9IjIuNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwNTFhMiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIzLjMzMzMzMzMzMzMzMzMzMzVzIiBiZWdpbj0iLTIuODU3MTQyODU3MTQyODU3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg1MS40Mjg1NzE0Mjg1NzE0MyA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3LjUiIHk9IjM1LjUiIHJ4PSIyLjUiIHJ5PSIyLjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDUxYTIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMy4zMzMzMzMzMzMzMzMzMzM1cyIgYmVnaW49Ii0yLjM4MDk1MjM4MDk1MjM4MXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTAyLjg1NzE0Mjg1NzE0Mjg2IDUwIDUwKSI+CiAgPHJlY3QgeD0iNDcuNSIgeT0iMzUuNSIgcng9IjIuNSIgcnk9IjIuNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwNTFhMiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIzLjMzMzMzMzMzMzMzMzMzMzVzIiBiZWdpbj0iLTEuOTA0NzYxOTA0NzYxOTA0N3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTU0LjI4NTcxNDI4NTcxNDI4IDUwIDUwKSI+CiAgPHJlY3QgeD0iNDcuNSIgeT0iMzUuNSIgcng9IjIuNSIgcnk9IjIuNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwNTFhMiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIzLjMzMzMzMzMzMzMzMzMzMzVzIiBiZWdpbj0iLTEuNDI4NTcxNDI4NTcxNDI4NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjA1LjcxNDI4NTcxNDI4NTcyIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDcuNSIgeT0iMzUuNSIgcng9IjIuNSIgcnk9IjIuNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwNTFhMiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIzLjMzMzMzMzMzMzMzMzMzMzVzIiBiZWdpbj0iLTAuOTUyMzgwOTUyMzgwOTUyM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjU3LjE0Mjg1NzE0Mjg1NzE3IDUwIDUwKSI+CiAgPHJlY3QgeD0iNDcuNSIgeT0iMzUuNSIgcng9IjIuNSIgcnk9IjIuNSIgd2lkdGg9IjUiIGhlaWdodD0iNSIgZmlsbD0iIzAwNTFhMiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIzLjMzMzMzMzMzMzMzMzMzMzVzIiBiZWdpbj0iLTAuNDc2MTkwNDc2MTkwNDc2MTZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMwOC41NzE0Mjg1NzE0Mjg1NiA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3LjUiIHk9IjM1LjUiIHJ4PSIyLjUiIHJ5PSIyLjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDUxYTIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMy4zMzMzMzMzMzMzMzMzMzM1cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPgo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=',
        webp: '.gif',
        total: 77,
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

    this.$store.commit('stopHeaderScroll', false);

    this.getPosts();
  },
  methods: {
    getPosts() {
      let self = this;

      if (self.$store.state.postsArrayLoaded === false) {
        let i = self.total,
        urls = [];

        while(i > 0) {
          urls.push(`${self.origin}/projects/${i}.json`);
          i--;
        }

        async function request() {
          for (const [idx, url] of urls.entries()) {
              const response = await fetch(url);
              const json = await response.json();

              self.$store.commit('savePostData', {
                id: idx,
                data: json
              });
          }

          self.$store.commit('postsArrayLoaded', true);
        }

        request();
      }
    },
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    projectClick(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    },
    projectHover(source) {
      console.log('hover', source);
      this.$store.commit('loadedProjectData', `${source}`);
    }
  }
}
</script>