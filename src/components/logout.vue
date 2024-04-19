<!--logout.vue-->
<template>
	<h1>
		Log Out
	</h1>
</template>

<script>
export default {
	data() {
		return {
			message: ''
		}
	},
	mounted(){
		this.logout()
	},
	methods: {
		logout(){
			this.message = 'You have been logged out, redirecting to the home page...'
			setTimeout(() => {
				this.$router.push('/')
			}, 5000)
		}
	}

}

</script>

<style>
	@import url('../assets/login_signup.css'); 
	h1 {
		text-align: center;
	}
</style>
