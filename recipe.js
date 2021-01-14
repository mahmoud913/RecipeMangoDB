/*

Insert 3 new recipes and their ingredients, amounts, and measures in to the Database
	
Write a query to get a list of all the Recipes
	
Write a query to get a list of Recipes that use a certain Ingredient
	
Write a query to update a recipe you added
		
Put your SQL commands in a file in a Github repo and submit the repo link to Lab 1

*/

const recipesArr =
[
    {
      "recipeName": "Special grilled Cheese",
      "recipeDesc": "bread and that melted cheese",
      "instructions": "put cheese on bread, heat until cheese is melted like lava.",
      "ingredients": [
        {
          "ingredientName": "bread",
          "measure": "slices",
          "qty": "2"
        },
        {
          "ingredientName": "cheese",
          "measure": "slices",
          "qty": "3"
        }
      ]
    },
    {
      "recipeName": "Grilled Chicken and Cheese",
      "recipeDesc": "bread chicken and that melted cheese",
      "instructions": "put cheese on and under the chicken then on bread, heat until cheese is melted a wild volcano.",
      "ingredients": [
        {
          "ingredientName": "bread",
          "measure": "slices",
          "qty": "2"
        },
        {
          "ingredientName": "cheese",
          "measure": "slices",
          "qty": "4"
        },
        {
          "ingredientName": "ham",
          "measure": "oz",
          "qty": "7"
        }
      ]
    },
    {
      "recipeName": "burrito",
      "recipeDesc": "tortilla, beef, cheese, spicy salsa",
      "instructions": "stuff everything in burrito",
      "ingredients": [
        {
          "ingredientName": "tortilla",
          "measure": "each",
          "qty": "1"
        },
        {
          "ingredientName": "cheddar cheese, shredded",
          "measure": "cup",
          "qty": "1"
        },
        {
          "ingredientName": "meat",
          "measure": "oz",
          "qty": "8"
        },
        {
          "ingredientName": "spicy salsa",
          "measure": "oz",
          "qty": "2"
        }
      ]
    }
  ];

use('mongodbVSCodePlaygroundDB');

db.recipes.drop();
db.recipes.insertMany(recipesArr);


db.recipes.find();

db.recipes.find({"ingredients.ingredientName": "cheese"});

//update recipe


db.recipes.updateOne(
   { recipeName: "Special grilled cheese" },
   {
     $set: { "recipeName": "Extra Special Grilled Cheese"}
   }
);

db.recipes.find();