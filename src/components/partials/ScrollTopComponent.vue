<template>
    <button class="position-right nav-link to-top" @click="scrollTop">
        Back to Top
    </button>
</template>

<script>
export default {
  name: 'ScrollToComponent',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>
