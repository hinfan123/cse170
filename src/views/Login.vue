<template>
	<div class="content p-xl">
		<div class="logo-container text-bold">
			EZ<i class="fas fa-utensils m-l-sm"></i>
		</div>

		<h2>{{ isSignup? "SIGN-UP" : "LOG-IN" }}</h2>
		<input v-if="!isSignup" placeholder="username or email">
		<input v-if="isSignup" placeholder="Username">
		<input v-if="isSignup" placeholder="Email">
		<input v-if="isSignup" placeholder="First name">
		<input v-if="isSignup" placeholder="Last name">
		<input placeholder="password" type="password">
		<input v-if="isSignup" placeholder="Re-enter password" type="password">
		<router-link v-if="!isSignup" to="/home" tag="button">
			login
		</router-link>
		<button v-if="!isSignup" @click="isSignup = true">signup</button>
		<button v-if="isSignup" @click="toast">submit</button>
	</div>
</template>

<script>
export default {
	name: 'login',
	data: function () {
		return {
			isSignup: false
		}
	},
	methods: {
		toast: function () {
      this.$toast.open('Your account is set up. You can login now!')
      this.isSignup = false
    }
	}
}
</script>