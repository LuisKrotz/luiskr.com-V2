<template>
  <div class="footer-open">
    <main class="max-area">
        <article class="about main">
          <h2 class="main-title" v-view>GDPR</h2>
          <h3 class="main-subtitle" v-view>Data Protection Rights</h3>

          <p class="main-text" v-view>I would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <p class="main-text" v-view><strong>The right to access</strong> – You have the right to request copies of your data. I do not store any data, I'm happy to share any data from Google analytics collected if needed, no personal data is stored on this website.</p>
          <p class="main-text" v-view><strong>The right to rectification</strong> – You have the right to request that I correct any information you believe is inaccurate. You also have the right to request that I complete the information you believe is incomplete.</p>
          <p class="main-text" v-view><strong>The right to erasure</strong> – You have the right to request that any website erase your data, under certain conditions. I don't store any personal data.</p>
          <p class="main-text" v-view><strong>The right to restrict processing</strong> – You have the right to request that I restrict the processing of your data, under certain conditions. I don't store any personal data to be processed.</p>
          <p class="main-text" v-view><strong>The right to object to processing</strong> – You have the right to object to my processing of your data, under certain conditions. I don't store any personal data.</p>
          <p class="main-text" v-view><strong>The right to data portability</strong> – You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions. I'm happy to share any data from Google analytics collected if needed, no personal data is stored on this website.</p>
          <p class="main-text" v-view>If you make a request, I have one month to respond to you. If you would like to exercise any of these rights, please contact me at <a  @click="sendAnalyticsEvent('gdpr_link', 'click', 'mailto', 100)" href="mailto:luis.krotz@gmail.com">luis.krotz@gmail.com</a></p>
        </article>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'                            // https://vtimofeev.github.io/vue-check-view/index.html

Vue.use(checkView);

export default {
  name: 'GDPR',
  data() {
    return {
      storage: this.$parent.storage
    }
  },
  created() {
    document.title = this.$route.meta.title;
    document.body.scrollTop = 0;                // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
  },
  methods: {
    sendAnalyticsEvent(category, action, label, value) {
      this.$parent.sendAnalyticsEvent(category, action, label, value);
    }
  }
}
</script>