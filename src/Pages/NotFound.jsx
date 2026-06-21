function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="text-center">

        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-green-600">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-[#0C831F] text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Go to Home
        </button>

      </div>

    </div>
  );
}

export default NotFound;