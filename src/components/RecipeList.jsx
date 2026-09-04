import RecipeCard from './RecipeCard.jsx'

const RecipeList = ({ recipes }) => {
  return (
    <section className="recipe-list" id="recipes">
      <div className="recipe-list__heading">
        <h2>This week's recipes</h2>
        <p>Eight dishes, from breakfast to dinner — pick whatever fits your mood.</p>
      </div>

      <div className="recipe-list__grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            category={recipe.category}
            time={recipe.time}
            image={recipe.image}
            description={recipe.description}
            isPopular={recipe.isPopular}
          />
        ))}
      </div>
    </section>
  )
}

export default RecipeList
