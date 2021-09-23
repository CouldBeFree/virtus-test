<template>
	<div class="chat">
		<ChatList
				@selected="getSpecifiedData"
				:list="data"
				:conv="conv"
				v-model="selectedId"
		/>
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
			companion: null,
			data: null,
			selectedId: null
		}
	},
	mounted() {
		this.showChat();
	},
	methods: {
		getSpecifiedData (id) {
			axios.get('/chat', {
				params: {
					id
				}
			})
					.then(res => {
						this.conv =  res[0].conversation;
						this.companion = res[0].target;
					})
		},
		showChat() {
			axios.get('/chat')
					.then((res) => {
						this.data = res
					})
					.catch(e => {
						console.error(e)
					})
		}
	}
}
</script>

<style scoped>
.chat  {
	display: flex;
}
</style>
