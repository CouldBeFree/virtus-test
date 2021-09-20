<template>
	<div class="chat-companion">
		<img :src="companion.photo"/>
		<h3 class="h3">
			{{ companion.name }}
		</h3>
		<h5 class="h5">
			{{ companion.role }}
		</h5>
		<p>
			{{ companion.description }}
		</p>
		<p>
			Email
		</p>
		<h4 class="h4">
			{{ companion.email }}
		</h4>
		<p>
			Phone
		</p>
		<h4 class="h4">
			{{ companion.phone }}
		</h4>
		<p>
			Adress
		</p>
		<h4 class="h4">
			{{ companion.Adress }}
		</h4>
		<p>
			Organization
		</p>
		<h4 class="h4">
			{{ companion.Organization }}
		</h4>
	</div>
</template>

<script>
export default {
	name: "chatCompanion",
	props: ['companion']
}
</script>

<style scoped>
	.chat-companion {
		width: 16.7%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.chat-companion img {
		width: 56px;
		height: 56px;
	}
	.chat-companion .h3 {
		font-size: 22px;
	}
	.chat-companion .h4 {
		font-size: 16px;
		font-weight: 700;
	}
	.chat-companion .h5 {
		font-size: 16px;
	}
	.chat-companion p {
		font-size: 14px;
	}
</style>