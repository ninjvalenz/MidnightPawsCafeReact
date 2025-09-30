const { useState, useEffect } = React;

// Modern Icon Components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);

const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const Coffee = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
);

const Star = ({ filled, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const Phone = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const Mail = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const MapPin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const Cat = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
);

const Clock = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const Truck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);

const Heart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Rich espresso with vanilla syrup, steamed milk, and caramel drizzle",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
      detailedDescription: "Our signature Caramel Macchiato is a luxurious blend of rich espresso, velvety steamed milk, and sweet vanilla syrup, finished with a generous drizzle of buttery caramel sauce. Each sip delivers the perfect balance of bold coffee flavor and sweet indulgence, making it the ultimate comfort drink.",
      ingredients: ["Double Shot Espresso", "Steamed Whole Milk", "Vanilla Syrup", "Caramel Sauce", "Whipped Cream (optional)"],
      allergens: ["Dairy"],
      nutritionInfo: { calories: "250", protein: "9g", carbs: "34g", fat: "10g" },
      prepTime: "5 minutes",
      servingSize: "16 oz"
    },
    {
      id: 2,
      name: "Midnight Mocha",
      description: "Dark chocolate and espresso with steamed milk and cocoa powder",
      price: "$6.00",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
      detailedDescription: "Our house specialty, the Midnight Mocha, combines premium dark chocolate sauce with bold espresso shots and velvety steamed milk. Topped with a dusting of rich cocoa powder and a dollop of whipped cream, this decadent beverage is perfect for those cozy evening moments.",
      ingredients: ["Double Shot Espresso", "Dark Chocolate Sauce", "Steamed Milk", "Cocoa Powder", "Whipped Cream", "Chocolate Shavings"],
      allergens: ["Dairy", "May contain soy"],
      nutritionInfo: { calories: "310", protein: "11g", carbs: "42g", fat: "12g" },
      prepTime: "6 minutes",
      servingSize: "16 oz"
    },
    {
      id: 3,
      name: "Vanilla Latte",
      description: "Classic espresso with steamed milk and Madagascar vanilla",
      price: "$5.00",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      detailedDescription: "A timeless classic that never disappoints. Our Vanilla Latte features smooth espresso shots combined with creamy steamed milk and a touch of Madagascar vanilla syrup. The result is a perfectly balanced, sweet and smooth coffee experience.",
      ingredients: ["Double Shot Espresso", "Steamed Milk", "Vanilla Syrup", "Milk Foam"],
      allergens: ["Dairy"],
      nutritionInfo: { calories: "220", protein: "10g", carbs: "30g", fat: "8g" },
      prepTime: "4 minutes",
      servingSize: "16 oz"
    },
    {
      id: 4,
      name: "Iced Caramel Cold Brew",
      description: "24-hour steeped cold brew with caramel and cream",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
      detailedDescription: "Our refreshing Iced Caramel Cold Brew is steeped for 24 hours to create a smooth, less acidic coffee concentrate. Served over ice and sweetened with caramel syrup, then finished with a swirl of cream.",
      ingredients: ["Cold Brew Coffee", "Caramel Syrup", "Ice", "Heavy Cream", "Caramel Drizzle"],
      allergens: ["Dairy"],
      nutritionInfo: { calories: "180", protein: "2g", carbs: "28g", fat: "7g" },
      prepTime: "3 minutes",
      servingSize: "16 oz"
    }
  ];

  if (selectedFood) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-50">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-gradient-to-b from-black/60 to-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedFood(null)}>
                <Cat className={`w-10 h-10 ${scrolled ? 'text-amber-800' : 'text-amber-200'}`} />
                <span className={`text-2xl md:text-3xl font-bold ${scrolled ? 'text-amber-950' : 'text-white'}`}>
                  Midnight Paws Café
                </span>
              </div>
              
              <button 
                onClick={() => setSelectedFood(null)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  scrolled 
                    ? 'bg-amber-800 text-white hover:bg-amber-900' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                <ArrowLeft />
                <span className="hidden sm:inline">Back to Menu</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Product Detail */}
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image */}
              <div className="fade-in">
                <div className="sticky top-32">
                  <img 
                    src={selectedFood.image} 
                    alt={selectedFood.name}
                    className="w-full h-[400px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="fade-in space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-amber-950 mb-4">{selectedFood.name}</h1>
                  <p className="text-4xl lg:text-5xl font-bold text-amber-700">{selectedFood.price}</p>
                </div>
                
                <div className="prose prose-lg">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedFood.detailedDescription}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[140px] bg-gradient-to-br from-amber-100 to-amber-50 px-6 py-4 rounded-2xl border border-amber-200">
                    <div className="text-sm text-amber-800 font-medium">Prep Time</div>
                    <div className="text-xl font-bold text-amber-900 mt-1">{selectedFood.prepTime}</div>
                  </div>
                  <div className="flex-1 min-w-[140px] bg-gradient-to-br from-amber-100 to-amber-50 px-6 py-4 rounded-2xl border border-amber-200">
                    <div className="text-sm text-amber-800 font-medium">Size</div>
                    <div className="text-xl font-bold text-amber-900 mt-1">{selectedFood.servingSize}</div>
                  </div>
                </div>

                <a 
                  href="https://www.doordash.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center px-8 py-5 rounded-full text-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Order on DoorDash →
                </a>

                {/* Additional Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                    <h3 className="text-lg font-bold mb-4 text-amber-900 flex items-center gap-2">
                      <span className="text-2xl">☕</span> Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {selectedFood.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                    <h3 className="text-lg font-bold mb-4 text-amber-900 flex items-center gap-2">
                      <span className="text-2xl">📊</span> Nutrition
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(selectedFood.nutritionInfo).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{key}</span>
                          <span className="font-semibold text-amber-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                    <h3 className="text-lg font-bold mb-4 text-amber-900 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span> Allergens
                    </h3>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 mb-3">Contains:</p>
                      {selectedFood.allergens.map((allergen, index) => (
                        <div key={index} className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-medium border border-red-100">
                          {allergen}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Cat className={`w-10 h-10 ${scrolled ? 'text-amber-800' : 'text-amber-200'}`} />
              <span className={`text-2xl md:text-3xl font-bold ${scrolled ? 'text-amber-950' : 'text-white'}`}>
                Midnight Paws Café
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`text-base font-medium transition-colors ${
                    scrolled 
                      ? 'text-amber-900 hover:text-amber-700' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://www.doordash.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Order Now
              </a>
            </div>

            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <X className={scrolled ? 'text-amber-900' : 'text-white'} /> : 
                <MenuIcon className={scrolled ? 'text-amber-900' : 'text-white'} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-amber-200">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-amber-900 hover:text-amber-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://www.doordash.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Order on DoorDash
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-barista-making-cappuccino-6833/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 text-shadow leading-tight">
              Cozy Coffee from<br/>Humble Beginnings
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-100 mb-12 max-w-3xl mx-auto font-light">
              Your dopamine boost in every cup - where warmth meets coffee
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#menu" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
              >
                Explore Menu
              </a>
              <a 
                href="https://www.doordash.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/30 transition-all transform hover:scale-105"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Coffee, title: "Passionate Baristas", desc: "Coffee lovers crafting each cup with care" },
              { icon: Truck, title: "Fast Delivery", desc: "Quick service without compromising quality" },
              { icon: Heart, title: "Made with Love", desc: "Premium beans and heartfelt brewing" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-amber-800" />
                </div>
                <h3 className="text-2xl font-bold text-amber-950 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-amber-50 via-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-amber-950 mb-6">Our Coffee Selection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Handcrafted beverages made with love and premium beans</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, idx) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedFood(item)}
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-amber-100 fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 image-overlay"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-3xl font-bold text-amber-400">{item.price}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-950 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-amber-950 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from late-night cravings and a passion for exceptional coffee
            </p>
          </div>

          {/* Main Story Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in space-y-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80" 
                  alt="Coffee preparation"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 rounded-3xl shadow-2xl max-w-xs">
                  <div className="text-5xl font-bold mb-2">2015</div>
                  <div className="text-lg">Where it all began</div>
                </div>
              </div>
            </div>
            
            <div className="fade-in space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">Midnight Paws Café</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Born from a simple truth: some of the best ideas, deepest conversations, and most productive 
                  work happen after dark. We understand the struggle of late-night coffee cravings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">For Night Owls</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Whether you're a student burning the midnight oil, a creative finding inspiration at 2 AM, 
                  or simply someone who loves the comfort of a warm cup when the world is quiet - we created this for you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">Passion & Comfort</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Founded by individuals who cherish <span className="text-amber-700 font-semibold">cozy moments</span>, 
                  <span className="text-amber-700 font-semibold"> comfort</span>, and <span className="text-amber-700 font-semibold">exceptional coffee</span>. 
                  Quality shouldn't sleep when the sun goes down.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 fade-in">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
              <div className="text-5xl mb-6">🌙</div>
              <h3 className="text-2xl font-bold mb-4">Late Night Heroes</h3>
              <p className="text-amber-50 leading-relaxed">
                We're here when others aren't. Your midnight craving is our mission. 
                Quality coffee delivered when you need it most.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
              <div className="text-5xl mb-6">☕</div>
              <h3 className="text-2xl font-bold mb-4">Comfort First</h3>
              <p className="text-amber-50 leading-relaxed">
                Every cup is crafted to bring warmth and comfort. We believe coffee is more 
                than caffeine - it's a hug in a cup.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white p-10 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Made with Passion</h3>
              <p className="text-amber-50 leading-relaxed">
                Started by coffee enthusiasts who truly care. Every drink reflects our 
                love for the craft and our customers.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-in">
            <a 
              href="#menu" 
              className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
            >
              Explore Our Coffee →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-amber-950 mb-6">Customer Love</h2>
            <p className="text-xl text-gray-600">What our coffee lovers are saying</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { initial: "MN", name: "Michael N.", text: "The best coffee in LA! The Caramel Macchiato is absolutely divine and arrives perfectly hot. Midnight Paws is a lifesaver whenever I'm craving quality coffee late at night!" },
              { initial: "LB", name: "Lisa B.", text: "The Midnight Mocha is pure heaven! Rich, chocolatey, and perfectly balanced. Quick delivery and always tastes fresh. My go-to for those late-night study sessions!" },
              { initial: "NV", name: "Ninj V.", text: "The Vanilla Latte is incredibly smooth and comforting! Love how they package it - stays hot until it arrives. A lifesaver when I need that midnight caffeine boost!" },
              { initial: "AP", name: "Akie P.", text: "The Iced Caramel Cold Brew is incredibly smooth and refreshing! Perfect for late nights when I need a pick-me-up. Fast delivery and tastes amazing every single time!" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl border border-amber-100 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={true} className="w-5 h-5 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-amber-950">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-amber-950 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Phone, title: "Phone", info: "+1 (831) 521-4619" },
              { icon: Mail, title: "Email", info: "reshydaswani@gmail.com" },
              { icon: MapPin, title: "Location", info: "1630 North Harvard\nLos Angeles, CA 90027" }
            ].map((contact, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-xl border border-amber-100 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-4">
                  <contact.icon className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="font-bold text-xl text-amber-950 mb-2">{contact.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cat className="w-8 h-8 text-amber-300" />
                <span className="text-2xl font-bold">Midnight Paws Café</span>
              </div>
              <p className="text-amber-200/80 leading-relaxed">
                Brewing happiness one cup at a time. Premium coffee delivered to your door.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-200">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block text-amber-200/60 hover:text-amber-200 transition">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-200">Delivery Hours</h4>
              <div className="text-amber-200/80 space-y-2">
                <p>Mon - Fri: 6am - 10pm</p>
                <p>Sat - Sun: 7am - 11pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-200">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-amber-200/60 hover:text-amber-200 transition">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800/30 pt-8 text-center text-amber-200/60">
            <p>&copy; 2025 Midnight Paws Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
