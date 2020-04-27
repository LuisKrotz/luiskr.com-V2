<template>
  <main class="project-internal">
    <RenderProject id="42" />
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project42',
    components: {
      RenderProject
    }
}
</script>