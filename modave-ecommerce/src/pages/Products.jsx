import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, Grid, List, ChevronDown, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    size: '',
    color: '',
    inStock: false
  })

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: '$200 - $300', value: '200-300' },
    { label: 'Over $300', value: '300+' }
  ]

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const allColors = ['Black', 'White', 'Navy', 'Gray', 'Brown', 'Red', 'Blue']

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest', value: 'newest' },
    { label: 'Rating', value: 'rating' },
    { label: 'Name A-Z', value: 'name-asc' }
  ]

  useEffect(() => {
    let filtered = [...products]

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (max) {
        filtered = filtered.filter(product => product.price >= min && product.price <= max)
      } else {
        filtered = filtered.filter(product => product.price >= min)
      }
    }

    if (filters.size) {
      filtered = filtered.filter(product => 
        product.sizes && product.sizes.includes(filters.size)
      )
    }

    if (filters.color) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.some(color => 
          color.toLowerCase().includes(filters.color.toLowerCase())
        )
      )
    }

    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock)
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }, [filters, sortBy])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      size: '',
      color: '',
      inStock: false
    })
    setSearchParams({})
  }

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => 
      value !== '' && value !== false
    ).length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            {filters.category ? 
              `${categories.find(cat => cat.id === filters.category)?.name || 'Products'}` : 
              'All Products'
            }
          </h1>
          <p className="text-gray-600">
            Discover our curated collection of premium fashion
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={filters.category === ''}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={filters.category === category.id}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value=""
                      checked={filters.priceRange === ''}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">All Prices</span>
                  </label>
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={filters.priceRange === range.value}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleFilterChange('size', filters.size === size ? '' : size)}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        filters.size === size
                          ? 'bg-primary-800 text-white border-primary-800'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and View Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-700">
                    {filteredProducts.length} products
                  </span>
                  {getActiveFiltersCount() > 0 && (
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {getActiveFiltersCount()} filter{getActiveFiltersCount() > 1 ? 's' : ''} applied
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-8"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-800 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-800 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products