const ProductCard = ({ product }) => {
  const tagStyles = {
    popular: "bg-purple-100 text-purple-600",
    "best-seller": "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
  };

  return (
    <div className="p-2 rounded-2xl  bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Tag */}
      <div className="flex justify-end">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            tagStyles[product.tagType]
          }`}
        >
          {product.tag}
        </span>
      </div>

      {/* Icon + Title */}
      <div className="mt-4 flex flex-col items-start gap-3">
        <img
          src={`/${product.image}`}
          alt={product.name}
          className="w-10 h-10 object-contain"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">
        {product.description}
      </p>

      {/* Price */}
      <div className="mt-3 text-xl font-bold">
        ${product.price}
        <span className="text-sm font-normal text-gray-500">
          {" "}
          / {product.period}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-1 text-sm text-gray-700">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="mt-5 w-full py-2 rounded-lg font-medium text-white bg-linear-to-r from-purple-500 to-blue-500 hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;