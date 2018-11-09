import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipeList: [
			{
				id: 1,
				name: 'Spicy Thai Basil Chicken',
				description: 'Ground chicken with basil',
				duration: 25,
				author: 'Jackie',
				owns: true,
				private: true,
				imgURL: 'http://i68.tinypic.com/o5q685.png',

				ingredients: [
					{
						name: 'Chicken Broth',
						quantity: '1/3', //string
						unit: 'cup'
					},
					{
						name: 'Oyster Sauce',
						quantity: 1,
						unit: 'tablespoon'
					},
					{
						name: 'Soy Sauce',
						quantity: 1,
						unit: 'tablespoon'
					},
					{
						name: 'Fish Sauce',
						quantity: 2,
						unit: 'tablespoon'
					},
					{
						name: 'White Sugar',
						quantity: 1,
						unit: 'teaspoon'
					},
					{
						name: 'Brown Sugar',
						quantity: 1,
						unit: 'teaspoon'
					},
					{
						name: 'Vegetable Oil',
						quantity: 2,
						unit: 'tablespoon'
					},
					{
						name: 'Boneless Chicken Thighs',
						quantity: 1,
						unit: 'pound'
					},
					{
						name: 'Shallots',
						quantity: '1/4',
						unit: 'cup'
					},
					{
						name: 'Garlic',
						quantity: 4,
						unit: 'cloves'
					},
					{
						name: 'Thai Chillies',
						quantity: 2,
						unit: 'tablespoon'
					},
					{
						name: 'Basil Leaves',
						quantity: 1,
						unit: 'cup'
					}, // comma needed here or NO

				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: 'Make the Sauce',
						gifURL: 'https://media.giphy.com/media/64aHH8NS43uqnJT9q0/giphy.gif',
						details: 'Add chicken broth, oyster sauce, fish sauce, white sugar, and brown sugar together in bowl. Whisk together until well blended',
						timer: true,
						duration: 0.5
					},
					{ // step 2
						n: 2,
						title: 'Prepare Basil',
						gifURL: 'https://media.giphy.com/media/2wXXmfG8w5Dpzcf6Fz/giphy.gif',
						details: 'Thinly slice basil leaves',
						timer: false,
						duration: 0
					},
					{ // step 3
						n: 3,
						title: 'Cut Shallots',
						gifURL: 'https://media.giphy.com/media/LpkyFm03sUdiEAxZAy/giphy.gif',
						details: 'Peel and thinly cut shallots',
						timer: false,
						duration: 0
					},
					{ // step 4
						n: 4,
						title: 'Mince Garlic',
						gifURL: 'https://media.giphy.com/media/9P3DEEByoWpOnuDfIv/giphy.gif',
						details: 'Peel, slice, and mince garlic',
						timer: false,
						duration: 0
					},
					{ // step 5
						n: 5,
						title: 'Cut Peppers',
						gifURL: 'https://media.giphy.com/media/82wZfAVtQnVgXNzgZa/giphy.gif',
						details: 'Thinly cut peppers.',
						timer: false,
						duration: 0
					},
					{ // step 6
						n: 6,
						title: 'Chop Chicken',
						gifURL: 'https://media.giphy.com/media/XJLZlF6t9cHZXH7i98/giphy.gif',
						details: 'Coarsely chop chicken until it meets a grounded texture.',
						timer: true,
						duration: 240
					},
					{ // step 7
						n: 7,
						title: 'Stirfry Chicken',
						gifURL: 'https://media.giphy.com/media/3gJQeAEXs9yoslqNqp/giphy.gif',
						details: 'Add oil to pan. Add grounded chicken to pan and stirfry.',
						timer: true,
						duration: 120
					},
					{ // step 8
						n: 8,
						title: 'Add chopped ingredients',
						gifURL: 'https://media.giphy.com/media/9RZXjV2h5LdPaNtsti/giphy.gif',
						details: 'Stir in shallots, garlic, and sliced chillies.',
						timer: true,
						duration: 120
					},
					{ // step 9
						n: 9,
						title: 'Add a bit of sauce',
						gifURL: 'https://media.giphy.com/media/QmIEXxHmxa8mRZzvuw/giphy.gif',
						details: 'Add only a splash of the sauce mixture. Keep stirring until the sauce is absorbed in the chicken.',
						timer: true,
						duration: 120
					},
					{ // step 10
						n: 10,
						title: 'Add the rest of sauce',
						gifURL: 'https://media.giphy.com/media/2tPowUFfm7AIVFRcSU/giphy.gif',
						details: 'Add the rest of the sauce mixture. Keep stirring until the sauce is absorbed in the chicken.',
						timer: true,
						duration: 180
					},
					{ // step 11
						n: 11,
						title: 'Add Basil',
						gifURL: 'https://media.giphy.com/media/5tvKUuaMkJz8pifThh/giphy.gif',
						details: 'Add the basil and stir into the chicken.',
						timer: true,
						duration: 120
					},
					{ // step 12
						n: 12,
						title: 'Finished!',
						gifURL: 'http://i68.tinypic.com/o5q685.png',
						details: 'Enjoy your Spicy Thai Basil Chicken with rice!',
						timer: false,
						duration: 0
					}

				] // end steps
			}, // end recipe 1: spicy thai basil chicken

			{ // start recipe 2: spaghetti & meatballs
				id: 2,
				name: 'Spaghetti & Meatballs',
				description: 'Fastest made meatballs',
				duration: 60,
				author: 'Steve',
				owns: true,
				private: false,
				imgURL: 'http://i63.tinypic.com/dwop4p.jpg',

				ingredients: [
					{
						name: 'Tomato Sauce',
						quantity: 6,
						unit: 'cup'
					},
					{
						name: 'Dry Bread Crumbs',
						quantity: '1/2',
						unit: 'cup'
					},
					{
						name: 'Milk',
						quantity: '1/4',
						unit: 'cup'
					},
					{
						name: 'Egg',
						quantity: 1,
						unit: 'large'
					},
					{
						name: 'Italian Herb Seasoning',
						quantity: 2,
						unit: 'teaspoon'
					},
					{
						name: 'Garlic Powder',
						quantity: '1/2',
						unit: 'teaspoon'
					},
					{
						name: 'Red Pepper Flakes',
						quantity: '1/4',
						unit: 'teaspoon'
					},
					{
						name: 'Ground Beef',
						quantity: 1,
						unit: 'pound'
					},
					{
						name: 'Ground Veal',
						quantity: 1,
						unit: 'pound'
					},
					{
						name: 'Salt',
						quantity: '1 1/2',
						unit: 'teaspoon'
					},
					{
						name: 'Black Pepper',
						quantity: '1/2',
						unit: 'teaspoon'
					},
					{
						name: 'Parmigiano-Reggiano',
						quantity: '1/3',
						unit: 'cup'
					}
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: 'Boil Tomato Sauce',
						gifURL: 'https://media.giphy.com/media/1inOgeWV3EcUbfy06h/giphy.gif',
						details: 'Using a tomato sauce of your choice, stir and bring it to a simmer on medium heat. Then reduce heat to low to keep sauce warm.',
						timer: true,
						duration: 180
					},
					{ // step 2
						n: 2,
						title: 'Pre-Heat Oven',
						gifURL: 'https://media.giphy.com/media/LXQKgwV69cmvIvSNCa/giphy.gif',
						details: 'Pre-heat oven to 500 F and keep on while preparing meatballs',
						timer: false,
						duration: 0
					},
					{ // step 3
						n: 3,
						title: 'Make Slurry',
						gifURL: 'https://media.giphy.com/media/YjuF7BNn8liWKivFXs/giphy.gif',
						details: 'Add breadcrumbs, milk, egg, Italian seasoning, olive oil, garlic powder, and red flakes together into a bowl. Whisk together until you have a thick, slurry consistency',
						timer: true,
						duration: 60
					},
					{ // step 4
						n: 4,
						title: 'Mix Meat',
						gifURL: 'https://media.giphy.com/media/3d87Q5fPxDUSyreVgL/giphy.gif',
						details: 'Combine beef and veal in a large bowl. Add salt, black pepper, white pepper, Parmigiano-Reggiano, and slurry made in previous step. Mix until combined',
						timer: true,
						duration: 180
					},
					{ // step 5
						n: 5,
						title: 'Prepare baking sheet',
						gifURL: 'https://media.giphy.com/media/kPmlOPx0BzX7kfyxOQ/giphy.gif',
						details: 'Line baking sheet with aluminum foil. Brush it lightly with oil.',
						timer: false,
						duration: 0
					},
					{ // step 5
						n: 5,
						title: 'Scoop Meatballs',
						gifURL: 'https://media.giphy.com/media/tJdwJbehOyPPEqQcQZ/giphy.gif',
						details: 'Using a sorbet scoop, scoop meat mixture and place on baking sheet. Finish out the rest of the mixture.' ,
						timer: false,
						duration: 0
					},
					{ // step 5
						n: 5,
						title: 'Broil Meatballs',
						gifURL: 'https://media.giphy.com/media/cRLPrORIDoY1NcTQKh/giphy.gif',
						details: 'Place meatballs into the oven and broil until brown.',
						timer: true,
						duration: 300
					},
					{ // step 6
						n: 6,
						title: 'Transfer Meatballs',
						gifURL: 'https://media.giphy.com/media/9GJcz3aUXyDWv0eN1I/giphy.gif',
						details: 'Transfer meatballs into the tomato sauce. Turn up heat back to simmer to further cook the meatballs into the tomato sauce.',
						timer: true,
						duration: 180
					},
					{ // step 7
						n: 7,
						title: 'Finished!',
						gifURL: 'http://i63.tinypic.com/dwop4p.jpg',
						details: 'Enjoy your meatballs on its own or with some cooked spaghetti!',
						timer: false,
						duration: 0
					}

				] // end steps
			}, // end recipe 2: spaghetti & meatballs

			{ // start recipe 3: guacamole
				id: 3,
				name: 'Guacamole',
				description: 'Authentic guacamole',
				duration: 20,
				author: 'Bill',
				owns: true,
				private: false,
				imgURL: 'http://i68.tinypic.com/adzu6e.png',

				ingredients: [
					{
						name: 'Avocado',
						quantity: 4,
						unit: 'large'
					},
					{
						name: 'Onion',
						quantity: '1/2',
						unit: 'large'
					},
					{
						name: 'Serrano Pepper',
						quantity: 2,
						unit: 'tablespoon'
					},
					{
						name: 'Cilantro',
						quantity: '1/2',
						unit: 'cup'
					},
					{
						name: 'Kosher salt',
						quantity: '1/2',
						unit: 'teaspoon'
					},
					{
						name: 'Lime',
						quantity: 1,
						unit: 'medium',
					}
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: 'Cut Peppers',
						gifURL: 'https://media.giphy.com/media/82wZfAVtQnVgXNzgZa/giphy.gif',
						details: 'Thinly cut up Serrano peppers.',
						timer: false,
						duration: 0
					},
					{ // step 2
						n: 2,
						title: 'Cut Cilantro',
						gifURL: 'https://media.giphy.com/media/9xrbFyFTwl3XfJZQwb/giphy.gif',
						details: 'Chop cilantro to desired thickness',
						timer: false,
						duration: 0
					},
					{ // step 3
						n: 3,
						title: 'Chop Onions',
						gifURL: 'https://media.giphy.com/media/1itBKqHdcuc0LihqzH/giphy.gif',
						details: 'Chop the onion using technique showng',
						timer: false,
						duration: 0
					},
					{ // step 4
						n: 4,
						title: 'Quick chop',
						gifURL: 'https://media.giphy.com/media/5n4corltzrkahqtP9u/giphy.gif',
						details: 'Add onions, cilantro, and serrano peppers together and give it a slight chop.',
						timer: true,
						duration: 30
					},
					{ // step 5
						n: 5,
						title: 'Grinding Technique',
						gifURL: 'https://media.giphy.com/media/69C1Ee1LEWGvBddcxt/giphy.gif',
						details: 'Add in kosher salt and use grinding technique to create a thinner, paste-like consistency.',
						timer: true,
						duration: 120
					},
					{ // step 6
						n: 6,
						title: 'Prepare Avocados',
						gifURL: 'https://media.giphy.com/media/fH0bH5jZVmNBsiDPR2/giphy.gif',
						details: 'Cut and remove pit of avocados.',
						timer: false,
						duration: 0
					},
					{ // step 7
						n: 7,
						title: 'Mash Guacamole',
						gifURL: 'https://media.giphy.com/media/vcdiV9CpApFB8JX0GS/giphy.gif',
						details: 'Add in cilantro and onion paste. Add extra cilantro and lime for taste. Mash everything to desired consistency.',
						timer: false,
						duration: 0
					},
					{ // step 8
						n: 8,
						title: 'Finished!',
						gifURL: 'http://i68.tinypic.com/adzu6e.png',
						details: 'Enjoy your delicious guacamole with some chips!',
						timer: false,
						duration: 0
					}
				] // end steps
			} // end recipe 3: guacamole


		], // END recipes list
		searchQuery: '',
		saved: [1,3,4,5,8,12],
		idCounter: 100
	},
	getters: {
		filteredRecipes: state => {
			return _.filter(state.recipeList, (recipe) => {
				return _.includes(_.lowerCase(recipe.name), _.lowerCase(state.searchQuery))
			})
		},
		dummyRecipes: state => {
			let list = _.filter(state.recipeList, (recipe) => {
				return _.includes(_.lowerCase(recipe.name), _.lowerCase(state.searchQuery))
			})
			_.forEach([1,2,3,4], () => {
				list = _.concat(list, list)
			})
			return list
		},
		savedRecipes: state => {
			return _.filter(state.recipeList, (recipe) => {
				return _.indexOf(state.saved, recipe.id) !== -1
			})
		},
		getRecipeById: (state) => (id) => {
			return _.find(state.recipeList, {'id': id})
		},
		savedList: (state) => {
			return state.saved
		},
		myPublishedRecipeList:(state) => {
			return _.filter(state.recipeList, (recipe) => {
				return recipe.owns && !recipe.private
			})
		},
		myPrivateRecipeList:(state) => {
			return _.filter(state.recipeList, (recipe) => {
				return recipe.owns && recipe.private
			})
		}
	},
	mutations: {
		EXECUTE_SEARCH: (state, query) => {
			state.searchQuery = query
		},
		SAVE_RECIPE: (state, id) => {
			state.saved.push(id)
		},
		UNSAVE_RECIPE: (state, id) => {
			state.saved.splice(state.saved.indexOf(id), 1)
		},
		ADD_RECIPE: (state, payload) => {
			payload.id = state.idCounter
			state.idCounter += 1
			state.recipeList.unshift(payload)
		},
	},
	actions: {
		executeSearch: (context, query) => {
			context.commit("EXECUTE_SEARCH", query)
		},
		toggleSaved: (context, id) => {
			let idx = context.state.saved.indexOf(id)
			if (idx === -1) {
				context.commit("SAVE_RECIPE", id)
			} else {
				context.commit("UNSAVE_RECIPE", id)
			}
		},
		saveRecipe: (context, payload) => {
			context.commit('ADD_RECIPE', payload)
		}
	}
})

