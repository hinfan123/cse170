<template>
	<div id="profile" class="content">

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label"></label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<h2 class="color-default text-semibold">General Information</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					Username
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="text" class="input" placeholder="Ex. avocadodevourer">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					E-mail
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="text" class="input" placeholder="Ex. avocadoman@gmail.com">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					First Name
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="text" class="input" placeholder="Ex. John">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					Last Name
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="text" class="input" placeholder="Ex. Smith">
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label"></label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button class="button muted md" @click="toast">
							Save Info
						</button>
					</div>
				</div>
			</div>
		</div>

		<br>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label"></label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<h2 class="color-default text-semibold">Change Password</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					Old Password
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="password" class="input" placeholder="Hopefully you remember it">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					New Password
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="password" class="input" placeholder="Please make it secure">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">
					Confirm New Password
				</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input type="password" class="input" placeholder="Confirm your password">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label"></label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button class="button muted md" @click="toastPassword">
							Change Password
						</button>
					</div>
				</div>
			</div>
		</div>

		<br>

		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label"></label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button class="button pink md" @click="modalActive = true">
							<i class="fas fa-sign-out-alt m-r-sm"></i>
							LOGOUT
						</button>
					</div>
				</div>
			</div>
		</div>



		<b-modal :active.sync="modalActive"
						 :width="275"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content is-large">
					<h4 class="color-default text-semibold m-b-sm">
						Are you sure?
					</h4>
					<div class="is-flex justify-between m-t-md">
						<button class="button muted sm" @click="modalActive = false">
							Stay
						</button>
						<router-link to="/" tag="button" class="button pink filled sm">
							Logout
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