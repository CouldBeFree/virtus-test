<template>
	<v-app app>
		<v-navigation-drawer app v-model="drawer">
			<Nav />
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="exit" v-show="!drawer"></v-app-bar-nav-icon>
			<v-btn icon @click="exit" v-show="drawer">
				<v-icon
						color="lightgrey darken-2"
				>
					mdi-arrow-left
				</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- Sizes your content based upon application components -->
		<v-main>

			<!-- Provides the application the proper gutter -->
			<v-container fluid>

				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

	</v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
	components: {
		Nav
	},
	data: () => ({
		drawer: false
	}),
	methods: {
		exit() {
			this.drawer = !this.drawer
		}
	},
	mounted() {
		/*this.exit();*/
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
