const RecipeCard = ({ name, category, time, image, description, isPopular }) => {
  const handleClick = () => {
    alert(`You selected ${name}`)
  }

  return (
    <article className="recipe-card">
      {isPopular && <span className="recipe-card__badge">🔥 Popular</span>}

      <img className="recipe-card__image" src={image} alt={name} />

      <div className="recipe-card__body">
        <div className="recipe-card__meta">
          <span>{category}</span>
          <span>{time}</span>
        </div>

        <h3 className="recipe-card__name">{name}</h3>
        <p className="recipe-card__description">{description}</p>

        <button className="button button--small" onClick={handleClick}>
          View Recipe
        </button>
      </div>
    </article>
  )
}

export default RecipeCard
