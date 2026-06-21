import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductCard({
  image,
  name,
  quantity,
  price,
  deliveryTime = "10 mins",
  tag = "Fresh",
}) {
  const navigate = useNavigate();

  const { addToCart, decreaseQty, cartItems } = useCart();

  const productData = { image, name, quantity, price };

  const item = cartItems.find((i) => i.name === name);
  const count = item ? item.qty : 0;

  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* TAG + DELIVERY */}
      <div className="flex justify-between items-center">
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
          {tag}
        </span>

        <span className="text-xs text-gray-500">
          ⚡ {deliveryTime}
        </span>
      </div>

      {/* IMAGE → DETAILS PAGE */}
      <div
        className="flex justify-center my-3 cursor-pointer"
        onClick={() =>
          navigate("/product-details", { state: productData })
        }
      >
        <img
          src={image}
          alt={name}
          className="h-32 object-contain hover:scale-105 transition"
        />
      </div>

      {/* NAME */}
      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[40px]">
        {name}
      </h3>

      {/* QUANTITY */}
      <p className="text-xs text-gray-500 mt-1">{quantity}</p>

      {/* PRICE + BUTTON */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-lg text-gray-900">
          ₹{price}
        </p>

        {count === 0 ? (
          <button
            onClick={() =>
              addToCart({ image, name, quantity, price })
            }
            className="bg-[#0C831F] text-white px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-1">

            <button
              onClick={() => decreaseQty({ name })}
              className="text-lg font-bold"
            >
              -
            </button>

            <span className="font-semibold">{count}</span>

            <button
              onClick={() =>
                addToCart({ image, name, quantity, price })
              }
              className="text-lg font-bold"
            >
              +
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;