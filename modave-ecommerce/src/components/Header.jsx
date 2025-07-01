import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { getCartItemsCount } = useCart()
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Women', href: '/products?category=women' },
    { name: 'Men', href: '/products?category=men' },
    { name: 'Accessories', href: '/products?category=accessories' },
    { name: 'Sale', href: '/products?sale=true' },
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href.split('?')[0])
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-gradient">
                MODAVE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-800 border-b-2 border-primary-800'
                    : 'text-gray-700 hover:text-primary-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* User */}
            <button className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200">
              <Heart className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-800'
                      : 'text-gray-700 hover:text-primary-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header