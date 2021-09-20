<template>
	<Chat />
</template>

<script>
import Chat from '../components/Chat'

/*import { axios } from "../utils/axios";*/

export default {
	components: {
		Chat
	},
	name: "Chats"/*,
	mounted() {
		axios.get('/chat')
			.then(res => {
				console.log(res)
			})
			.catch(e => {
				console.error(e)
			})
	}*/
}
</script>

<style scoped>

</style>
