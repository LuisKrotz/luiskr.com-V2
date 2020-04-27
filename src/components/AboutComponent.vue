<template>
    <article class="main" v-lazy-container="{ selector: 'img' }">
    <h2 class="hdn">Internal <!-- SEO / ACESSILITY HIDEN TEXT | Page Title --></h2>

    <!-- Projects -->
    <div class="home-project" v-for="post in posts" :key="post.id">
      <img v-if="post.video === undefined" :width="post.img.width" :height="post.img.height" :data-src="storage + post.img.src" :alt="post.img.alt">
      <video v-else :width="post.video.width" :height="post.video.height" :poster="storage + post.video.img" :alt="post.video.alt">
        <source type="application/vnd.apple.mpegurl" :src="storage + post.video.src + '.m3u8'"/>
        <source type="video/mp4" :src="storage + post.video.src + '.mp4'"/>
        <source type="video/webm" :src="storage + post.video.src + '.webm'"/>
      </video>
      <h3 class="">{{ post.project }}</h3>
    </div>

  </article>
</template>
<script>
export default {
    name: 'ProjectComponent',
    data() {
      return {
        storage: 'https://storage.googleapis.com/luiskr.com/media',
        origin: window.location.origin,
        posts: []
      }
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    created() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get('id');

      document.body.classList.add("black");
      this.getPost(id);
    },
    methods: {
      getPost(id) {
        let self = this;

        fetch(`${self.origin}/translations/${id}.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.posts.push(data);
        })
      }
    }
}
</script>