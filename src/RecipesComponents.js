function RecipesComponents({image, label, calories, ingredients, link}) {
    return (
        <div className="card">
            <img src={image} alt="recipe" />
            <h2 className="card-title">{label}</h2>
            <p className="calories">{calories.toFixed()} calories</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}><em>{ingredient}</em></li>
                ))}
            </ul>
            <a href={link} className="recipe-link" rel="noopener noreferrer" target="_Blank">View Full Recipe</a>
        </div>
    )
}

export default RecipesComponents;