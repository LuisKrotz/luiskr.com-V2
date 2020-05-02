<template>
  <main class="project-internal">
    <RenderProject data_id="59"/>
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project57',
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