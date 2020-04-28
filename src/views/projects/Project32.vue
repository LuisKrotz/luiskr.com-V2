<template>
  <main class="project-internal">
    <RenderProject data_id="32"/>
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project32',
    data() {
      return {
        storage: this.$parent.storage,
        origin: this.$parent.origin
      }
    },
    components: {
      RenderProject
    }
}
</script>