<template>
	<div class="board">
		<Projects
				:data="projects"
		/>
	</div>
</template>

<script>
import Projects from '../components/Projects'

export default {
	name: "Board",
	data() {
		return {
			projects: [
				{
					id: 1,
					title: {
						website: 'New website',
						company: 'Microsoft'
					},
					value: 2300,
					deadline: {
						date: '15 May 2016',
						left: '10 days left'
					},
					spent: '40 hours',
					progress: '70%',
					status:  {
						value: 'Progress',
						name: 'Development',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-05.png',
						name: 'Dominic',
						lastName: 'Lynton',
						position: 'Front End Dev'
					}
				},
				{
					id: 2,
					title: {
						website: 'Landing page',
						company: 'Google'
					},
					value: 1250,
					deadline: {
						date: '21 May 2016',
						left: '25 days left'
					},
					spent: '7 hours',
					progress: '15%',
					status:  {
						value: 'Progress',
						name: 'Planning',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-04.png',
						name: 'Lyan',
						lastName: 'Roach',
						position: 'UX/UI Designer'
					}
				},
				{
					id: 3,
					title: {
						website: 'New dashboard',
						company: 'Symu.co'
					},
					value: 5100,
					deadline: {
						date: '15 May 2016',
						left: '2 days left'
					},
					spent: '56 hours',
					progress: '90%',
					status:  {
						value: 'Progress',
						name: 'Testing',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-02.png',
						name: 'Michelle',
						lastName: 'Stewart',
						position: 'Account'
					}
				},
				{
					id: 4,
					title: {
						website: 'New logo',
						company: 'JCD.pl'
					},
					value: 900,
					deadline: {
						date: '15 June 2015',
						left: '30 days left'
					},
					spent: '10 hours',
					progress: '40%',
					status:  {
						value: 'Progress',
						name: 'Design',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-04.png',
						name: 'Lyan',
						lastName: 'Roach',
						position: 'UX/UI Designer'
					}
				},
				{
					id: 5,
					title: {
						website: 'Landing page',
						company: 'Symu.co'
					},
					value: 1500,
					deadline: {
						date: '8 August 2016',
						left: '2 months left'
					},
					spent: '0 hours',
					progress: '0%',
					status:  {
						value: 'Quened',
						name: 'Quened',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-02.png',
						name: 'Michelle',
						lastName: 'Stewart',
						position: 'Account'
					}
				},
				{
					id: 6,
					title: {
						website: 'Mobile app',
						company: 'Facebook'
					},
					value: 4300,
					deadline: {
						date: '5th May 2016',
						left: 'Completed'
					},
					spent: '59 hours',
					progress: '100%',
					status:  {
						value: 'Completed',
						name: 'Completed',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-02.png',
						name: 'Michelle',
						lastName: 'Stewart',
						position: 'Account'
					}
				},
				{
					id: 7,
					title: {
						website: 'Wordpress theme',
						company: 'Themeforest'
					},
					value: 1300,
					deadline: {
						date: '2th May 2016',
						left: 'Completed'
					},
					spent: '30 hours',
					progress: '100%',
					status:  {
						value: 'Completed',
						name: 'Completed',
					},
					assigned: {
						photo: 'http://virtus-images.zzz.com.ua/user-02.png',
						name: 'Michelle',
						lastName: 'Stewart',
						position: 'Account'
					}
				},
				/*{
					id: 1,
					title: 'Lorem',
					value: '2222',
					deadline: '15 may 2016',
					spent: '40 hours',
					progress: '40',
					status: 'development',
					assigned: {
						name: 'lope',
						status: 'frontend'
					}
				},
				{
					id: 2,
					title: 'Ploer',
					value: '4500',
					deadline: '15 may 2022',
					spent: '10 hours',
					progress: '40',
					status: 'development',
					assigned: {
						name: 'lope',
						status: 'backend'
					}
				}*/
			]
		}
	},
	components: {
		Projects
	}
}
</script>

<style scoped>

</style>
