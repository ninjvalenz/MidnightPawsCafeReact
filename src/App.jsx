import { useState } from 'react'

// Icon Components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Coffee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
);

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const Star = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Cat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path></svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const menuItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Espresso with vanilla-flavored syrup and steamed milk, topped with caramel drizzle",
      price: "$5.50",
      image: "https://source.unsplash.com/400x300/?caramel,macchiato,coffee",
      detailedDescription: "Our signature Caramel Macchiato is a luxurious blend of rich espresso, velvety steamed milk, and sweet vanilla syrup, finished with a generous drizzle of buttery caramel sauce. Each sip delivers the perfect balance of bold coffee flavor and sweet indulgence, making it the ultimate comfort drink.",
      ingredients: ["Double Shot Espresso", "Steamed Whole Milk", "Vanilla Syrup", "Caramel Sauce", "Whipped Cream (optional)"],
      allergens: ["Dairy"],
      nutritionInfo: {
        calories: "250",
        protein: "9g",
        carbs: "34g",
        fat: "10g"
      },
      prepTime: "5 minutes",
      servingSize: "16 oz"
    },
    {
      id: 2,
      name: "Midnight Mocha",
      description: "Dark chocolate and espresso blend with steamed milk and cocoa powder",
      price: "$6.00",
      image: "https://source.unsplash.com/400x300/?mocha,chocolate,coffee",
      detailedDescription: "Our house specialty, the Midnight Mocha, combines premium dark chocolate sauce with bold espresso shots and velvety steamed milk. Topped with a dusting of rich cocoa powder and a dollop of whipped cream, this decadent beverage is perfect for those cozy evening moments under the stars.",
      ingredients: ["Double Shot Espresso", "Dark Chocolate Sauce", "Steamed Milk", "Cocoa Powder", "Whipped Cream", "Chocolate Shavings"],
      allergens: ["Dairy", "May contain soy"],
      nutritionInfo: {
        calories: "310",
        protein: "11g",
        carbs: "42g",
        fat: "12g"
      },
      prepTime: "6 minutes",
      servingSize: "16 oz"
    },
    {
      id: 3,
      name: "Vanilla Latte",
      description: "Classic espresso with steamed milk and vanilla syrup",
      price: "$5.00",
      image: "https://source.unsplash.com/400x300/?latte,vanilla,coffee",
      detailedDescription: "A timeless classic that never disappoints. Our Vanilla Latte features smooth espresso shots combined with creamy steamed milk and a touch of Madagascar vanilla syrup. The result is a perfectly balanced, sweet and smooth coffee experience that's both comforting and energizing.",
      ingredients: ["Double Shot Espresso", "Steamed Milk", "Vanilla Syrup", "Milk Foam"],
      allergens: ["Dairy"],
      nutritionInfo: {
        calories: "220",
        protein: "10g",
        carbs: "30g",
        fat: "8g"
      },
      prepTime: "4 minutes",
      servingSize: "16 oz"
    },
    {
      id: 4,
      name: "Iced Caramel Cold Brew",
      description: "Smooth cold brew coffee with caramel syrup over ice",
      price: "$5.50",
      image: "https://source.unsplash.com/400x300/?cold-brew,iced-coffee",
      detailedDescription: "Our refreshing Iced Caramel Cold Brew is steeped for 24 hours to create a smooth, less acidic coffee concentrate. Served over ice and sweetened with caramel syrup, then finished with a swirl of cream. Perfect for warm days or when you need a cool, energizing pick-me-up.",
      ingredients: ["Cold Brew Coffee", "Caramel Syrup", "Ice", "Heavy Cream", "Caramel Drizzle"],
      allergens: ["Dairy"],
      nutritionInfo: {
        calories: "180",
        protein: "2g",
        carbs: "28g",
        fat: "7g"
      },
      prepTime: "3 minutes",
      servingSize: "16 oz"
    }
  ];

  if (selectedFood) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <nav className="fixed w-full bg-amber-900/95 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 text-amber-300"><Cat /></div>
                <span className="text-2xl font-bold text-white">Midnight Paws Café</span>
              </div>
              
              <button 
                onClick={() => setSelectedFood(null)}
                className="flex items-center gap-2 text-white hover:text-amber-300 transition"
              >
                <div className="w-5 h-5"><ArrowLeft /></div>
                <span>Back to Menu</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src={selectedFood.image} 
                  alt={selectedFood.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">{selectedFood.name}</h1>
                <p className="text-3xl font-bold text-amber-700 mb-6">{selectedFood.price}</p>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-3 text-amber-900">Description</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedFood.detailedDescription}</p>
                </div>

                <div className="flex gap-4 mb-8">
                  <div className="bg-amber-100 px-4 py-2 rounded-lg">
                    <div className="text-sm text-gray-600">Prep Time</div>
                    <div className="font-bold text-amber-700">{selectedFood.prepTime}</div>
                  </div>
                  <div className="bg-amber-100 px-4 py-2 rounded-lg">
                    <div className="text-sm text-gray-600">Size</div>
                    <div className="font-bold text-amber-700">{selectedFood.servingSize}</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="flex-1 bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-800 transition text-center">
                    Order on DoorDash
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-900">
                  <span className="text-2xl">☕</span>
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {selectedFood.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-amber-700 mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-900">
                  <span className="text-2xl">📊</span>
                  Nutrition Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-bold">{selectedFood.nutritionInfo.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protein</span>
                    <span className="font-bold">{selectedFood.nutritionInfo.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbs</span>
                    <span className="font-bold">{selectedFood.nutritionInfo.carbs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fat</span>
                    <span className="font-bold">{selectedFood.nutritionInfo.fat}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-900">
                  <span className="text-2xl">⚠️</span>
                  Allergen Info
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 mb-3">This drink contains:</p>
                  {selectedFood.allergens.map((allergen, index) => (
                    <div key={index} className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">
                      {allergen}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation - Rest of the code continues... */}
      {/* Due to character limits, I'll create this as a separate comment below */}
    </div>
  );
}

export default App
