# MODAVE - Modern Fashion E-commerce

A sophisticated and modern e-commerce website template built with React, Vite, and Tailwind CSS. MODAVE offers a sleek shopping experience with a focus on fashion and contemporary design.

![MODAVE Preview](https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=600&fit=crop)

## ✨ Features

### 🏠 Homepage
- **Hero Section** with stunning visuals and call-to-action
- **Featured Products** showcase
- **Collections Gallery** with category navigation
- **Newsletter Signup** with modern styling
- **Feature Highlights** (shipping, returns, support)

### 🛍️ Product Catalog
- **Advanced Filtering** by category, price, size, color, and availability
- **Sorting Options** (price, rating, name, featured)
- **Grid/List View** toggle for different browsing preferences
- **Search Functionality** with real-time results
- **Responsive Product Cards** with hover effects

### 📱 Product Details
- **Image Gallery** with thumbnail navigation
- **Product Variants** (size, color selection)
- **Quantity Controls** with intuitive interface
- **Reviews and Ratings** display
- **Detailed Information** tabs (description, details, shipping)
- **Add to Cart** with size/color validation

### 🛒 Shopping Cart
- **Cart Management** (add, remove, update quantities)
- **Price Calculations** with tax and shipping
- **Free Shipping** progress indicator
- **Promo Code** application
- **Checkout Flow** preparation
- **Persistent Storage** using localStorage

### 🎨 Design System
- **Modern Typography** with Playfair Display and Inter fonts
- **Cohesive Color Palette** with primary and accent colors
- **Responsive Design** mobile-first approach
- **Smooth Animations** and micro-interactions
- **Accessibility** considerations throughout

## 🛠️ Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: localStorage for cart persistence

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/modave-ecommerce.git
   cd modave-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
modave-ecommerce/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Site footer
│   │   └── ProductCard.jsx     # Product display card
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── Products.jsx        # Product listing
│   │   ├── ProductDetail.jsx   # Product details
│   │   └── Cart.jsx            # Shopping cart
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management
│   ├── data/
│   │   └── products.js         # Sample product data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json
```

## 🎯 Key Features Explained

### Cart Management
The shopping cart uses React Context for state management, providing:
- Persistent storage across browser sessions
- Real-time updates throughout the app
- Quantity management and price calculations
- Free shipping progress tracking

### Product Filtering
Advanced filtering system includes:
- Category-based filtering
- Price range selection
- Size and color filtering
- In-stock availability filter
- Real-time search functionality

### Responsive Design
Mobile-first approach ensures:
- Optimal viewing on all devices
- Touch-friendly interface elements
- Collapsible navigation for mobile
- Responsive image galleries

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

### Typography
Font families can be updated in the configuration and CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

### Product Data
Update the sample products in `src/data/products.js` with your actual product catalog.

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_API_URL=your_api_endpoint
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### API Integration
The template is ready for backend integration. Replace the sample data in `src/data/products.js` with API calls to your product database.

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Traditional Hosting
Build the project and upload the `dist` folder to your web server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Design inspiration from modern fashion e-commerce sites
- Product images from Unsplash
- Icons by Lucide React
- Built with React and Vite

## 📞 Support

For support, email support@modave.com or join our Slack channel.

---

**MODAVE** - Define Your Style ✨
