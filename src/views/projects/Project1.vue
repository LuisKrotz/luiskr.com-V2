<template>
  <main class="project-internal">
    <RenderProject id="1" />
  </main>
</template>

<script>
import RenderProject from '@/components/ProjectComponent.vue'

export default {
    name: 'Project1',
    components: {
      RenderProject
    }
}
</script>