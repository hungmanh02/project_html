import { Link } from 'react-router-dom'
import { Heart, Star, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
        />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              title="Add to Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full shadow-lg transition-colors duration-200 ${
                isWishlisted
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Sale badge */}
        {product.sale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            SALE
          </div>
        )}

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white px-2 py-1 text-xs font-semibold rounded">
            FEATURED
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-800 transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium">In Stock</span>
          ) : (
            <span className="text-xs text-red-600 font-medium">Out of Stock</span>
          )}
        </div>

        {/* Colors preview */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-3 flex items-center space-x-1">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{
                    backgroundColor: color.toLowerCase().includes('black') ? '#000000' :
                                   color.toLowerCase().includes('white') ? '#ffffff' :
                                   color.toLowerCase().includes('navy') ? '#1e3a8a' :
                                   color.toLowerCase().includes('gray') ? '#6b7280' :
                                   color.toLowerCase().includes('brown') ? '#92400e' :
                                   color.toLowerCase().includes('red') ? '#dc2626' :
                                   color.toLowerCase().includes('blue') ? '#2563eb' :
                                   '#9ca3af'
                  }}
                  title={color}
                ></div>
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-400">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default ProductCard