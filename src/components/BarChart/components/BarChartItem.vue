<template>
	<div>
		{{data}}
	</div>
</template>

<script>
export default {
	name: "BarChartItem",
  props: {
		data: {
			required: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
