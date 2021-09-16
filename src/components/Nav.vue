<template>

	<div id="nav">
		<router-link to="/">
			<v-icon
					large
					color="lightgrey darken-2"
			>
				mdi-home
			</v-icon>
		</router-link>
		<router-link to="/board">
			<v-icon
					large
					color="lightgrey darken-2"
			>
				mdi-menu
			</v-icon>
		</router-link>
		<router-link to="/list">
			<v-icon
					large
					color="lightgrey darken-2"
			>
				mdi-finance
			</v-icon>
		</router-link>
		<router-link to="/statistic">
			<v-icon
					large
					color="lightgrey darken-2"
			>
				mdi-email
			</v-icon>
		</router-link>
		<router-link to="/chats">
			<v-icon
					large
					color="lightgrey darken-2"
			>
				mdi-account-multiple
			</v-icon>
		</router-link>
	</div>

</template>

<script>
export default {
	name: "Nav"
}
</script>

<style scoped>

</style>