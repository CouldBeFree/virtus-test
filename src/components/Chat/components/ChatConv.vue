<template>
	<div class="chat-conv">
		<ul>
			<li class="chat-item" :key="item.id" v-for="item in conv">
				<img :src="item.photo" alt="">
				<div class="chat-item__text">
					<p>{{ item.message }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "chatConv",
	props: ['conv']
}
</script>

<style scoped>
	.chat-conv {
		width: 53.6%;
		box-sizing: border-box;
		padding: 0 25px;
	}
	.chat-conv ul {
		list-style-type: none;
		padding: 0;
	}
	.chat-item {
		display: flex;
		align-items: center;
		margin-bottom: 50px;
	}
	.chat-item:nth-child(even) {
		flex-direction: row-reverse;
	}
	.chat-item img {
		width: 32px;
		height: 32px;
	}
	.chat-item__text {
		margin: 0 20px;
		padding: 20px;
		background-color: #404359;
		max-width: 465px;
		border-radius: 10px 10px 10px 0;
	}
	.chat-item:nth-child(even) .chat-item__text {
		border-radius: 10px 10px 0 10px;
		background-color: #2196f3;
	}
	.chat-item__text p {
		margin-bottom: 0;
	}

</style>