import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import RecipeList from './components/RecipeList.jsx'
import Footer from './components/Footer.jsx'
import recipes from './data.js'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RecipeList recipes={recipes} />
      <Footer />
    </div>
  )
}

export default App
