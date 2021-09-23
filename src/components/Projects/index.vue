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
import {axios} from "../../utils/axios";

export default {
	name: "Projects",
	props: {
		data: {
			required: true
		}
	},
	components: {
		projectCard
	},
	mounted() {
		this.showProjects();
	},
	methods: {
		showProjects() {
			axios.get('/projects')
					.then((res) => {
						this.data = res
					})
					.catch(e => {
						console.error(e)
					})
		}
	}
}
</script>

<style scoped>

</style>
