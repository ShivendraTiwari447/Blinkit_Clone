function ProductCard({
  image,
  name,
  quantity,
  price,
  deliveryTime = "10 mins",
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-3
      shadow-sm
      border
      border-gray-100
      hover:shadow-lg
      transition-all
      duration-300
      "
    >
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="h-36 object-contain"
        />
      </div>

      {/* Delivery Badge */}
      <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-xs font-medium mt-2">
        ⚡ {deliveryTime}
      </div>

      {/* Product Name */}
      <h3 className="font-semibold mt-3 text-gray-800 line-clamp-2 min-h-[48px]">
        {name}
      </h3>

      {/* Quantity */}
      <p className="text-sm text-gray-500 mt-1">
        {quantity}
      </p>

      {/* Price + Add */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-lg">
          ₹{price}
        </p>

        <button
          className="
          border-2
          border-[#0C831F]
          text-[#0C831F]
          px-5
          py-1.5
          rounded-lg
          font-semibold
          hover:bg-[#0C831F]
          hover:text-white
          transition
          "
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default ProductCard;