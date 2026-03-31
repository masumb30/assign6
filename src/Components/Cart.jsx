import { useState } from "react";

const Cart = ({addedProducts, setAddedProducts}) => {
  const [active, setActive] = useState("products");

  const total = addedProducts.reduce((sum, item) => sum + item.price, 0);
  const removeFromCart = (id)=> {
    const newProducts = addedProducts.filter(p=> p.id !== id);
    setAddedProducts(newProducts)
  }

  return (
    <div className="max-w-300 mx-auto mt-16 px-4">
      
      <p className="text-3xl font-bold mb-3">Your Cart:</p>

          <div className="mx-auto  rounded-xl p-6 bg-white shadow-sm">
            
            {addedProducts.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-12.5 bg-gray-50">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {addedProducts.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center bg-pink-100/30 rounded-md p-2"
                    >
                      <div className="flex items-center gap-1">
                        <img className="bg-white rounded-full p-2" src={`/${item.image}`} alt="" />
                        <div>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </div>

                      <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-6 border-t border-t-gray-200 pt-4 font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button onClick={()=>(setAddedProducts([]))} className="mt-5 w-full py-3 rounded-lg bg-linear-to-r from-purple-500 to-blue-500 text-white font-medium">
                  Proceed to Checkout
                </button>
              </>
            )}
        
      </div>
    </div>
  );
};

export default Cart;