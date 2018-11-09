<template>
	<div id="profile" class="content">
		<h3>Genral Information</h3>
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
		<!-- <div class="field">
			<label class="label">Username</label>
			<div class="control">
				<input class="input" type="text" placeholder="Ex. avocado devourer">
			</div>
		</div>
		<div class="field">
			<label class="label">First Name</label>
			<div class="control">
				<input class="input" type="text" placeholder="Enter your first name...">
			</div>
		</div>
		<div class="field">
			<label class="label">Last Name</label>
			<div class="control">
				<input class="input" type="text" placeholder="Enter your first name...">
			</div>
		</div> -->
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