function ProductCard({
  image,
  name,
  quantity,
  price,
  deliveryTime = "10 mins",
  tag = "Fresh",
}) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Tag */}
      <div className="flex justify-between items-center">
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
          {tag}
        </span>

        <span className="text-xs text-gray-500">⚡ {deliveryTime}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center my-3">
        <img
          src={image}
          alt={name}
          className="h-32 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[40px]">
        {name}
      </h3>

      {/* Quantity */}
      <p className="text-xs text-gray-500 mt-1">{quantity}</p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-lg text-gray-900">₹{price}</p>

        <button className="bg-[#0C831F] text-white px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition">
          ADD
        </button>
      </div>
    </div>
  );
}

export default ProductCard;