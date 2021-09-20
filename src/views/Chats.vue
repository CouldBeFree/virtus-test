<template>
	<h1>Chats</h1>
</template>

<script>
import { axios } from "../utils/axios";

export default {
	name: "Chats",
  mounted() {
		axios.get('/chat')
      .then(res => {
				console.log(res)
      })
      .catch(e => {
				console.error(e)
      })
	}
}
</script>

<style scoped>

</style>
