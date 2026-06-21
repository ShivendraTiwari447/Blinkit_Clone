import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      name: "Amul Gold Milk",
      quantity: "500 ml",
      price: 34,
      count: 2,
    },
    {
      name: "Lay's Chips",
      quantity: "52 g",
      price: 20,
      count: 1,
    },
  ]);

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].count += 1;
    setCartItems(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if (updated[index].count > 1) {
      updated[index].count -= 1;
      setCartItems(updated);
    }
  };

  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-green-600">
          Your Cart 🛒
        </h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add some groceries to continue shopping
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {/* Items */}
            <div className="md:col-span-2 space-y-4">

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
                >
                  {/* Product Info */}
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      {item.quantity}
                    </p>
                    <p className="font-bold mt-1">₹{item.price}</p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQty(index)}
                      className="px-3 py-1 bg-gray-200 rounded-lg"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.count}
                    </span>

                    <button
                      onClick={() => increaseQty(index)}
                      className="px-3 py-1 bg-gray-200 rounded-lg"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 font-semibold ml-3"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Summary */}
            <div className="bg-white p-5 rounded-2xl shadow h-fit">

              <h2 className="text-xl font-bold mb-4">
                Bill Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Delivery</span>
                <span className="text-green-600">FREE</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full mt-5 bg-[#0C831F] text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition">
                Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;