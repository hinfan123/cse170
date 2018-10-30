<template>
  <div class="home">
	<div class="grid-container">
		<div class="grid">
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
			<div class="recipe-box"></div>
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
