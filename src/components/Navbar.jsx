const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__brand">Tasty Recipes</span>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
