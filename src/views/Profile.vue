<template>
	<div id="profile" class="content">
		<h3>General Information</h3>
		<input placeholder="username">
		<input placeholder="Email">
		<input placeholder="First name">
		<input placeholder="Last name">
		<br>
		<button @click="toast">save info</button>
		<br>

		<h3>Change Password</h3>
		<input placeholder="old password" type="password">
		<input placeholder="new password" type="password">
		<input placeholder="re-enter new password" type="password">
		<br>
		<button @click="toastPassword">change password</button>

		<br><br>
		<router-link to="/" tag="button">
			logout
		</router-link>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'profile',
	methods: {
		toast: function () {
			this.$toast.open('Your information is saved')
		},
		toastPassword: function () {
			this.$toast.open('Your password has been changed')
		}
	}
}
</script>