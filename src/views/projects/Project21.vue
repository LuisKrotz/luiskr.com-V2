<template>
  <main class="project-internal">
    <RenderProject data_id="21"/>
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project21',
    data() {
      return {
        placeholder: this.$parent.placeholder,
        storage: this.$parent.storage,
        origin: this.$parent.origin
      }
    },
    components: {
      RenderProject
    }
}
</script>