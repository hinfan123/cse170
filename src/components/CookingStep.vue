<template>
	<div class="content">
		<h2 class="m-b-sm">{{ step.title }}</h2>
		<div class="img-container">
			<div class="img">

			</div>
		</div>
		<div class="instruction-detail-container">
			{{ step.details }}
		</div>

		<div v-if="step.timer" class="timer-container">
			<cooking-timer :duration="10"
										 :timerActive.sync="timerActive"
										 @timer-done="onTimerDone()"
										 @has-started="hasStarted = true">
			</cooking-timer>
		</div>

		<br>
		<div class="step-nav-container">
			<button @click="$emit('prev-step')"
							:disabled="timerActive">
				back
			</button>
			<button v-if="step.n < lastStep"
							@click="onNext()"
							:disabled="timerActive">
				next
			</button>
			<button v-if="step.n >= lastStep"
							@click="onFinish()"
							:disabled="timerActive">
				finish
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.img-container {
	width: 450px;
}
</style>

<script>
import _ from 'lodash'
import CookingTimer from '@/components/CookingTimer.vue'

export default {
	name: 'cooking-step',
	components: {
		CookingTimer
	},
	data: function () {
		return {
			timerModalActive: false,
			timerActive: false,
			hasStarted: false
		}
	},
	props: {
		step: { },
		lastStep: 0
	},
	computed: {
		timerOK: function () {
			return !this.step.timer || this.hasStarted
		}
	},
	methods: {
		onTimerDone: function () {
			if (this.step.n >= this.lastStep) {
				this.$emit('finish')
			} else {
				this.$emit('timer-done')
			}
		},
		onNext: function () {
			if (this.timerOK) {
				this.$emit('next-step')
			} else {
				this.$emit('ignore-timer')
			}
		},
		onFinish: function () {
			if (this.timerOK) {
				this.$emit('finish')
			} else {
				this.$emit('ignore-timer')
			}
		},

	},
	created: function () {
	},
	watch: {
		timerActive: function () {
			this.$emit('update:timerActive', this.timerActive)
		}
	}
}
</script>