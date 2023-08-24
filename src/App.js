import { useEffect, useState } from 'react';
import './App.css';
import RecipesComponents from './RecipesComponents';

function App() {
  const myId = "8124285e";
  const myKey = "c093c0ac0de2fec04a2e6915e1d08be4";

  const [inputInfo, setInputInfo] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);
  const [searchValue, setSearchValue] = useState("Avocado")

  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${myId}&app_key=${myKey}`);
      const data = await response.json();
      setRecipeArray(data.hits);
    }
    getRecipe();
  }, [searchValue]);

  const searchInfo = (e) => {
    setInputInfo(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setSearchValue(inputInfo);
  }

  return (
    <div className='wrapper'>
      <div>
        <h1>Find a Recipe</h1>
        <form onSubmit={finalSearch}>
          <input className='search' type="text" onChange={searchInfo} value={inputInfo} />
          <button className='btn'><span className="material-symbols-outlined" >search</span></button>
        </form>
      </div>
      <div className='container'>
        {recipeArray.map((element, index) => (
          <RecipesComponents key={index}
          image = {element.recipe.image}
          label = {element.recipe.label}
          calories = {element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}
          link = {element.recipe.url}/>
        ))}
      </div>
    </div>
  );
}

export default App;
