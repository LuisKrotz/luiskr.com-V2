<template>
  <main class="project-internal">
    <RenderProject data_id="35"/>
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project35',
    data() {
      return {
        placeholder: this.$parent.placeholder,
        storage: this.$parent.storage,
        origin: this.$parent.origin,
        webp: this.$parent.webp
      }
    },
    components: {
      RenderProject
    }
}
</script>