import React from "react";
import SlickSlider from "react-slick";

function Hero() {
  const images = [
    "https://picsum.photos/id/1011/1200/500",
    "https://picsum.photos/id/1025/1200/500",
    "https://picsum.photos/id/1040/1200/500",
  ];

  const Slider = SlickSlider?.default || SlickSlider;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-4 gap-5">

          {/* Left Side Offers */}
          <div className="lg:col-span-1 flex flex-col gap-5">

            <div className="bg-green-600 text-white rounded-3xl p-6 h-[190px] flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl font-bold">
                10 Minute Delivery ⚡
              </h2>

              <p className="mt-3">
                Fresh groceries delivered to your doorstep.
              </p>

              <button className="mt-5 bg-white text-green-600 font-semibold px-5 py-2 rounded-xl w-fit">
                Shop Now
              </button>
            </div>

            <div className="bg-yellow-400 rounded-3xl p-6 h-[190px] flex flex-col justify-center shadow-lg">
              <h2 className="text-2xl font-bold">
                Up To 50% OFF 🎉
              </h2>

              <p className="mt-3">
                Fruits, Vegetables & Daily Essentials
              </p>

              <button className="mt-5 bg-black text-white px-5 py-2 rounded-xl w-fit">
                Explore
              </button>
            </div>

          </div>

          {/* Hero Slider */}
          <div className="lg:col-span-3 overflow-hidden rounded-3xl shadow-lg">

            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="relative">

                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[300px] md:h-[380px] lg:h-[400px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center">

                    <div className="pl-8 md:pl-12 text-white max-w-xl">

                      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Groceries Delivered
                        <br />
                        In Minutes
                      </h1>

                      <p className="mt-4 text-lg">
                        Fresh fruits, vegetables, dairy products,
                        snacks and essentials delivered instantly.
                      </p>

                      <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold">
                        Start Shopping
                      </button>

                    </div>

                  </div>

                </div>
              ))}
            </Slider>

          </div>

        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <div className="text-4xl">⚡</div>
            <h3 className="font-semibold mt-2">
              Fast Delivery
            </h3>
            <p className="text-gray-500 text-sm">
              Delivered in minutes
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <div className="text-4xl">🥬</div>
            <h3 className="font-semibold mt-2">
              Fresh Products
            </h3>
            <p className="text-gray-500 text-sm">
              Direct from farms
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <div className="text-4xl">💰</div>
            <h3 className="font-semibold mt-2">
              Best Prices
            </h3>
            <p className="text-gray-500 text-sm">
              Amazing daily deals
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <div className="text-4xl">🛒</div>
            <h3 className="font-semibold mt-2">
              Easy Shopping
            </h3>
            <p className="text-gray-500 text-sm">
              One Click Ordering
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;