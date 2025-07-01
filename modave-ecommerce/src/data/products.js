export const products = [
  {
    id: 1,
    name: "Elegant Silk Blouse",
    price: 129.99,
    category: "women",
    subcategory: "tops",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=500&h=600&fit=crop"
    ],
    description: "Luxurious silk blouse perfect for both office and evening wear. Features a relaxed fit with elegant draping.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 89.99,
    category: "unisex",
    subcategory: "outerwear",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&h=600&fit=crop"
    ],
    description: "Timeless denim jacket with a modern cut. Made from premium cotton denim with subtle distressing.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Classic Blue", "Black", "Light Wash"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Flowing Maxi Dress",
    price: 159.99,
    category: "women",
    subcategory: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&h=600&fit=crop"
    ],
    description: "Ethereal maxi dress with delicate floral print. Perfect for summer occasions and beach getaways.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Solid Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 4,
    name: "Tailored Blazer",
    price: 199.99,
    category: "women",
    subcategory: "outerwear",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    ],
    description: "Sharp, professional blazer with a modern silhouette. Crafted from premium wool blend fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal", "Camel"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: "Casual Linen Pants",
    price: 79.99,
    category: "women",
    subcategory: "bottoms",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    ],
    description: "Comfortable linen pants perfect for casual summer days. Features a relaxed fit and breathable fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "White", "Navy", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 67
  },
  {
    id: 6,
    name: "Luxury Cashmere Sweater",
    price: 249.99,
    category: "women",
    subcategory: "knitwear",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=500&h=600&fit=crop"
    ],
    description: "Ultra-soft cashmere sweater in a classic crew neck style. Perfect for layering or wearing alone.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Grey", "Black", "Dusty Pink"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 7,
    name: "Designer Handbag",
    price: 299.99,
    category: "accessories",
    subcategory: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop"
    ],
    description: "Sophisticated leather handbag with gold hardware. Features multiple compartments and adjustable strap.",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 8,
    name: "Statement Earrings",
    price: 49.99,
    category: "accessories",
    subcategory: "jewelry",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop"
    ],
    description: "Bold statement earrings featuring geometric design. Perfect for adding glamour to any outfit.",
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Rose Gold"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 78
  }
]

export const categories = [
  { id: 'women', name: 'Women', subcategories: ['tops', 'bottoms', 'dresses', 'outerwear', 'knitwear'] },
  { id: 'men', name: 'Men', subcategories: ['shirts', 'pants', 'outerwear', 'knitwear'] },
  { id: 'accessories', name: 'Accessories', subcategories: ['bags', 'jewelry', 'shoes', 'scarves'] },
  { id: 'unisex', name: 'Unisex', subcategories: ['outerwear', 'accessories'] }
]

export const getFeaturedProducts = () => products.filter(product => product.featured)
export const getProductsByCategory = (category) => products.filter(product => product.category === category)
export const getProductById = (id) => products.find(product => product.id === parseInt(id))