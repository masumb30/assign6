import { TiTick } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";

const ProductCard = ({ product, addedProducts, setAddedProducts }) => {
    const tagStyles = {
        popular: "bg-purple-100 text-purple-600",
        "best-seller": "bg-blue-100 text-blue-600",
        new: "bg-green-100 text-green-600",
    };

    const handleAddProduct = () => {
        setAddedProducts([...addedProducts, product]);
        toast('Added to cart successfully')
    }

    return (
        <div className="p-2 rounded-2xl  bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<ToastContainer/>
            {/* Tag */}
            <div className="flex justify-end">
                <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tagType]
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
                        <TiTick className="text-green-500" />

                        {feature}
                    </li>
                ))}
            </ul>

            <button
                onClick={handleAddProduct}
                disabled={addedProducts.some(p => p.id === product.id)}
                className={`mt-5 w-full h-10 rounded-lg font-medium text-white transition-all duration-500 ease-in-out flex items-center justify-center gap-2
    ${addedProducts.some(p => p.id === product.id)
                        ? "bg-gray-400 cursor-not-allowed shadow-none"
                        : "bg-linear-to-r from-purple-500 to-blue-500 hover:opacity-90 shadow-md"
                    }`}
            >
                <span className="flex items-center gap-2 transition-opacity duration-300">
                    {addedProducts.some(p => p.id === product.id) ? (
                        <>
                            <TiTick className="text-xl animate-in zoom-in duration-300" />
                            <span>Added to Cart</span>
                        </>
                    ) : (
                        "Buy Now"
                    )}
                </span>
            </button>
        </div>
    );
};

export default ProductCard;