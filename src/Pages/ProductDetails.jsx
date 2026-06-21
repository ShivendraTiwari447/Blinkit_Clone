import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-green-600 font-semibold"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">

        <div className="flex flex-col md:flex-row gap-6">

          {/* IMAGE */}
          <img
            src={state.image}
            className="h-64 object-contain"
            alt={state.name}
          />

          {/* INFO */}
          <div>

            <h1 className="text-2xl font-bold">
              {state.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {state.quantity}
            </p>

            <p className="text-3xl font-bold mt-4">
              ₹{state.price}
            </p>

            <button className="mt-6 bg-[#0C831F] text-white px-6 py-2 rounded-xl">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;