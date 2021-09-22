<template>
	<vue-calendar

	></vue-calendar>
<!--	<vue-calendar
			:show-limit="3"
			:events="events"
			:disable="disabledDays"
			:highlight="highlightDays"

			@show-all="showAll"
			@day-clicked="dayClicked"
			@event-clicked="eventClicked"
			@month-changed="monthChanged"
	></vue-calendar>-->
</template>

<script>
export default {
	name: 'Calendar',
	methods: {
		/*showAll(events) {
			// Do something...
		},
		dayClicked(day) {
			// Do something...
		},
		eventClicked(event) {
			// Do something...
		},
		monthChanged(start, end) {
			// Do something...
		}*/
	},
	created() {
		/*this.$calendar.eventBus.$on('show-all', events => showAll(events));
		this.$calendar.eventBus.$on('day-clicked', day =>  dayClicked(day));
		this.$calendar.eventBus.$on('event-clicked', event => eventClicked(event));
		this.$calendar.eventBus.$on('month-changed', (start, end) => monthChanged(start, end));*/
	}
}
</script>

<style scoped>
/*.vue-calendar {
	display: grid;
	grid-template-rows: 10% 90%;
	background: #fff;
	margin: 0 auto;
}
.calendar-header {
	align-items: center;
}
.header-left,
.header-right {
	flex: 1;
}
.header-center {
	flex: 3;
	text-align: center;
}
.title {
	margin: 0 5px;
}
.next-month,
.prev-month {
	cursor: pointer;
}
.calendar-body {
	display: grid;
	grid-template-rows: 5% 95%;
}
.days-header {
	display: grid;
	grid-auto-columns: 14.25%;
	grid-template-areas: "a a a a a a a";
	border-top: 1px solid #e0e0e0;
	border-left: 1px solid #e0e0e0;
	border-bottom: 1px solid #e0e0e0;
}
.days-body {
	display: grid;
	grid-template-rows: auto;
}
.day-number {
	text-align: right;
	margin-right: 10px;
}
.day-label {
	text-align: center;
	border-right: 1px solid #e0e0e0;
}
.week-row {
	display: grid;
	grid-template-areas: "a a a a a a a";
	grid-row-gap: 5px;
	grid-auto-columns: 14.25%;
	border-left: 1px solid #e0e0e0;
}
.week-day {
	padding: 4px;
	border-right: 1px solid #e0e0e0;
	border-bottom: 1px solid #e0e0e0;
}
.week-day.disabled {
	background-color: #f5f5f5;
}
.week-day.not-current > .day-number {
	color: #c3c3c3;
}
.week-day.today > .day-number {
	font-weight: 700;
	color: red;
}
.events {
	font-size: 12px;
	cursor: pointer;
	padding: 0 0 0 4px;
}
.events .event {
	height: 18px;
	line-height: 18px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin: 0 4px 2px 0;
	color: rgba(0, 0, 0, 0.87);
	background-color: #d4dcec;
}
.events .more-link {
	color: rgba(0, 0, 0, 0.38);
}*/
</style>