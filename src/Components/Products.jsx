import ProductCard from "./ProductCard";

function Products({ title = "Best Sellers" }) {
  const products = [
    {
      image:
        "https://m.media-amazon.com/images/I/61L5QgPvgqL.jpg",
      name: "Amul Gold Full Cream Milk",
      quantity: "500 ml",
      price: 34,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61fZ+YAYGaL.jpg",
      name: "Lay's Classic Salted Chips",
      quantity: "52 g",
      price: 20,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg",
      name: "Coca Cola Soft Drink",
      quantity: "750 ml",
      price: 40,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71YBmiSJlmL.jpg",
      name: "Britannia Bread",
      quantity: "400 g",
      price: 45,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61f+P0Qw7-L.jpg",
      name: "Good Day Biscuits",
      quantity: "200 g",
      price: 35,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>

        <button className="text-[#0C831F] font-semibold">
          See All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;