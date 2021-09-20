<template>
	<div class="chat-list">
		<ul>
			<li :key="item.id" v-for="item in list">
				<div class="chat-list__top">
					<img :src="item.photo" alt="">
					<h3 class="h3">
						{{ item.name }}
					</h3>
				</div>
				<p>{{ item.message }}</p>
			</li>
		</ul>
		<button>+ New conversation</button>
	</div>
</template>

<script>
export default {
	name: "chatList",
	props: ['list']
}
</script>

<style scoped>
	.chat-list {
		width: 29.7%;
	}
	.chat-list ul {
		list-style-type: none;
		padding: 0;
	}
	.chat-list li {
		padding: 40px 40px 40px 60px;
		border-bottom: 1px solid #9ca1b2;
	}
	.chat-list .h3 {
		font-size: 22px;
		font-weight: 700;
		padding-left: 11px;
	}
	.chat-list__top {
		display: flex;
		align-items: center;
	}
	.chat-list__top img {
		width: 42px;
		height: 42px;
	}
	.chat-list p {
		margin-bottom: 0;
		color: #9ca1b2;
		font-size: 14px;
	}
	.chat-list ul {
		margin-bottom: 30px;
	}
	.chat-list button {
		display: block;
		padding: 15px;
		width: 100%;
		box-sizing: border-box;
		border-radius: 5px;
		background-color: #2196f3;
		transition: opacity .3s ease;
	}
	.chat-list button:hover {
		opacity: 98%;
	}

</style>