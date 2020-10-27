<template>
  <div class="footer-open">
    <main class="max-area">
        <article>
          <div class="terms about main">
            <h2 class="main-title" v-view>MIT</h2>

            <h3 class="main-subtitle" v-view>Copyright (c) {{ year }} Luis Krotz</h3>
            <p class="main-text" v-view >The luiskr website located at <router-link to="/">luiskr.com</router-link> is copyrighted under <a href="https://opensource.org/licenses/MIT" rel="noopener" target="_blank">MIT LICENSE</a> originally created by Luis Krötz.</p>
            <h3 class="main-subtitle" v-view>License</h3>

            <p class="main-text" v-view >Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:</p>
            <p class="main-text" v-view >The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.</p>
            <p class="main-text" v-view >THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.</p>

            <h3 class="main-subtitle" v-view>Repository</h3>
            <p v-view  class="main-text"><a href="https://github.com/LuisKrotz/luiskr.com" rel="noopener" target="_blank">Any fork can be done via github, under MIT License, using this link.</a></p>

            <h3 class="main-subtitle" v-view>Contact Information</h3>
            <p class="main-text" v-view >Email: <a @click="sendAnalyticsEvent('license_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a><br>Address: Avenida João Pessoa, 925 / APTO. 14 / Farroupilha - Porto Alegre (RS) / BR</p>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'MIT',
  data() {
    return {
      webp2: this.$parent.webp2,
      storage: this.$parent.storage,
      year: ''
    }
  },
  created() {
    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
    document.title = this.$route.meta.title;

    let d = new Date();
    this.year = d.getFullYear();
  },
  methods: {
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    }
  }
}
</script>