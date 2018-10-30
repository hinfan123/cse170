<template>
	<div class="content">
		<div>
			<input placeholder="What's this dish called?">
		</div>
		<div class="img-container">
			<div class="img"></div>
		</div>
		<h3>Ingredients</h3>
		<div class="ingredient-container">
			<input placeholder="Enter an ingredient...">
			<input placeholder="Enter an ingredient...">
			<input placeholder="Enter an ingredient...">
			<input placeholder="Enter an ingredient...">
			<input placeholder="Enter an ingredient...">
		</div>
		<button>save as private recipe</button>
		<button>publish recipe</button>
	</div>
</template>

<script>
export default {
  name: 'create'
}
</script>