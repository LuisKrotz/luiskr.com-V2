<template>
    <footer class="footer-modal max-area" :style="absolute ? 'position: absolute' : ''">
      <h4 class="hdn">More stuff</h4>

      <router-link :class="'footer-modal-link ' + (current === 'privacy-policy' ? 'active' : '')" to="/privacy-policy">
        <p class="footer-modal-link-title">Privacy Policy</p>
      </router-link>

      <router-link :class="'footer-modal-link ' + (current === 'terms-of-use' ? 'active' : '')" to="/terms-of-use">
        <p class="footer-modal-link-title">Terms of Use</p>
      </router-link>

      <router-link :class="'footer-modal-link center ' + (current === 'privacy-policy' ? 'active' : '')" to="/GDPR">
        <p class="footer-modal-link-title">GDPR</p>
      </router-link>

      <router-link :class="'footer-modal-link center-right ' + (current === 'privacy-policy' ? 'active' : '')" to="/credits">
        <p class="footer-modal-link-title">Credits</p>
      </router-link>

      <router-link :class="'footer-modal-link right ' + (current === 'privacy-policy' ? 'active' : '')" to="/">
        <p class="footer-modal-link-title">Sitemap</p>
      </router-link>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    props: {
      current: {
            type: '',
            required: false
      },
      absolute: {
            type: Boolean,
            default: false,
            required: false
      }
    }
}
</script>
