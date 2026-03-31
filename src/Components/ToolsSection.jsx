import React, { useState } from 'react'
import { Products } from './Products'
import { Cart } from './Cart'

export const ToolsSection = () => {
    const [active, setActive] = useState('products')
    return (
        <div className='max-w-300 mx-auto text-black mt-9'>
            <h2 className='text-3xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection <br />of premium digital products designed to boost your productivity and creativity.</p>
            <div className="flex justify-center mt-5">
                <button
                onClick={()=>setActive('products')}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${active === 'products'
                        ? 'bg-linear-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white text-black'
                        }`}
                >
                    Products
                </button>

                <button
                onClick={()=>setActive('cart')}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${active === 'cart'
                        ? 'bg-linear-to-r from-purple-500 to-blue-500 text-white'
                        : ' text-black'
                        }`}
                >
                    Cart
                </button>
            </div>

            {
                active === 'products' && <Products/>
            }
            {
                active === 'cart' && <Cart/>
            }
        </div>
    )
}
