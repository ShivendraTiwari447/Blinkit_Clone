function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-[#0C831F]">
              Blinkit
            </h2>

            <p className="text-gray-600 mt-4 text-sm leading-6">
              India's last minute delivery app.
              Get groceries, snacks, beverages,
              personal care products and much more
              delivered to your doorstep in minutes.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Useful Links
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#0C831F] cursor-pointer">
                Home
              </li>

              <li className="hover:text-[#0C831F] cursor-pointer">
                Categories
              </li>

              <li className="hover:text-[#0C831F] cursor-pointer">
                Best Sellers
              </li>

              <li className="hover:text-[#0C831F] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>Vegetables & Fruits</li>
              <li>Dairy & Milk</li>
              <li>Snacks & Munchies</li>
              <li>Cold Drinks</li>
              <li>Beauty Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>📍 Gurgaon, India</li>
              <li>📧 support@blinkit.com</li>
              <li>📞 +91 9876543210</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm text-center">
              © 2026 Blinkit Clone. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">

              <span className="cursor-pointer hover:scale-110 transition">
                📘
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                📸
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                🐦
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                💼
              </span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;