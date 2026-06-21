import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="p-8 md:p-12">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                ⚡ Delivery in 10 Minutes
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                Groceries
                <span className="text-green-600"> Delivered</span>
                <br />
                At Your Doorstep
              </h1>

              <p className="text-gray-600 mt-5 text-lg">
                Fresh fruits, vegetables, dairy products,
                snacks and daily essentials delivered
                in just minutes.
              </p>

              {/* Search */}
              <div className="mt-8 flex bg-gray-100 rounded-xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-4 py-4 bg-transparent outline-none"
                />

                <button className="bg-green-600 text-white px-8">
                  Search
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Shop Now
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-xl">
                  Explore Deals
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-10">
                <div>
                  <h3 className="text-2xl font-bold">5000+</h3>
                  <p className="text-gray-500">Products</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">10 Min</h3>
                  <p className="text-gray-500">Delivery</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">50K+</h3>
                  <p className="text-gray-500">Customers</p>
                </div>
              </div>

            </div>

            {/* Right Image */}
            <div className="flex justify-center p-8">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                alt="Groceries"
                className="w-full max-w-lg rounded-3xl"
              />
            </div>

          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">🥬</div>
            <h3 className="font-semibold mt-2">
              Fresh Vegetables
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">🍎</div>
            <h3 className="font-semibold mt-2">
              Fruits
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">🥛</div>
            <h3 className="font-semibold mt-2">
              Dairy Products
            </h3>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">
            <div className="text-4xl">🍪</div>
            <h3 className="font-semibold mt-2">
              Snacks
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;