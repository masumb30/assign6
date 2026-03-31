import React from 'react'

export const Counts = () => {
    return (
        <div className='bg-linear-to-r from-blue-600 to-purple-600 text-white mt-6 py-9'>
            <div className="max-w-300 flex justify-between mx-auto px-2 items-center">
                <div className="flex-1 text-center">
                    <p className='text-4xl font-bold'>50k+</p>
                    <p>Active Users</p>
                </div>

                <div className="px-2">
                    <p>|</p>
                </div>

                <div className="flex-1 text-center">
                    <p  className='text-4xl font-bold'>200+</p>
                    <p>Premium Users</p>
                </div>

                <div className="px-2">
                    <p>|</p>
                </div>

                <div className="flex-1 text-center">
                    <p className='text-4xl font-bold'>4.9</p>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    )
}
