<template>
	<div class="graph-block">
		<h3>Based on company size</h3>
		<div class="graph-block__inner">
			<div class="graph-block__average" :style="{ bottom: `${((140 -31) * (averageValue / 100)) + 31}px` }"></div>
			<BarChartItem
					v-for="item in chartData"
					:key="item.key"
					:data="item"
					:ave="averageValue"
			/>
		</div>
	</div>
</template>

<script>
import { axios } from "../../utils/axios";
import BarChartItem from "./components/BarChartItem";

export default {
	name: "BarChart",
	data() {
		return {
			chartData: null,
			averageValue: null
		}
	},
	components: {
		BarChartItem
	},
	mounted() {
		this.getData()
	},
	methods: {
		countAverage(array) {
			let total = 0
			for (const item of array) {
				total += item.value
      }
			this.averageValue = total / array.length
		},
		getData() {
			axios.get('/company-size')
					.then((res) => {
						this.chartData = res;
						this.countAverage(res);
					})
					.catch(e => {
						console.error(e)
					})
		}
	}
}
</script>

<style scoped>
.graph-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #2f3242;
	padding: 20px;
}
.graph-block h3 {
	color: #21a6c8;
}
.graph-block__inner {
	display: flex;
	position: relative;
	height: 140px;
}
.graph-block__average {
	position: absolute;
	left: 0;
	width: 100%;
	border-bottom: 1px dashed #21a6c8;
}
</style>
