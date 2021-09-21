<template>
	<div class="chat">
		<ChatList
      @selected="getSpecifiedData"
      :list="data"
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
      data: null
		}
	},
	mounted() {
		axios.get('/chat')
			.then((res) => {
				this.data = res
			})
			.catch(e => {
				console.error(e)
			})
	},
  methods: {
		getSpecifiedData (query) {
			axios.get('/chat', {
				params: {
					id: query
        }
      })
      .then(res => {
				this.conv =  res[0].conversation;
				this.companion = res[0].target;
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
