import { useState } from "react";


export default function RecipeGeneratorComponent() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietRestrictions, setDietRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');

  const createRecipe = async () => {
    try {
      const res =  await fetch(`http://localhost:8080/v1/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietRestrictions}`);
      const data = await res.text();
      setRecipe(data);
    } catch (e) {
      console.log('Error ', e);
    }
  }
  return (
    <div>
    <h2>Create a Recipe</h2>
    <input 
    type="text"
    value={ingredients}
    onChange={(e) => setIngredients(e.target.value)}
    placeholder="Enter ingredients"
    />
       <input 
    type="text"
    value={dietRestrictions}
    onChange={(e) => setDietRestrictions(e.target.value)}
    placeholder="Enter dietary restrictions"
    />
       <input 
    type="text"
    value={cuisine}
    onChange={(e) => setCuisine(e.target.value)}
    placeholder="Enter cuisine type"
    />
    <button onClick={createRecipe}>Create Recipe</button>
    <div className="output">
      <pre className="recipe-text">{recipe}</pre>
    </div>
    </div>
  )
}