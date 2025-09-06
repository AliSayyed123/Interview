import React, { useState } from 'react';
import { Heart, Star, Shield, RotateCcw, Award, Truck, ChevronLeft, ChevronRight, Menu, ChevronDown, ChevronRight as ChevronSE } from 'lucide-react';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productImages = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center'
  ];

  const reviews = [
    {
      name: 'Anu',
      date: '15/09/24',
      rating: 5,
      text: 'Such a gorgeous necklace. Got many compliments as well. Absolutely loved it',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=100&h=100&fit=crop&crop=center'
      ]
    },
    {
      name: 'Anu',
      date: '14/09/24',
      rating: 5,
      text: 'Looks beautiful 😍❤️❤️❤️ Go for it girls 😍😍 the quality is good .',
      images: ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=100&h=100&fit=crop&crop=center']
    }
  ];

  const similarProducts = [
    { id: 1, image: productImages[0], bestSeller: true },
    { id: 2, image: productImages[1], bestSeller: true },
    { id: 3, image: productImages[2], bestSeller: true },
    { id: 4, image: productImages[0], bestSeller: true }
  ];

  const subcategories = [
    'Add Account',
    'Gold Jewellery',
    'Silver Jewellery',
    'Trending Collection',
    'Gifts',
    'Shop by Occasion',
    'Register/Login'
  ];

  const prevImage = () => setSelectedImage((i) => (i - 1 + productImages.length) % productImages.length);
  const nextImage = () => setSelectedImage((i) => (i + 1) % productImages.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top promo */}
      <div className="text-white text-center py-2 text-sm" style={{ backgroundColor: '#CA8787' }}>
        20% off on all items only Limited Time Deal Offer ending in 03:54:15
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <div className="text-2xl font-bold text-gray-800">LOGO</div>
            <div className="hidden md:flex space-x-6 text-gray-600">
              <span className="cursor-pointer hover:text-gray-900 flex items-center gap-1">
                Collections <ChevronDown className="w-4 h-4" />
              </span>
              <span className="cursor-pointer hover:text-gray-900 flex items-center gap-1">
                Categories <ChevronDown className="w-4 h-4" />
              </span>
              <span className="cursor-pointer hover:text-gray-900">Hot Picks</span>
              <span className="cursor-pointer hover:text-gray-900">Gifts</span>
              <span className="cursor-pointer hover:text-gray-900">Shop All</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="text-white px-6 py-2 rounded-md hover:opacity-90" style={{ backgroundColor: '#CA8787' }}>
              LOGIN
            </button>
            <button className="border text-white px-6 py-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500" style={{ borderColor: '#CA8787', color: '#CA8787' }}>
              REGISTER
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 h-full w-4/5 bg-[#CA8787] text-white z-50 p-6 overflow-auto">
            <button onClick={() => setMobileMenuOpen(false)} className="mb-4">
              Close
            </button>
            <ul className="space-y-4">
              {subcategories.map((sub, idx) => (
                <li key={idx} className="flex justify-between items-center cursor-pointer hover:opacity-90">
                  {sub} <ChevronSE className="w-4 h-4" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="text-sm text-gray-500">Home › Jewellery › Gifts › Necklace › Chains › Shining Deal</div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img src={productImages[selectedImage]} alt="Product" className="w-full h-full object-cover" />
              <button type="button" onClick={prevImage} aria-label="Previous image" className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-sm">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={nextImage} aria-label="Next image" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex space-x-4">
              {productImages.map((img, index) => (
                <button key={index} type="button" onClick={() => setSelectedImage(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-2' : 'border-gray-200'}`} style={selectedImage === index ? { borderColor: '#CA8787' } : {}}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Gold-Plated Pearls Necklace</h1>
              <p className="text-lg text-gray-600">Made with 925 Silver</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">4.1</span>
                <span className="text-gray-600">(23)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">₹ 1,600</span>
              <span className="text-lg text-gray-500 line-through">₹ 2,000</span>
              <span className="text-green-600 font-semibold">(20% off)</span>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Easy 30 Day Return</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">925 Silver Plating</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">6- Month Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Premium Gold</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 border text-white py-3 rounded-md hover:bg-opacity-10 hover:bg-gray-500 font-semibold" style={{ borderColor: '#CA8787', color: '#CA8787' }}>
                ADD TO CART
              </button>
              <button className="flex-1 text-white py-3 rounded-md hover:opacity-90 font-semibold" style={{ backgroundColor: '#CA8787' }}>
                BUY NOW
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Estimated Delivery Time</h3>
              <div className="flex space-x-4">
                <input type="text" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-2" style={{ '--focus-border-color': '#CA8787' }} onFocus={(e) => e.target.style.borderColor = '#CA8787'} onBlur={(e) => e.target.style.borderColor = '#d1d5db'} />
                <button className="hover:opacity-80 font-semibold" style={{ color: '#CA8787' }}>Check</button>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Product Description</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">Material:</span>
                  <span className="text-gray-600">925 Sterling Silver</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">Plating:</span>
                  <span className="text-gray-600">18K Gold</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">Weight:</span>
                  <span className="text-gray-600">10grams</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-20">Stone Type:</span>
                  <span className="text-gray-600">Premium Jerkin</span>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Get it by</span>
              <span className="font-semibold" style={{ color: '#CA8787' }}>25 Sept</span>
            </div>
          </div>
        </div>

        {/* Customer Ratings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Ratings</h2>
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#CA8787' }}>
                    <span className="font-semibold">{review.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-semibold text-gray-900">{review.name}</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{review.text}</p>
                    <div className="flex space-x-3">
                      {review.images.map((img, imgIndex) => (
                        <img key={imgIndex} src={img} alt="" className="w-20 h-20 rounded-lg object-cover bg-gray-200" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16 bg-[#EBEBEB] py-8 px-6 rounded">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Similar to this</h2>
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2">
            {similarProducts.map((product) => (
              <div key={product.id} className="min-w-[240px] bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="aspect-square bg-gray-100">
                  <img src={product.image} alt={`sim-${product.id}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Rose Gold Earrings with alloy</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-bold">₹1999</span>
                    <span className="text-sm text-gray-500 line-through">₹2999</span>
                  </div>
                  <button className="mt-auto py-2 rounded text-white font-semibold" style={{ backgroundColor: '#CA8787' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top picks for you */}
        <div className="mt-12 bg-[#EBEBEB] py-8 px-6 rounded">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top picks for you</h2>
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2">
            {similarProducts.map((product) => (
              <div key={product.id} className="min-w-[240px] bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="aspect-square bg-gray-100">
                  <img src={product.image} alt={`top-${product.id}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Rose Gold Earrings with alloy</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-bold">₹1999</span>
                    <span className="text-sm text-gray-500 line-through">₹2999</span>
                  </div>
                  <button className="mt-auto py-2 rounded text-white font-semibold" style={{ backgroundColor: '#CA8787' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full" style={{ backgroundColor: '#D9D9D9' }}>
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-gray-800">
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Follow Us</h4>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          {/* Pink bottom line with rights reserved */}
          <div className="w-full" style={{ backgroundColor: '#CA8787' }}>
            <div className="max-w-7xl mx-auto px-6 py-2 text-center text-white text-sm">
              © 2024 Elegant Jewels. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductPage;
