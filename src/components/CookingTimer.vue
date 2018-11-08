<template>
	<div class="is-flex">
		<h1 class="m-r-md">{{ display }}</h1>
		<button v-if="!timerActive" @click="startTimer(duration)">START TIMER</button>
		<button v-if="timerActive" @click="resetTimer()">RESET TIMER</button>
	</div>

</template>

<style lang="scss">
</style>

<script>
import _ from 'lodash'

export default {
	name: 'cooking-timer',
	data: function () {
		return {
			timeLeft: this.duration,
			startTime: undefined,
			timerActive: false
		}
	},
	props: {
		duration: 0
	},
	computed: {
		display: function () {
			let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
			let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
			return m + ':' + s
		},
		minutes: function () {
			return (this.timeLeft / 60) | 0
		},
		seconds: function () {
			return (this.timeLeft % 60) | 0
		}
	},
	methods: {
		startTimer: function () {
			this.$emit('has-started')
			this.$emit('update:timerActive', true)
			this.timerActive = true
			this.startTime = Date.now() - 500
			setInterval(this.update, 250)
		},
		update: function () {
			if (this.timerActive) {
				this.timeLeft = this.duration - (((Date.now() - this.startTime) / 1000) | 0)
				if (this.timeLeft <= 0) {
					this.resetTimer()
					this.$emit('timer-done')
				}
			}
		},
		resetTimer: function () {
			this.startTime = Date.now()
			this.update()
			this.timerActive = false
			this.$emit('update:timerActive', false)
		}
	},
	created: function () {
		this.timeLeft = this.duration
	}
}
</script>