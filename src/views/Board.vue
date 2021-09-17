<template>
	<div>
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
			projects: [
				{
					id: 1,
          title: 'Lorem',
          value: '2222',
          deadline: '15 may 2016',
          spent: '40 hours',
          progress: '40',
          status: 'development',
          assigned: {
						name: 'lope',
            status: 'frontend'
          }
				},
				{
					id: 2,
					title: 'Ploer',
					value: '4500',
					deadline: '15 may 2022',
					spent: '10 hours',
					progress: '40',
					status: 'development',
					assigned: {
						name: 'lope',
						status: 'backend'
					}
				}
      ]
    }
  },
  components: {
		Projects
  }
}
</script>

<style scoped>

</style>
