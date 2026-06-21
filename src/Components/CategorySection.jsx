function CategorySection() {
  const categories = [
    {
      name: "Vegetables",
      image:
        "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
      bg: "bg-green-100",
    },
    {
      name: "Fruits",
      image:
        "https://cdn-icons-png.flaticon.com/512/590/590685.png",
      bg: "bg-red-100",
    },
    {
      name: "Dairy & Milk",
      image:
        "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
      bg: "bg-blue-100",
    },
    {
      name: "Snacks",
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      bg: "bg-yellow-100",
    },
    {
      name: "Cold Drinks",
      image:
        "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
      bg: "bg-cyan-100",
    },
    {
      name: "Bakery",
      image:
        "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      bg: "bg-orange-100",
    },
    {
      name: "Beauty",
      image:
        "https://cdn-icons-png.flaticon.com/512/1005/1005766.png",
      bg: "bg-pink-100",
    },
    {
      name: "Tea & Coffee",
      image:
        "https://cdn-icons-png.flaticon.com/512/924/924514.png",
      bg: "bg-amber-100",
    },
    {
      name: "Pet Care",
      image:
        "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      bg: "bg-purple-100",
    },
    {
      name: "Baby Care",
      image:
        "https://cdn-icons-png.flaticon.com/512/3468/3468377.png",
      bg: "bg-indigo-100",
    },
    {
      name: "Household",
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      bg: "bg-gray-100",
    },
    {
      name: "Instant Food",
      image:
        "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
      bg: "bg-lime-100",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Shop by Category
          </h2>

          <button className="text-[#0C831F] font-semibold hover:underline">
            See All
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {categories.map((category, index) => (
            <div
              key={index}
              className={`
                ${category.bg}
                rounded-2xl
                p-4
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              `}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain"
              />

              <h3 className="mt-3 text-sm font-semibold text-center">
                {category.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CategorySection;