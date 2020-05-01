<template>
    <footer class="footer-modal">
      <div class="max-area" v-if="translations !== undefined">
        <h4 class="hdn">{{ translations.title }}</h4>

        <router-link class="footer-modal-link" :to="translations.privacy_policy[0]">
          <p class="footer-modal-link-title">{{ translations.privacy_policy[1] }}</p>
        </router-link>

        <router-link class="footer-modal-link" :to="translations.terms_of_use[0]">
          <p class="footer-modal-link-title">{{ translations.terms_of_use[1] }}</p>
        </router-link>

        <router-link class="footer-modal-link center" :to="translations.GDPR[0]">
          <p class="footer-modal-link-title">{{ translations.GDPR[1] }}</p>
        </router-link>

        <router-link class="footer-modal-link center-right" :to="translations.credits[0]">
          <p class="footer-modal-link-title">{{ translations.credits[1] }}</p>
        </router-link>

        <router-link class="footer-modal-link right" :to="translations.sitemap[0]">
          <p class="footer-modal-link-title">{{ translations.sitemap[1] }}</p>
        </router-link>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
      return {
        origin: window.location.origin,
        translations: undefined
      }
    },
    props: {
      current: {
            type: '',
            required: false
      }
    },
    created() {
      let self = this;

      fetch(`${self.origin}/translations/en_us/footer.json`)
        .then((response) => {
          return response.json();
        }).then((data) => {
          self.translations = data;
        });
    }
}
</script>
