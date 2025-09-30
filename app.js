const { useState } = React;

// Lucide React icons as components
const Menu = () => (
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

function CoffeeShopWebsite() {
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
      <nav className="fixed w-full bg-amber-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 text-amber-300"><Cat /></div>
              <span className="text-2xl font-bold text-white">Midnight Paws Café</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-amber-300 transition">Home</a>
              <a href="#menu" className="text-white hover:text-amber-300 transition">Menu</a>
              <a href="#about" className="text-white hover:text-amber-300 transition">About</a>
              <a href="#contact" className="text-white hover:text-amber-300 transition">Contact</a>
              <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition">Order on DoorDash</a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6">
                {mobileMenuOpen ? <X /> : <Menu />}
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-900 border-t border-amber-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-white hover:text-amber-300">Home</a>
              <a href="#menu" className="block text-white hover:text-amber-300">Menu</a>
              <a href="#about" className="block text-white hover:text-amber-300">About</a>
              <a href="#contact" className="block text-white hover:text-amber-300">Contact</a>
              <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-amber-300">Order on DoorDash</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://cdn.coverr.co/videos/coverr-making-coffee-in-a-coffee-shop-9385/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/70 to-black/60 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cozy Coffee from Humble Beginnings
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your dopamine boost in every cup - where warmth meets coffee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition inline-block">
              View Menu
            </a>
            <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-900 px-8 py-4 rounded-full text-lg hover:bg-amber-50 transition inline-block">
              Order Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <div className="w-8 h-8 text-amber-700"><Coffee /></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Passionate Baristas</h3>
              <p className="text-gray-600">Coffee lovers crafting each cup with care and expertise</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <div className="w-8 h-8 text-amber-700"><Clock /></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Quick Service</h3>
              <p className="text-gray-600">Fast and friendly without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <div className="w-8 h-8 text-amber-700"><Star /></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Premium Beans</h3>
              <p className="text-gray-600">Only the finest ethically-sourced coffee beans</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Our Coffee Selection</h2>
            <p className="text-xl text-gray-600">Handcrafted beverages made with love</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedFood(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer border-2 border-amber-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-900">{item.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-800 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">What Makes Us Special</h2>
            <p className="text-xl text-gray-600">Quality beans, cozy atmosphere, heartfelt brewing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 text-amber-800"><Coffee /></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Premium Coffee Beans</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We source only the finest ethically-traded coffee beans from sustainable farms around the world. 
                    Each bean is carefully roasted to perfection to bring out unique flavor notes and aromas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Crafted with Care</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our baristas are passionate coffee enthusiasts who take pride in every cup. Each beverage 
                    is carefully crafted with attention to detail and a genuine desire to create the perfect 
                    coffee experience for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Cozy Atmosphere</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Step into a space that feels like home. Our warm, inviting café creates the perfect 
                    setting for morning coffee, afternoon study sessions, or evening catch-ups with friends. 
                    Comfort is our specialty.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Fresh Daily Roasting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We roast our beans in small batches daily to ensure maximum freshness and flavor. 
                    This approach allows us to maintain the highest quality standards and give each 
                    roast the attention it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/800x600/?barista,coffee-shop" 
                alt="Barista"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">Our Story</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Founded in 2015, Midnight Paws Café started as a dream to create a cozy coffee haven 
                where people could gather, relax, and enjoy exceptional coffee in a welcoming atmosphere.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our team of passionate baristas is dedicated to sourcing the finest beans and perfecting 
                each brew. We believe coffee is more than a beverage - it's an experience, a moment of 
                comfort, and a reason to connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initial: "MN", name: "Michael N.", role: "Coffee Enthusiast", text: "The best coffee in LA! The Caramel Macchiato is absolutely divine. The cozy atmosphere makes it the perfect spot for morning work sessions. I'm here almost every day!" },
              { initial: "LB", name: "Lisa B.", role: "Regular Customer", text: "The Midnight Mocha is pure heaven! Rich, chocolatey, and perfectly balanced. The staff is incredibly friendly and remembers my order. This is my happy place!" },
              { initial: "NV", name: "Ninj V.", role: "Coffee Lover", text: "Such a charming café! The Vanilla Latte is smooth and comforting. Love the cat-themed décor and the warm ambiance. Perfect for date nights or catching up with friends!" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-amber-50 p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-amber-600"><Star filled={true} /></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-amber-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-amber-50 p-8 rounded-2xl shadow-lg max-w-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-amber-600"><Star filled={true} /></div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The cold brew is incredibly smooth and refreshing. The baristas clearly know their craft. 
                The cozy vibe makes you want to stay all day. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold">
                  AP
                </div>
                <div>
                  <div className="font-bold text-amber-900">Akie P.</div>
                  <div className="text-sm text-gray-500">Local Guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-amber-200 rounded-full mb-4">
                <div className="w-6 h-6 text-amber-800"><Phone /></div>
              </div>
              <h3 className="font-bold mb-2 text-amber-900">Phone</h3>
              <p className="text-gray-600">+1 (831) 521-4619</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-amber-200 rounded-full mb-4">
                <div className="w-6 h-6 text-amber-800"><Mail /></div>
              </div>
              <h3 className="font-bold mb-2 text-amber-900">Email</h3>
              <p className="text-gray-600">reshydaswani@gmail.com</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-amber-200 rounded-full mb-4">
                <div className="w-6 h-6 text-amber-800"><MapPin /></div>
              </div>
              <h3 className="font-bold mb-2 text-amber-900">Location</h3>
              <p className="text-gray-600">1630 North Harvard<br/>Los Angeles, CA 90027</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-amber-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 text-amber-300"><Cat /></div>
                <span className="text-xl font-bold">Midnight Paws Café</span>
              </div>
              <p className="text-amber-200">
                Brewing happiness one cup at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-amber-200 hover:text-amber-300">Home</a>
                <a href="#menu" className="block text-amber-200 hover:text-amber-300">Menu</a>
                <a href="#about" className="block text-amber-200 hover:text-amber-300">About</a>
                <a href="#contact" className="block text-amber-200 hover:text-amber-300">Contact</a>
                <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="block text-amber-200 hover:text-amber-300">Order on DoorDash</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <div className="text-amber-200 space-y-2">
                <p>Mon - Fri: 6am - 10pm</p>
                <p>Sat - Sun: 7am - 11pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-amber-200 hover:text-amber-300">Facebook</a>
                <a href="#" className="text-amber-200 hover:text-amber-300">Instagram</a>
                <a href="#" className="text-amber-200 hover:text-amber-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-900 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Midnight Paws Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CoffeeShopWebsite />);
