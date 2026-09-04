const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="about">
      <p>Tasty Recipes</p>
      <p>© {year} Tasty Recipes. All rights reserved.</p>
    </footer>
  )
}

export default Footer
