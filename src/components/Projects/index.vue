<template>
  <div class="project-list">
    <h1>Projects</h1>
    <project-card
      v-for="project in data"
      :key="project.key"
      :data="project"
    />
  </div>
</template>

<script>
import projectCard from "./components/projectCard";

export default {
	name: "Projects",
  props: {
		data: {
			required: true
    }
  },
  components: {
		projectCard
  }
}
</script>

<style scoped>

</style>
