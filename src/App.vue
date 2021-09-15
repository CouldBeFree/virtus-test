<template>
	<v-app>
<!--		<v-app-bar>
			<router-link to="/board">
				<v-icon
						large
						color="lightgrey darken-2"
				>
					mdi-menu
				</v-icon>
			</router-link>
		</v-app-bar>-->

		<v-main class="flex">
			<v-card :height="windowHeight" width="50">
				<NavigationDrawer />
			</v-card>
			<router-view />
		</v-main>


	</v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";

export default {
	components: {
		NavigationDrawer
	},
	data: () => ({
		windowHeight: null
	}),
	methods: {
		getWindowHeight() {
			this.windowHeight = window.innerHeight
		}
	},
	mounted() {
		this.getWindowHeight();
	}
};
</script>

<style>
	#nav {
		display: flex;
		flex-direction: column;
	}
	#nav a {
		color: #fff;
		opacity: 1;
		text-decoration: none;
		margin-right: 10px;
		transition: color .3s ease;
	}
	#nav a.router-link-exact-active {
		color: crimson;
	}
	#nav a:hover {
		color: crimson;
	}
</style>
