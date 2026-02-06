import React from "react";

function CartProvider({ cart, setCart, totalPrice }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          {cart.length === 0 && (
            <p className="text-gray-500 text-center">
              Your cart is empty
            </p>
          )}

          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-800">
                  ${product.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCart(
                      cart.map((c) =>
                        c.id === product.id && c.quantity > 1
                          ? { ...c, quantity: c.quantity - 1 }
                          : c
                      )
                    )
                  }
                  className="w-8 h-8 bg-gray-500 text-white rounded-full text-lg cursor-pointer"
                >
                  −
                </button>

                <span className="font-medium text-red-600">
                  {product.quantity}
                </span>

                <button
                  onClick={() =>
                    setCart(
                      cart.map((c) =>
                        c.id === product.id
                          ? { ...c, quantity: c.quantity + 1 }
                          : c
                      )
                    )
                  }
                  className="w-8 h-8 bg-gray-800 text-white rounded-full text-lg cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() =>
                  setCart(cart.filter((c) => c.id !== product.id))
                }
                className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold text-blue-700">
              Order Summary
            </h2>

            <div className="flex justify-between text-cyan-900">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-cyan-900">
              <span>Total</span>
              <span className="font-bold">
                ${totalPrice}
              </span>
            </div>

            <button className="w-full bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProvider;
