<template>
	<div class="graph-block">
		<h3>Based on company size</h3>
		<div class="graph-block__inner">
			<BarChartItem
					v-for="item in chartData"
					:key="item.key"
					:data="item"
					:ave="sumValues"
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
			averageValue: null,
			valuesArray: [],
			sumValues: null
		}
	},
	components: {
		BarChartItem
	},
	mounted() {
		this.getData()
	},
	methods: {
		//в
		countAverage(array) {
			let total = 0,
			count = 0;
			array.forEach((item) => {
				total += item;
				count++;
			});
			return this.sumValues = total / count;
		},
		createArray(res) {
			res.forEach((element) => {
				this.valuesArray.push(element.value);
			})
			this.countAverage(this.valuesArray)
		},
		getData() {
			axios.get('/company-size')
					.then((res) => {
						this.chartData = res;
						this.averageValue = this.createArray(res);
						console.log(`Average value ${this.sumValues}`);
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
	top: 30%;
	width: 100%;
	border-bottom: 1px dashed #21a6c8;
}
</style>