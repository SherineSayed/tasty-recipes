// Recipe data — a plain array of objects.
// Swap the "image" values for your own photos whenever you like;
// for now they use a placeholder image service so the layout works out of the box.

const recipes = [
  {
    id: 1,
    name: "Creamy Garlic Pasta",
    category: "Main Dish",
    time: "30 min",
    image: "https://picsum.photos/seed/pasta-dish/600/420",
    description: "A quick weeknight pasta tossed in a garlicky parmesan cream sauce.",
    isPopular: true,
  },
  {
    id: 2,
    name: "Molten Chocolate Cake",
    category: "Dessert",
    time: "45 min",
    image: "https://picsum.photos/seed/choc-cake/600/420",
    description: "A soft, rich chocolate cake with a warm melting center.",
    isPopular: false,
  },
  {
    id: 3,
    name: "Grilled Lemon Chicken",
    category: "Main Dish",
    time: "40 min",
    image: "https://picsum.photos/seed/lemon-chicken/600/420",
    description: "Juicy grilled chicken marinated in lemon, garlic, and herbs.",
    isPopular: true,
  },
  {
    id: 4,
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 min",
    image: "https://picsum.photos/seed/avocado-toast/600/420",
    description: "Crisp sourdough topped with smashed avocado and chili flakes.",
    isPopular: false,
  },
  {
    id: 5,
    name: "Classic Beef Tacos",
    category: "Main Dish",
    time: "25 min",
    image: "https://picsum.photos/seed/beef-tacos/600/420",
    description: "Seasoned beef, crunchy shells, and all your favorite toppings.",
    isPopular: true,
  },
  {
    id: 6,
    name: "Berry Yogurt Bowl",
    category: "Breakfast",
    time: "8 min",
    image: "https://picsum.photos/seed/berry-yogurt/600/420",
    description: "Creamy yogurt layered with fresh berries, honey, and granola.",
    isPopular: false,
  },
  {
    id: 7,
    name: "Roasted Veggie Soup",
    category: "Soup",
    time: "50 min",
    image: "https://picsum.photos/seed/veggie-soup/600/420",
    description: "A cozy blended soup made from slow-roasted seasonal vegetables.",
    isPopular: false,
  },
  {
    id: 8,
    name: "Homemade Margherita Pizza",
    category: "Main Dish",
    time: "35 min",
    image: "https://picsum.photos/seed/margherita-pizza/600/420",
    description: "Crisp thin crust topped with tomato, fresh mozzarella, and basil.",
    isPopular: true,
  },
];

export default recipes;
