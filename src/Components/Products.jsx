import ProductCard from "./ProductCard";

function Products({ title = "Best Sellers" }) {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1604908554027-7b9b0f3f0c8d",
      name: "Amul Gold Full Cream Milk",
      quantity: "500 ml",
      price: 34,
      tag: "Fresh",
    },
  ];

  return (
    <section>
      <h2>{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;   // 👈 THIS IS REQUIRED