<template>
	<div class="home">
		<div class="home-content">
			<div class="home-content__item content-item--large">
				<h1>Graph</h1>
			</div>
			<div class="home-content__item content-item--small">
				<h1>projects</h1>
			</div>
			<div class="home-content__item content-item--middle">
				<BarChart />
			</div>
			<div class="home-content__item content-item--small">
				<h1>Inbox</h1>
			</div>
			<div class="home-content__item content-item--small">
				<Calendar />
			</div>
		</div>
	</div>
</template>

<script>
import Calendar from "../components/Calendar";
import BarChart from "../components/BarChart"

export default {
	components: {
		Calendar,
		BarChart
	},
	name: "Home"
}
</script>

<style scoped>
	.home {
		overflow: hidden;
	}
	.home-content {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -.5em;
	}
	.home-content__item {
		box-sizing: border-box;
		padding: 0 .5em;
	}
	.content-item--large {
		width: 73%;
	}
	.content-item--middle {
		width: 46%;
	}
	.content-item--small {
		width: 27%;
	}
</style>
