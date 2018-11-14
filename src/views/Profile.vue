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

		<button @click="modalActive = true">
			logout
		</button>

		<b-modal :active.sync="modalActive"
						 :width="250"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h5 class="color-default m-b-sm">
						Are you sure you want to logout?
					</h5>
					<div class="is-flex justify-between">
						<button class="button primary" @click="modalActive = false">stay</button>
						<router-link to="/" tag="button" class="button pink">
							logout
						</router-link>
					</div>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<style lang="scss">
</style>

<script>
export default {
	name: 'profile',
	data: function () {
		return {
			modalActive: false
		}
	},
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