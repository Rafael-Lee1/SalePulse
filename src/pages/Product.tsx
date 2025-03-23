
export default function Product() {
  const products = [
    { id: 1, name: "Modern Chair", category: "Furniture", price: 299, stock: 25 },
    { id: 2, name: "Desk Lamp", category: "Lighting", price: 129, stock: 42 },
    { id: 3, name: "Coffee Table", category: "Furniture", price: 499, stock: 18 },
    { id: 4, name: "Wall Art", category: "Decor", price: 149, stock: 37 },
    { id: 5, name: "Bookshelf", category: "Furniture", price: 349, stock: 12 },
  ];

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Total Products</h3>
            <p className="text-white text-2xl font-bold">487</p>
          </div>
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Active Products</h3>
            <p className="text-[#A9DFD8] text-2xl font-bold">324</p>
          </div>
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Low Stock</h3>
            <p className="text-[#FEB95A] text-2xl font-bold">52</p>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px]">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-white text-[15px] font-semibold">Product Inventory</h2>
            <button className="bg-[#A9DFD8] text-[#171821] px-3 py-1.5 rounded-md text-sm font-medium">
              Add Product
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-[#2B2B36] last:border-0">
                    <td className="py-4 text-white text-sm">#{product.id}</td>
                    <td className="py-4 text-white text-sm">{product.name}</td>
                    <td className="py-4 text-white text-sm">{product.category}</td>
                    <td className="py-4 text-white text-sm">${product.price}</td>
                    <td className="py-4 text-white text-sm">{product.stock}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button className="bg-[#2B2B36] text-white p-1 rounded">
                          <span className="sr-only">Edit</span>
                          ✏️
                        </button>
                        <button className="bg-[#2B2B36] text-white p-1 rounded">
                          <span className="sr-only">Delete</span>
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
