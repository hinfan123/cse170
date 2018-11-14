<template>
	<div>
		<div class="content p-xl">
			<div class="logo-container text-bold">
				EZ<i class="fas fa-utensils m-l-sm"></i>
			</div>

			<h2>{{ isSignup? "SIGN-UP" : "LOG-IN" }}</h2>
			<input v-if="!isSignup" placeholder="username or email" v-model="enteredUsername" @keyup.enter="onLogin()">
			<input v-if="!isSignup" placeholder="password" type="password" v-model="enteredPassword" @keyup.enter="onLogin()">
			<input v-if="isSignup" placeholder="Username">
			<input v-if="isSignup" placeholder="Email">
			<input v-if="isSignup" placeholder="First name">
			<input v-if="isSignup" placeholder="Last name">
			<input v-if="isSignup" placeholder="password" type="password">
			<input v-if="isSignup" placeholder="Re-enter password" type="password">
			<button v-if="!isSignUp" @click="onLogin()">
				login
			</button>
			<button v-if="!isSignup" @click="isSignup = true">signup</button>
			<button v-if="isSignup" @click="toast">submit</button>
		</div>

		<b-modal :active.sync="modalActive"
						 :width="250"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h2 class="color-default m-b-sm text-semibold">
						Your Username or Password is Incorrect...
					</h2>
					<div class="is-flex justify-between">
						<button class="button primary" @click="modalActive = false">
							dismiss
						</button>
					</div>
				</div>
			</div>
		</b-modal>
	</div>

</template>

<script>
import _ from 'lodash'

export default {
	name: 'login',
	data: function () {
		return {
			isSignup: false,
			modalActive: false,
			freeLogin: true,
			enteredUsername: undefined,
			enteredPassword: undefined
		}
	},
	computed: {
		correctLogin: function () {
			return _.toLower(this.enteredUsername) === 'testuser' && this.enteredPassword === '69'
		}
	},
	methods: {
		toast: function () {
      this.$toast.open('Your account is set up. You can login now!')
      this.isSignup = false
    },
    onLogin: function () {
    	if (this.correctLogin || this.freeLogin) {
    		this.$router.push('home')
    	} else {
    		this.modalActive = true
    	}
    }
	}
}
</script>