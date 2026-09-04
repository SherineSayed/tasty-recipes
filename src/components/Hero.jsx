const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__text">
        <h1>Cook something worth telling a story about</h1>
        <p>
          A small collection of recipes we keep coming back to — tested in a
          real kitchen, written the way a friend would explain them.
        </p>
        <a href="#recipes" className="button">
          Browse the recipes
        </a>
      </div>
      <div className="hero__image">
        <img
          src="https://picsum.photos/seed/hero-kitchen/700/560"
          alt="A dish being prepared in a kitchen"
        />
      </div>
    </section>
  )
}

export default Hero
