<template>
	<div class="content p-xxl">

		<div class="is-flex flex-column align-center">

			<div class="logo-container lg text-bold m-t-xxl m-b-md">
				EZ<i class="fas fa-utensils m-l-sm"></i>
			</div>
			<h4 v-if="!isSignup" class="color-muted m-b-lg">
				EZ-Chef - Anyone can cook!
			</h4>
			<h3 v-if="isSignup" class="color-default m-y-md">
				SIGN-UP
			</h3>

			<div v-if="!isSignup"class="is-flex flex-column">
				<div class="field m-b-md">
					<div class="control">
						<input type="text"
									 class="input"
									 placeholder="Username or E-mail"
									 v-model="enteredUsername"
									 @keyup.enter="onLogin()">
					</div>
				</div>
				<div class="field m-b-md">
					<div class="control">
						<input type="password"
									 class="input"
									 placeholder="Password"
									 v-model="enteredPassword"
									 @keyup.enter="onLogin()">
					</div>
				</div>
			</div>

			<div v-if="isSignup"class="is-flex flex-column">
				<div class="field m-b-md">
					<div class="control">
						<input type="text"
									 class="input"
									 placeholder="Username">
					</div>
				</div>
				<div class="field m-b-md">
					<div class="control">
						<input type="text"
									 class="input"
									 placeholder="E-mail">
					</div>
				</div>
				<div class="field m-b-md">
					<div class="control">
						<input type="password"
									 class="input"
									 placeholder="Password">
					</div>
				</div>
				<div class="field m-b-md">
					<div class="control">
						<input type="password"
									 class="input"
									 placeholder="Re-enter Password">
					</div>
				</div>
			</div>

			<button v-if="!isSignup" class="button primary m-b-md" @click="onLogin()">
				Login
			</button>
			<button v-if="!isSignup" class="button muted m-b-md" @click="isSignup = true">
				Sign up
			</button>
			<button v-if="isSignup" class="button primary m-b-md" @click="toast">
				Sign up!
			</button>
			<button v-if="isSignup" class="button muted m-b-md" @click="isSignup = false">
				Back to Login
			</button>

		</div>

		<b-modal :active.sync="modalActive"
						 :width="250"
						 :canCancel="['escape', 'outside']">
			<div class="card">
				<div class="card-content">
					<h4 class="color-default text-semibold">
						Incorrect Username or Password...
					</h4>
					<div class="is-flex justify-between">
						<button class="button primary" @click="modalActive = false">
							Try Again
						</button>
					</div>
				</div>
			</div>
		</b-modal>
	</div>

</template>

<style scoped lang="scss">
input, button {
	width: 250px;
}
</style>

<script>
import _ from 'lodash'

export default {
	name: 'login',
	data: function () {
		return {
			isSignup: false,
			modalActive: false,
			freeLogin: false,
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