import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount
  } = useCart()

  const shipping = 9.99
  const tax = getCartTotal() * 0.08
  const total = getCartTotal() + shipping + tax

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-12">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Shopping Cart ({getCartItemsCount()} items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          <Link 
                            to={`/product/${item.id}`}
                            className="hover:text-primary-800 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          {item.selectedColor && (
                            <span>Color: {item.selectedColor}</span>
                          )}
                          {item.selectedSize && (
                            <span>Size: {item.selectedSize}</span>
                          )}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          ${item.price}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2"
                        title="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
              >
                Clear entire cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <Tag className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {getCartTotal() > 100 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(getCartTotal() > 100 ? getCartTotal() + tax : total).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {getCartTotal() < 100 && (
                <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-accent-800">
                    Add ${(100 - getCartTotal()).toFixed(2)} more for free shipping!
                  </p>
                  <div className="w-full bg-accent-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-accent-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((getCartTotal() / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <button className="w-full btn-primary text-lg py-4 mb-4">
                Proceed to Checkout
              </button>

              {/* Payment Methods */}
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-3">We accept</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-8 h-5 bg-gray-200 rounded border flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">VISA</span>
                  </div>
                  <div className="w-8 h-5 bg-gray-200 rounded border flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">MC</span>
                  </div>
                  <div className="w-8 h-5 bg-gray-200 rounded border flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">AMEX</span>
                  </div>
                  <div className="w-8 h-5 bg-gray-200 rounded border flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">PP</span>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Your payment information is secure and encrypted
                </p>
              </div>

              {/* Customer Support */}
              <div className="mt-6 text-center border-t pt-6">
                <p className="text-sm font-medium text-gray-900 mb-2">Need help?</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">📞 1-800-MODAVE-1</p>
                  <p className="text-xs text-gray-600">✉️ support@modave.com</p>
                  <p className="text-xs text-gray-600">💬 Live chat available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            You might also like
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-600 text-center py-8">
              Continue shopping to see personalized recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart