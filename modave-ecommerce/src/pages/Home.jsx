import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, Shield, RefreshCw, Headphones } from 'lucide-react'
import { getFeaturedProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const featuredProducts = getFeaturedProducts()

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is safe'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help when you need it'
    }
  ]

  const collections = [
    {
      title: 'Women\'s Collection',
      subtitle: 'Elegant & Timeless',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop',
      link: '/products?category=women'
    },
    {
      title: 'Men\'s Collection',
      subtitle: 'Classic & Modern',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      link: '/products?category=men'
    },
    {
      title: 'Accessories',
      subtitle: 'Complete Your Look',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
      link: '/products?category=accessories'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Define Your
            <span className="block text-accent-400">Style</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Discover curated fashion that speaks to your unique personality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/products" className="btn-primary">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/products?sale=true" className="btn-secondary">
              Explore Sale
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-800 text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Shop by Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium text-gray-200 mb-1">{collection.subtitle}</p>
                  <h3 className="text-2xl font-display font-bold">{collection.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites that define contemporary style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Get exclusive access to new collections, sales, and styling tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button className="btn-accent px-8 py-4">Subscribe</button>
          </div>
          <p className="text-sm text-primary-300 mt-4">
            Join 50,000+ fashion enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home