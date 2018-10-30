<template>
  <div class="home">
		<div class="grid-container">
			<div class="grid">
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
				<router-link to="cook" tag="div" class="recipe-box"></router-link>
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
