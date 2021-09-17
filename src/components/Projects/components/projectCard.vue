<template>
	<div class="project-item"
		:class="{completed: data.status.name === 'Completed', progress: data.status.name === 'Progress', quened: data.status.name === 'Quened'}"
	>
		<div class="project-title">
			{{data.title.website}} <br>
			<span>{{data.title.company}}</span>
		</div>
		<div class="project-value">
			${{ data.value }}
		</div>
		<div class="project-deadline">
			{{ data.deadline.date }} <br>
			<span>{{ data.deadline.left }}</span>
		</div>
		<div class="project-spent">
			{{ data.spent }}
		</div>
		<div class="project-progress">
			{{ data.progress }}%
			<div class="progress-wrap">
				<div class="progress-inner" :style="{ width: `${data.progress}%`, backgroundColor: progressColor }"></div>
			</div>
		</div>
		<div class="project-status">
			{{ data.status.name }}
		</div>
		<div class="project-assigned">
			<div class="assignee-wrap">
				<div class="assignee-image">
					<img :src="data.assigned.photo"/>
				</div>
			</div>
			<div class="assignee-info">
				{{ data.assigned.name }} {{ data.assigned.lastName }} <br>
				<span> {{ data.assigned.position }} </span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "projectCard",
	props: {
		data: {
			required: true
		}
	},
	computed: {
		progressColor () {
			if (this.data.progress > 90) {
				return '#2196f3'
			} else {
				return '#4cae50'
			}
		}
	}
}
</script>

<style scoped>
.project-item {
	color: white;
	border-radius: 5px;
	background-color: #3a3e52;
	border-left: 4px solid #2196f3;
	padding: 25px 35px 25px 48px;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
	align-items: center;
}
.project-item.quened {
	border-color: #e1e2e7;
}
.project-item.completed {
	border-color: #4cae50;
}
.project-item span {
	color: #9ea3b4;
	font-size: 14px;
}
.project-title {
	width: 13.56%;
}
.project-value {
	width: 9.78%;
}
.project-deadline {
	width: 12.78%;
}
.project-spent {
	width: 11.76%;
}
.project-progress {
	width: 23.57%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-right: 70px;
}
.progress-wrap {
	width: 100%;
	height: 10px;
	background-color: #9EA3B4;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	box-sizing: border-box;
	margin-left: 10px;
}
.progress-inner {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	height: 100%;
	border-radius: 4px;
}
.project-status {
	width: 12%;
}
.project-assigned {
	display: flex;
	width: 16.55%;
}
.assignee-image {
	position: relative;
	width: 42px;
	height: 0;
	padding-bottom: 100%;
	overflow: hidden;
}

.assignee-image img {
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.assignee-info {
	padding-left: 25px;
}

</style>
