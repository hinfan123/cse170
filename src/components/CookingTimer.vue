<template>
	<div>
		<h1>{{ display }}</h1>
		<button v-if="!isCounting" @click="startTimer(duration)">START TIMER</button>
		<button v-if="isCounting" @click="reset()">RESET TIMER</button>
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
			isCounting: false
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
			this.isCounting = true
			this.startTime = Date.now() - 750
			setInterval(this.update, 250)
		},
		update: function () {
			if (this.isCounting) {
				this.timeLeft = this.duration - (((Date.now() - this.startTime) / 1000) | 0)
				if (this.timeLeft <= 0) {
					this.reset()
					this.$emit('timer-done')
				}
			}
		},
		reset: function () {
			this.startTime = Date.now()
			this.update()
			this.isCounting = false
		}
	},
	created: function () {
		this.timeLeft = this.duration - (((Date.now() - this.startTime) / 1000) | 0)
	}
}
</script>