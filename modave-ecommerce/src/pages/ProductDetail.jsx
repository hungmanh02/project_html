import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Heart, ShoppingBag, Truck, RefreshCw, Shield, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  useEffect(() => {
    const productData = getProductById(id)
    if (productData) {
      setProduct(productData)
      setSelectedColor(productData.colors?.[0] || '')
      setSelectedSize(productData.sizes?.[0] || '')
    } else {
      navigate('/products')
    }
  }, [id, navigate])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-800"></div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      cartQuantity: quantity
    }
    addToCart(cartItem)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const getColorStyle = (color) => {
    const colorMap = {
      'black': '#000000',
      'white': '#ffffff',
      'navy': '#1e3a8a',
      'gray': '#6b7280',
      'grey': '#6b7280',
      'brown': '#92400e',
      'red': '#dc2626',
      'blue': '#2563eb',
      'green': '#059669',
      'yellow': '#d97706',
      'pink': '#ec4899',
      'purple': '#7c3aed',
      'orange': '#ea580c',
      'cream': '#fef7ed',
      'ivory': '#fffbeb',
      'camel': '#d2691e',
      'burgundy': '#991b1b',
      'olive': '#65a30d',
      'charcoal': '#374151'
    }
    
    const normalizedColor = color.toLowerCase().replace(/[^a-z]/g, '')
    return colorMap[normalizedColor] || '#9ca3af'
  }

  const features = [
    { icon: Truck, text: 'Free shipping on orders over $100' },
    { icon: RefreshCw, text: 'Easy 30-day returns' },
    { icon: Shield, text: 'Secure payment' }
  ]

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Details' },
    { id: 'reviews', label: `Reviews (${product.reviews})` },
    { id: 'shipping', label: 'Shipping' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <button 
                onClick={() => navigate('/')}
                className="text-gray-500 hover:text-primary-800"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button 
                onClick={() => navigate('/products')}
                className="text-gray-500 hover:text-primary-800"
              >
                Products
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </>
              )}

              {/* Image indicators */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-primary-800' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isWishlisted
                      ? 'bg-red-50 text-red-500 hover:bg-red-100'
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-gray-900">
                ${product.price}
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Color: <span className="font-normal">{selectedColor}</span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          selectedColor === color
                            ? 'border-primary-800 ring-2 ring-primary-200'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: getColorStyle(color) }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Size: <span className="font-normal">{selectedSize}</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-4 text-sm font-medium border rounded-lg transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-primary-800 text-white border-primary-800'
                            : 'bg-white text-gray-900 border-gray-300 hover:border-primary-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-medium transition-all duration-200 ${
                  product.inStock
                    ? 'bg-primary-800 hover:bg-primary-900 text-white transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </span>
              </button>

              {product.inStock && (
                <button className="w-full btn-secondary">
                  Buy Now
                </button>
              )}
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-primary-600" />
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary-800 text-primary-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Category</dt>
                      <dd className="text-sm text-gray-900 capitalize">{product.category}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Subcategory</dt>
                      <dd className="text-sm text-gray-900 capitalize">{product.subcategory}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Available Sizes</dt>
                      <dd className="text-sm text-gray-900">{product.sizes?.join(', ')}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Available Colors</dt>
                      <dd className="text-sm text-gray-900">{product.colors?.join(', ')}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Machine wash cold with like colors</li>
                    <li>• Tumble dry low heat</li>
                    <li>• Iron on low temperature if needed</li>
                    <li>• Do not bleach</li>
                    <li>• Professional dry clean when needed</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="text-center py-8">
                  <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                  <p className="text-gray-600">Be the first to review this product</p>
                  <button className="btn-primary mt-4">Write a Review</button>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Standard Shipping</h4>
                      <p className="text-sm text-gray-600">5-7 business days • $5.99</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Express Shipping</h4>
                      <p className="text-sm text-gray-600">2-3 business days • $12.99</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Overnight Shipping</h4>
                      <p className="text-sm text-gray-600">Next business day • $24.99</p>
                    </div>
                    <div className="text-sm text-gray-600 italic">
                      * Free shipping on orders over $100
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Return Policy</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• 30-day return window</p>
                    <p>• Items must be unworn and with tags</p>
                    <p>• Free return shipping</p>
                    <p>• Refunds processed within 5-7 business days</p>
                    <p>• Store credit available for exchanges</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail