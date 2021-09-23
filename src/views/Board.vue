<template>
	<div class="board">
		<Projects
				:data="projects"
		/>
	</div>
</template>

<script>
import Projects from '../components/Projects'

export default {
	name: "Board",
	data() {
		return {

		}
	},
	components: {
		Projects
	}
}
</script>

<style scoped>

</style>
