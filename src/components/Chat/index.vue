<template>
	<div class="chat">
		<ChatList :list="list" />
		<ChatConv :conv="conv" />
		<ChatCompanion :companion="companion" />
	</div>
</template>

<script>
import ChatList from "./components/ChatList";
import ChatConv from "./components/ChatConv";
import ChatCompanion from "./components/ChatCompanion";

import { axios } from "../../utils/axios";

export default {
	name: "Chat",
	components: {
		ChatList,
		ChatConv,
		ChatCompanion
	},
	data() {
		return {
			list: null,
			conv: null,
			companion: null
		}
	},
	mounted() {
		axios.get('/chat')
			.then((res) => {
				this.list = res[0].conversation;
				this.conv =  res[0].conversation;
				this.companion = res[0].target;
				/*console.log(this.list);*/
			})
			/*.then(res => {
				console.log(res)
			})*/
			.catch(e => {
				console.error(e)
			})
	}
}
</script>

<style scoped>
	.chat  {
		display: flex;
	}
</style>