<template>
	<div class="graph-item">
		<div class="graph-item__wrap">
			<div class="graph-item__average" :style="{ bottom: `${ave}%` }"></div>
			<div class="graph-item__inner">
				<div class="graph-item__value">
					<div class="graph-item__fill" :style="{ height: `${data.value}%` }">
						<div class="graph-item__number">{{ data.value }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="graph-item__name">
			{{ data.name }}
		</div>
	</div>
</template>

<script>
export default {
	name: "BarChartItem",
	props: {
		data: {
			required: true,
			default: () => {}
		},
		ave: {
			required: true,
			default: () => {}
		}
	}
}
</script>

<style scoped>
.graph-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 80px;
	height: 100%;
}
.graph-item__wrap {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	flex-grow: 2;
}
.graph-item__average {
	position: absolute;
	left: 0;
	width: 100%;
	border-bottom: 1px dashed #21a6c8;
}
.graph-item__inner {
	height: 100%;
}
.graph-item__wrap:after {
	content: '';
	width: 100%;
	position: absolute;
	bottom: -1px;
	left: 0;
	height: 1px;
	background-color: #e1e1e8;
}
.graph-item__value {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	color: #21a6c8;
}
.graph-item__fill {
	position: relative;
	background-color: #e1e1e8;
	width: 35px;
}
.graph-item__number {
	position: absolute;
	left: 0;
	top: -2px;
	transform: translateY(-100%);
	width: 100%;
	text-align: center;
}
.graph-item__name {
	padding: 7px 5px 0 5px;
	color: #8989ab;
}
</style>
