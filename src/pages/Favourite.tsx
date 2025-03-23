
export default function Favourite() {
  const favorites = [
    { id: 1, name: "Modern Chair", category: "Furniture", price: 299, image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1365&auto=format&fit=crop" },
    { id: 2, name: "Desk Lamp", category: "Lighting", price: 129, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1374&auto=format&fit=crop" },
    { id: 3, name: "Coffee Table", category: "Furniture", price: 499, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1369&auto=format&fit=crop" },
    { id: 4, name: "Wall Art", category: "Decor", price: 149, image: "https://images.unsplash.com/photo-1526566661780-1a67ea3c6e75?q=80&w=1342&auto=format&fit=crop" },
    { id: 5, name: "Bookshelf", category: "Furniture", price: 349, image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1335&auto=format&fit=crop" },
    { id: 6, name: "Floor Lamp", category: "Lighting", price: 199, image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1287&auto=format&fit=crop" },
  ];

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Favourites</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((item) => (
            <div key={item.id} className="bg-[#21222D] rounded-[10px] overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <button className="text-red-500">
                    ❤️
                  </button>
                </div>
                <p className="text-[#87888C] text-sm mb-3">{item.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#A9DFD8] font-bold">${item.price}</span>
                  <button className="bg-[#A9DFD8] text-[#171821] px-3 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
