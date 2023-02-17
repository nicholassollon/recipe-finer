import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Recipe.css'
function Recipe() {
  const { id } = useParams();
  const [recipe, updateRecipe] = useState("");
  const [name, updateName] = useState("");
  const [ingredients, updateIngredients] = useState([]);
  const [image, updateImage] = useState("");
  const [allergens, updateAllergens] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function getRecipe(recipe) {
    updateRecipe(recipe.recipe);
    updateName(recipe.name);
    updateIngredients(recipe.ingredients);
    updateAllergens(recipe.allergens);
    updateImage(recipe.image);
  }
  
  function displayIngredients(){
    return ingredients.map((ingred)=><li>{ingred}</li>)
  }

  //[peanuts, fish, shellfish, dairy, soy, gluten, egg]
  function displayAllergens() {
    let aller = "";
    if (allergens[0]) aller += "peanuts, ";
    if (allergens[1]) aller += "fish, ";
    if (allergens[2]) aller += "shellfish, ";
    if (allergens[3]) aller += "dairy, ";
    if (allergens[4]) aller += "soy, ";
    if (allergens[5]) aller += "gluten, ";
    if (allergens[6]) aller += "egg, ";

    return aller;
  }
  useEffect(() => {
    fetch(`http://localhost:3004/recipes/${id}`)
      .then((r) => r.json())
      .then((data) => getRecipe(data));
  }, []);

  return (
    <div>
      <h1 class="h1" id="title">{name}</h1>
      <img class="img2" id="image" src={image} alt={name}></img>
      <p class="allergy">
        This recipe contains the following common allergens:{" "}
        {displayAllergens()}
      </p>
      <p class="ingre">{displayIngredients()}</p>
      <p class="rec">{recipe}</p>
    </div>
  );
}
// "id": 1,
//       "ingredients": [
//         "steak 1 lb",
//         "salt",
//         "black pepper"
//       ],
//       "recipe": "Liberally add salt and pepper to your steak, then sear on both sides to your liking",
//       "allergens": [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false
//       ],
//       "image": "https://memestatic.fjcdn.com/pictures/The+most+cursed+food_052080_7464097.jpg",
//       "name": "Surprise :)"
//     }
export default Recipe;
