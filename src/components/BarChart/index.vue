<template>
	<div>
		<BarChartItem
      v-for="item in chartData"
      :key="item.key"
      :data="item"
    />
	</div>
</template>

<script>
import { axios } from "../../utils/axios";
import BarChartItem from "./components/BarChartItem";

export default {
	name: "BarChart",
  data() {
		return {
			chartData: null
    }
  },
	components: {
		BarChartItem
	},
	mounted() {
		this.getData()
	},
	methods: {
		getData() {
			axios.get('/company-size')
				.then((res) => {
					this.chartData = res
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
