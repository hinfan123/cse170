import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipeList: [
			{
				id: 1,
				name: "Spicy Thai Basil Chicken",
				description: "Ground chicken with basil",
				duration: 25,
				author: "Jackie",
				owns: true,
				private: true,
				imgURL: "http://i68.tinypic.com/o5q685.png",
				recipeComments: [
					{
						commenter: "LindaLovesFood",
						text: "I made this for my kids yesterday, they loved it!!! Thanks Jackie!",
						picURL: undefined,
						replies: [
							{
								commenter: "Jackie",
								text: "Hey Linda, I'm glad your kids loved the food. I'll keep posting more recipes!",
								picURL: undefined
							},
							{
								commenter: "BoyfriendOfTheYear",
								text: "That's great! I'll cook this for my girlfriend tonight!",
								picURL: undefined
							}
						]
					},
					{
						commenter: "randomGuy",
						text: "Good stuff!",
						picURL: undefined,
						replies: []
					}
				],
				stepsComments: [
					{
						commenter: "iDontKnowHowToCook",
						text: "Hey everyone, I'm confused about step 7, can someone explain please?",
						picURL: "https://i.imgflip.com/iewbb.jpg",
						replies: [
							{
								commenter: "MrNiceGuy",
								text: "What part confused you? I am here to help",
								picURL: "https://verbalinsanity.files.wordpress.com/2011/08/old-man-with-thumbs-up.jpg?w=320&h=247"
							},
							{
								commenter: "iDontKnowHowToCook",
								text: "Whats an a fry pan? I have never heard of such a thing :(",
								picURL: "https://i.imgflip.com/iewbb.jpg"
							},
							{
								commenter: "MrNiceGuy",
								text: "...",
								picURL: "https://verbalinsanity.files.wordpress.com/2011/08/old-man-with-thumbs-up.jpg?w=320&h=247"
							}
						]
					}
				],

				ingredients: [
					{
						name: "Chicken Broth",
						quantity: "1/3", //string
						unit: "cup"
					},
					{
						name: "Oyster Sauce",
						quantity: 1,
						unit: "tablespoon"
					},
					{
						name: "Soy Sauce",
						quantity: 1,
						unit: "tablespoon"
					},
					{
						name: "Fish Sauce",
						quantity: 2,
						unit: "tablespoon"
					},
					{
						name: "White Sugar",
						quantity: 1,
						unit: "teaspoon"
					},
					{
						name: "Brown Sugar",
						quantity: 1,
						unit: "teaspoon"
					},
					{
						name: "Vegetable Oil",
						quantity: 2,
						unit: "tablespoon"
					},
					{
						name: "Boneless Chicken Thighs",
						quantity: 1,
						unit: "pound"
					},
					{
						name: "Shallots",
						quantity: "1/4",
						unit: "cup"
					},
					{
						name: "Garlic",
						quantity: 4,
						unit: "cloves"
					},
					{
						name: "Thai Chillies",
						quantity: 2,
						unit: "tablespoon"
					},
					{
						name: "Basil Leaves",
						quantity: 1,
						unit: "cup"
					}, // comma needed here or NO

				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Make the Sauce",
						gifURL: "https://media.giphy.com/media/64aHH8NS43uqnJT9q0/giphy.gif",
						details: "Add chicken broth, oyster sauce, fish sauce, white sugar, and brown sugar together in bowl. Whisk together until well blended",
						timer: true,
						duration: 10,

					},
					{ // step 2
						n: 2,
						title: "Prepare Basil",
						gifURL: "https://media.giphy.com/media/2wXXmfG8w5Dpzcf6Fz/giphy.gif",
						details: "Thinly slice basil leaves",
						timer: false,
						duration: 0,

					},
					{ // step 3
						n: 3,
						title: "Cut Shallots",
						gifURL: "https://media.giphy.com/media/LpkyFm03sUdiEAxZAy/giphy.gif",
						details: "Peel and thinly cut shallots",
						timer: false,
						duration: 0,

					},
					{ // step 4
						n: 4,
						title: "Mince Garlic",
						gifURL: "https://media.giphy.com/media/9P3DEEByoWpOnuDfIv/giphy.gif",
						details: "Peel, slice, and mince garlic",
						timer: false,
						duration: 0,

					},
					{ // step 5
						n: 5,
						title: "Cut Peppers",
						gifURL: "https://media.giphy.com/media/82wZfAVtQnVgXNzgZa/giphy.gif",
						details: "Thinly cut peppers.",
						timer: false,
						duration: 0,

					},
					{ // step 6
						n: 6,
						title: "Chop Chicken",
						gifURL: "https://media.giphy.com/media/XJLZlF6t9cHZXH7i98/giphy.gif",
						details: "Coarsely chop chicken until it meets a grounded texture.",
						timer: true,
						duration: 240,

					},
					{ // step 7
						n: 7,
						title: "Stirfry Chicken",
						gifURL: "https://media.giphy.com/media/3gJQeAEXs9yoslqNqp/giphy.gif",
						details: "Add oil to pan. Add grounded chicken to pan and stirfry.",
						timer: true,
						duration: 120,

					},
					{ // step 8
						n: 8,
						title: "Add chopped ingredients",
						gifURL: "https://media.giphy.com/media/9RZXjV2h5LdPaNtsti/giphy.gif",
						details: "Stir in shallots, garlic, and sliced chillies.",
						timer: true,
						duration: 120,

					},
					{ // step 9
						n: 9,
						title: "Add a bit of sauce",
						gifURL: "https://media.giphy.com/media/QmIEXxHmxa8mRZzvuw/giphy.gif",
						details: "Add only a splash of the sauce mixture. Keep stirring until the sauce is absorbed in the chicken.",
						timer: true,
						duration: 120,

					},
					{ // step 10
						n: 10,
						title: "Add the rest of sauce",
						gifURL: "https://media.giphy.com/media/2tPowUFfm7AIVFRcSU/giphy.gif",
						details: "Add the rest of the sauce mixture. Keep stirring until the sauce is absorbed in the chicken.",
						timer: true,
						duration: 180,

					},
					{ // step 11
						n: 11,
						title: "Add Basil",
						gifURL: "https://media.giphy.com/media/5tvKUuaMkJz8pifThh/giphy.gif",
						details: "Add the basil and stir into the chicken.",
						timer: true,
						duration: 120,

					},
					{ // step 12
						n: 12,
						title: "Finished!",
						gifURL: "http://i68.tinypic.com/o5q685.png",
						details: "Enjoy your Spicy Thai Basil Chicken with rice!",
						timer: false,
						duration: 0,

					}
				] // end steps
			}, // end recipe 1: spicy thai basil chicken
			{ // start recipe 2: spaghetti & meatballs
				id: 2,
				name: "Spaghetti & Meatballs",
				description: "Fastest made meatballs",
				duration: 60,
				author: "Steve",
				owns: true,
				private: false,
				imgURL: "http://i63.tinypic.com/dwop4p.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Tomato Sauce",
						quantity: 6,
						unit: "cup"
					},
					{
						name: "Dry Bread Crumbs",
						quantity: "1/2",
						unit: "cup"
					},
					{
						name: "Milk",
						quantity: "1/4",
						unit: "cup"
					},
					{
						name: "Egg",
						quantity: 1,
						unit: "large"
					},
					{
						name: "Italian Herb Seasoning",
						quantity: 2,
						unit: "teaspoon"
					},
					{
						name: "Garlic Powder",
						quantity: "1/2",
						unit: "teaspoon"
					},
					{
						name: "Red Pepper Flakes",
						quantity: "1/4",
						unit: "teaspoon"
					},
					{
						name: "Ground Beef",
						quantity: 1,
						unit: "pound"
					},
					{
						name: "Ground Veal",
						quantity: 1,
						unit: "pound"
					},
					{
						name: "Salt",
						quantity: "1 1/2",
						unit: "teaspoon"
					},
					{
						name: "Black Pepper",
						quantity: "1/2",
						unit: "teaspoon"
					},
					{
						name: "Parmigiano-Reggiano",
						quantity: "1/3",
						unit: "cup"
					}
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Boil Tomato Sauce",
						gifURL: "https://media.giphy.com/media/1inOgeWV3EcUbfy06h/giphy.gif",
						details: "Using a tomato sauce of your choice, stir and bring it to a simmer on medium heat. Then reduce heat to low to keep sauce warm.",
						timer: true,
						duration: 180,

					},
					{ // step 2
						n: 2,
						title: "Pre-Heat Oven",
						gifURL: "https://media.giphy.com/media/LXQKgwV69cmvIvSNCa/giphy.gif",
						details: "Pre-heat oven to 500 F and keep on while preparing meatballs",
						timer: false,
						duration: 0,

					},
					{ // step 3
						n: 3,
						title: "Make Slurry",
						gifURL: "https://media.giphy.com/media/YjuF7BNn8liWKivFXs/giphy.gif",
						details: "Add breadcrumbs, milk, egg, Italian seasoning, olive oil, garlic powder, and red flakes together into a bowl. Whisk together until you have a thick, slurry consistency",
						timer: true,
						duration: 60,

					},
					{ // step 4
						n: 4,
						title: "Mix Meat",
						gifURL: "https://media.giphy.com/media/3d87Q5fPxDUSyreVgL/giphy.gif",
						details: "Combine beef and veal in a large bowl. Add salt, black pepper, white pepper, Parmigiano-Reggiano, and slurry made in previous step. Mix until combined",
						timer: true,
						duration: 180,

					},
					{ // step 5
						n: 5,
						title: "Prepare baking sheet",
						gifURL: "https://media.giphy.com/media/kPmlOPx0BzX7kfyxOQ/giphy.gif",
						details: "Line baking sheet with aluminum foil. Brush it lightly with oil.",
						timer: false,
						duration: 0,

					},
					{ // step 5
						n: 6,
						title: "Scoop Meatballs",
						gifURL: "https://media.giphy.com/media/tJdwJbehOyPPEqQcQZ/giphy.gif",
						details: "Using a sorbet scoop, scoop meat mixture and place on baking sheet. Finish out the rest of the mixture." ,
						timer: false,
						duration: 0,

					},
					{ // step 5
						n: 7,
						title: "Broil Meatballs",
						gifURL: "https://media.giphy.com/media/cRLPrORIDoY1NcTQKh/giphy.gif",
						details: "Place meatballs into the oven and broil until brown.",
						timer: true,
						duration: 300,

					},
					{ // step 6
						n: 8,
						title: "Transfer Meatballs",
						gifURL: "https://media.giphy.com/media/9GJcz3aUXyDWv0eN1I/giphy.gif",
						details: "Transfer meatballs into the tomato sauce. Turn up heat back to simmer to further cook the meatballs into the tomato sauce.",
						timer: true,
						duration: 180,

					},
					{ // step 7
						n: 9,
						title: "Finished!",
						gifURL: "http://i63.tinypic.com/dwop4p.jpg",
						details: "Enjoy your meatballs on its own or with some cooked spaghetti!",
						timer: false,
						duration: 0,

					}

				] // end steps
			}, // end recipe 2: spaghetti & meatball
			{ // start recipe 3: guacamole
				id: 3,
				name: "Guacamole",
				description: "Authentic guacamole",
				duration: 20,
				author: "Bill",
				owns: true,
				private: false,
				imgURL: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Guacamole_EXPS_THJJ18_38391_D01_31_3b-5.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Avocado",
						quantity: 4,
						unit: "large"
					},
					{
						name: "Onion",
						quantity: "1/2",
						unit: "large"
					},
					{
						name: "Serrano Pepper",
						quantity: 2,
						unit: "tablespoon"
					},
					{
						name: "Cilantro",
						quantity: "1/2",
						unit: "cup"
					},
					{
						name: "Kosher salt",
						quantity: "1/2",
						unit: "teaspoon"
					},
					{
						name: "Lime",
						quantity: 1,
						unit: "medium",
					}
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Cut Peppers",
						gifURL: "https://media.giphy.com/media/82wZfAVtQnVgXNzgZa/giphy.gif",
						details: "Thinly cut up Serrano peppers.",
						timer: false,
						duration: 0,

					},
					{ // step 2
						n: 2,
						title: "Cut Cilantro",
						gifURL: "https://media.giphy.com/media/9xrbFyFTwl3XfJZQwb/giphy.gif",
						details: "Chop cilantro to desired thickness",
						timer: false,
						duration: 0,

					},
					{ // step 3
						n: 3,
						title: "Chop Onions",
						gifURL: "https://media.giphy.com/media/1itBKqHdcuc0LihqzH/giphy.gif",
						details: "Chop the onion using technique showng",
						timer: false,
						duration: 0,

					},
					{ // step 4
						n: 4,
						title: "Quick chop",
						gifURL: "https://media.giphy.com/media/5n4corltzrkahqtP9u/giphy.gif",
						details: "Add onions, cilantro, and serrano peppers together and give it a slight chop.",
						timer: true,
						duration: 30,

					},
					{ // step 5
						n: 5,
						title: "Grinding Technique",
						gifURL: "https://media.giphy.com/media/69C1Ee1LEWGvBddcxt/giphy.gif",
						details: "Add in kosher salt and use grinding technique to create a thinner, paste-like consistency.",
						timer: true,
						duration: 120,

					},
					{ // step 6
						n: 6,
						title: "Prepare Avocados",
						gifURL: "https://media.giphy.com/media/fH0bH5jZVmNBsiDPR2/giphy.gif",
						details: "Cut and remove pit of avocados.",
						timer: false,
						duration: 0,

					},
					{ // step 7
						n: 7,
						title: "Mash Guacamole",
						gifURL: "https://media.giphy.com/media/vcdiV9CpApFB8JX0GS/giphy.gif",
						details: "Add in cilantro and onion paste. Add extra cilantro and lime for taste. Mash everything to desired consistency.",
						timer: false,
						duration: 0,

					},
					{ // step 8
						n: 8,
						title: "Finished!",
						gifURL: "http://i68.tinypic.com/adzu6e.png",
						details: "Enjoy your delicious guacamole with some chips!",
						timer: false,
						duration: 0,

					}
				] // end steps
			}, // end recipe 3: guacamole
			{ //recipe 4
				id: 4,
				name: "Kevins Famous Chili",
				description: "Chili made by the kevin malone",
				duration: 25,
				author: "Kevin Malone",
				owns: false,
				private: false,
				imgURL: "https://www.thewholesomedish.com/wp-content/uploads/2018/05/600-X-900.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Dried Ancho Chiles",
						quantity: "3", //string
						unit: "ounce"
					},
					{
						name: "Dried Cascabel Chiles",
						quantity: "1",
						unit: "ounce"
					},
					{
						name: "Dried Oregano",
						quantity: "1",
						unit: "tablespoon"
					},
					{
						name: "Chicken Stock",
						quantity: "32",
						unit: "ounces"
					},
					{
						name: "Vegetable Oil",
						quantity: "2",
						unit: "tablespoon"
					},
					{
						name: "Chuck Steak",
						quantity: "3",
						unit: "pounds"
					},
					{
						name: "Spanish Onion",
						quantity: "1",
						unit: undefined
					},
					{
						name: "Brown Sugar",
						quantity: "2",
						unit: "tablespoon"
					},
					{
						name: "Red Kidney Beans",
						quantity: "12",
						unit: "ounces"
					} // comma needed here or NO

				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Toasty Chillies",
						gifURL: "https://i.kym-cdn.com/photos/images/original/000/332/462/40b.gif",
						details: "Toast chillies on pan until fragrant and barely smoking",
						timer: true,
						duration: 20,

					},
					{ // step 2
						n: 2,
						title: "Getting to know eachother",
						gifURL: "http://i.imgur.com/g5O8fuE.gif",
						details: "Place everything in pot and simmer",
						timer: true,
						duration: 180,

					},
					{ // step 3
						n: 3,
						title: "Finished!",
						gifURL: "http://78.media.tumblr.com/tumblr_lwd88hxDip1qfhqloo1_500.gif",
						details: "You're done! Now time to spill on the carpet",
						timer: false,
						duration: 0,

					}
				] // end steps
			}, // end recipe 1: spicy thai basil chicken
			{ //recipe 4
				id: 5,
				name: "Slow Cooker Jerk Chicken",
				description: "Jerk chicken with authentic jamaican flavors",
				duration: 480,
				author: "Hien",
				owns: false,
				private: false,
				imgURL: "https://dinnerthendessert.com/wp-content/uploads/2017/02/Slow-Cooker-Jerk-Chicken-2-e1486362861446.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Chicken Thighs",
						quantity: "6", //string
					},
					{
						name: "Green Onion",
						quantity: "3",
					},
					{
						name: "Yello Onion",
						quantity: "1/2",
					},
					{
						name: "Jalapeno Pepper",
						quantity: "1/2",
					},
					{
						name: "Vegetable Oil",
						quantity: "2",
						unit: "tablespoon"
					},
					{
						name: "Soy Sauce",
						quantity: "1/3",
						unit: "cup"
					},
					{
						name: "Distilled White Vinegar",
						quantity: "1/4"
					},
					{
						name: "Brown Sugar",
						quantity: "1",
						unit: "tablespoon"
					},
					{
						name: "Thyme",
						quantity: "2",
						unit: "teaspoons"
					},
					{
						name: "Ground Cloves",
						quantity: "1/4",
						unit: "teaspoon"
					},
					{
						name: "Ground Nutmeg",
						quantity: "1/4",
						unit: "teaspoon"
					},
					{
						name: "Ground Allspice",
						quantity: "1/4",
						unit: "teaspoon"
					}
					// comma needed here or NO
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Brown Chicken",
						gifURL: "https://media2.giphy.com/media/l0MYRbu9nSxqQQn8k/giphy.gif?cid=3640f6095be6184d7a32544a6fe774ae",
						details: "Brown chicken thighs on a large skillet on medium high heat",
						timer: true,
						duration: 180
					},
					{ // step 2
						n: 2,
						title: "Making Sauce",
						gifURL: "https://media2.giphy.com/media/3oEduNF7DlpxgcHVJe/giphy.gif?cid=3640f6095be617b5627041653272f037",
						details: "Puree the green onions, onion, jalapeno, soy sauce, Vinegar, vegetable oil, brown sugar, thyme, cloves, nutmeg and allspice",
						timer: false,
						duration: 0
					},
					{ // step 3
						n: 3,
						title: "Throw into Slow Cooker",
						gifURL: "https://media2.giphy.com/media/4B5F7kS2AI4IE/giphy.gif?cid=3640f6095be617ec724762615171967e",
						details: "Add the chidken and sauce into the slowe cooker and let it ride",
						timer: true,
						duration: 480
					},
					{
						n: 4,
						title: "Done!",
						gifURL: "https://dinnerthendessert.com/wp-content/uploads/2017/02/Slow-Cooker-Jerk-Chicken-2-e1486362861446.jpg",
						details: "Congrats you are done!",
						timer: false,
						duration: 0
					}
				] // end steps
			}, // end recipe 4: kevin"s chili
			{ //recipe 4
				id: 6,
				name: "Cereal",
				description: "Breakfast of Champions",
				duration: 180,
				author: "Homer Simpson",
				owns: false,
				private: false,
				imgURL: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29cc8c2559e8e871584bc355e644832b&auto=format&fit=crop&w=3077&q=80",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Cereal",
						quantity: "How Much Ever You want", //string
					},
					{
						name: "Milk",
						quantity: "1-2",
						unit: "cups",
					},
					// comma needed here or NO
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Pour Cereal",
						gifURL: "https://media1.giphy.com/media/mcp8ZwgDAEA9y/giphy.gif?cid=3640f6095be61b3b5574493163a470b5",
						details: "Pour cereal into bowl, CEREAL FIRST. NEVER MILK FIRST",
						timer: false,
						duration: 60
					},
					{ // step 2
						n: 2,
						title: "Pour Milk",
						gifURL: "https://media3.giphy.com/media/gQzoxR4vrBYg8/giphy.gif?cid=3640f6095be61bc03441432f2e274676",
						details: "Pour Milk into bowl",
						timer: false,
						duration: 60
					},
					{ // step 3
						n: 3,
						title: "Congrats you made cereal",
						gifURL: "https://media3.giphy.com/media/A5ugHVbuFL3uo/giphy.gif?cid=3640f6095be6184d7a32544a6fe774ae",
						details: "Enjoy your bowl of cereal",
						timer: false,
						duration: 60
					},
				] // end steps
			}, // end recipe 4: kevin"s chili
			{ //recipe 4
				id: 7,
				name: "Spaghetti Tacos",
				description: "Spaghetti in a Taco Shell",
				duration: 240,
				author: "Spencer",
				owns: true,
				private: false,
				imgURL: "https://images-gmi-pmc.edge-generalmills.com/7dd22523-eea7-435c-a68d-a052b00e65bf.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Spaghetti",
						quantity: "1/2",
						unit: "cups" //string
					},
					{
						name: "Taco Shells",
						quantity: "A lot",
					},
					{
						name: "Tomato Sauce",
						quantity: "1",
						unit: "jar"
					},
					{
						name: "Ground Beef",
						quantity: "1/2",
						unit: "pound"
					},
					// comma needed here or NO
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Boil Pasta",
						gifURL: "https://media3.giphy.com/media/443oviLMahn5FEqq2D/200w.webp?cid=3640f6095be61f32372e4636417bd899",
						details: "Boil Pasta",
						timer: true,
						duration: 600
					},
					{ // step 2
						n: 2,
						title: "Cook Meat",
						gifURL: "https://media1.giphy.com/media/l378v5zfXnryQFG1y/200w.webp?cid=3640f6095be61f5472684b716b290c93",
						details: "Cook meat in pan",
						timer: true,
						duration: 300
					},
					{ // step 3
						n: 3,
						title: "Mix Pasta with meat and tomato sauce",
						gifURL: "https://media0.giphy.com/media/dZRlFW1sbFEpG/giphy.webp?cid=3640f6095be61f7c7a346167671aa393",
						details: "Cook tomato sauce with pasta and meat",
						timer: true,
						duration: 300
					},
					{
						n: 4,
						title: "Combine pasta with Tacos",
						gifURL: "https://images-gmi-pmc.edge-generalmills.com/7dd22523-eea7-435c-a68d-a052b00e65bf.jpg",
						details: "Enjoy!",
						timer: false,
						duration: 0
					}
				] // end steps
			}, // end recipe 4: kevin"s chili
			{ //recipe 4
				id: 8,
				name: "Spicy Garlic Lime Chicken",
				description: "Chicken with a little kick",
				duration: 25,
				author: "Perez",
				owns: false,
				private: false,
				imgURL: "https://sweetpeasandsaffron.com/wp-content/uploads/2018/07/Perfect-Baked-Chicken-Breast-5.jpg",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Salt",
						quantity: "3/4", //string
						unit: "teaspoon",
					},
					{
						name: "Black Pepper",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "Cayenne Pepper",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "Paprika",
						quantity: "1/8",
						unit: "teaspoon",
					},
					{
						name: "Garlic Powder",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "Onion powder",
						quantity: "1/8",
						unit: "teaspoon",
					},
					{
						name: "Dried Thyme",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "Dried parsley",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "chicken Breast",
						quantity: "4",
						unit: "pieces",
					},					{
						name: "Butter",
						quantity: "2",
						unit: "tablespoon",
					},
					{
						name: "olive oil",
						quantity: "1",
						unit: "tablespoon",
					},
					// comma needed here or NO
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Mix",
						gifURL: "https://media.giphy.com/media/2xPMQQrcFVHshHFJ90/giphy.gif",
						details: "Mix salt, black pepper, cayenne, paprika, garlic poweder, onion powder, thyme and parsely",
						timer: false,
						duration: 60
					},
					{ // step 2
						n: 2,
						title: "Cover Chicken with spices",
						gifURL: "https://media.giphy.com/media/2tRpFJMpiIwGhsuOMn/giphy.gif",
						details: "Rub spice mix onto chicken breasts",
						timer: false,
						duration: 60
					},
					{ // step 3
						n: 3,
						title: "Cook Chicken on Pan",
						gifURL: "https://media.giphy.com/media/8FA0ZE01IF29WAoHqC/giphy.gif",
						details: "Heat butter on pan and saute chicken until golden brown, sprinkle with lime juice and cook 5 more min",
						timer: false,
						duration: 60
					},
					{
						n: 4,
						title: "Done!",
						gifURL: "https://media.giphy.com/media/kExFYiM3wmCKCgdolR/giphy.gif",
						details: "Enjoy Your Meal!",
						timer: false,
						duration: 0,
					}
				] // end steps
			}, // end recipe 4: kevin"s chili
			{ //recipe 4
				id: 9,
				name: "French Toast",
				description: "Waffle killer",
				duration: 15,
				author: "CrackerJacks",
				owns: true,
				private: false,
				imgURL: "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/800/quick-and-easy-french-toast.ashx?vd=20180710T034231Z&hash=FF5BBBC3BD24EBCC8B311AE653BCA55BE8B74516",
				recipeComments: [
				],
				stepsComments: [
				],

				ingredients: [
					{
						name: "Texas Toast or Thick Cut Bread",
						quantity: "6", //string
						unit: "pieces",
					},
					{
						name: "Eggs",
						quantity: "2",
					},
					{
						name: "Milk or cream",
						quantity: "1/4",
						unit: "cup",
					},
					{
						name: "Sugar",
						quantity: "1",
						unit: "teaspoon",
					},
					{
						name: "Cinnamon",
						quantity: "1/4",
						unit: "teaspoon",
					},
					{
						name: "Salt",
						quantity: "1/2",
						unit: "teaspoon",
					},
					{
						name: "vanilla extract",
						quantity: "1",
						unit: "drop",
					},
					{
						name: "Butter",
						quantity: "1/2",
						unit: "tablespoon",
					},
					{
						name: "olive oil",
						quantity: "1/2",
						unit: "tablespoon",
					},
					// comma needed here or NO
				], // end ingredients

				steps: [
					{ // step 1
						n: 1,
						title: "Mix",
						gifURL: "https://media.giphy.com/media/7FgYiCHdjD0797zVmD/giphy.gif",
						details: "Whisk eggs and add milk or cream",
						timer: false,
						duration: 60
					},
					{ // step 2
						n: 2,
						title: "Add spices",
						gifURL: "https://media.giphy.com/media/jUhnVkZ0kwZg967Ap1/giphy.gif",
						details: "Add Cinnamon, salt, and vanilla extract",
					},
					{ // step 3
						n: 3,
						title: "Cooking process",
						gifURL: "https://media.giphy.com/media/43J6lI4dUPBaU8t6K4/giphy.gif",
						details: "Dip bread in mixture and pan fry",
						timer: false,
						duration: 60
					},
					{
						n: 4,
						title: "Done!",
						gifURL: "https://media.giphy.com/media/2xPPtyPH1R9oRhDU12/giphy.gif",
						details: "Take off pan and add syrup!",
						timer: false,
						duration: 0,
					}
				] // end steps
			}, // end recipe 4: kevin"s chili
		], // END recipes list
		searchQuery: "",
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
			_.forEach([1,2], () => {
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
			return _.find(state.recipeList, {"id": id})
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
		UPDATE_RECIPE: (state, payload) => {
			let idx = _.findIndex(state.recipeList, (recipe) => {
				return recipe.id === payload.id
			})
			state.recipeList.splice(idx, 1, payload)
		}
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
			context.commit("ADD_RECIPE", payload)
		},
		updateRecipe: (context, payload) => {
			context.commit("UPDATE_RECIPE", payload)
		}
	}
})

