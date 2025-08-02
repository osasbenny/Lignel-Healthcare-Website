import { useState } from 'react'
import { Search, Filter, ShoppingCart, Star, Heart, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// New Image Imports
import lignelImmunityBooster from '../assets/images/supplements/Lignel_Immunity_Booster.jpg'
import zinc100mg from '../assets/images/supplements/Zinc_100mg.jpg'
import zinc50mg from '../assets/images/supplements/Zinc_50mg.jpg'
import immunityBooster from '../assets/images/supplements/Immunity_Booster.jpg'
import eveningPrimrose1 from '../assets/images/supplements/Evening_Primrose(1).jpg'
import lignelBeauty from '../assets/images/supplements/Lignel_Beauty.jpg'
import img20250723WA0012 from '../assets/images/supplements/IMG-20250723-WA0012.jpg'
import img20250723WA0011 from '../assets/images/supplements/IMG-20250723-WA0011.jpg'
import img20250723WA0018 from '../assets/images/supplements/IMG-20250723-WA0018.jpg'
import eveningPrimrose2 from '../assets/images/supplements/Evening_Primrose(2).jpg'
import img20250723WA0005 from '../assets/images/supplements/IMG-20250723-WA0005.jpg'
import img20250723WA0004 from '../assets/images/supplements/IMG-20250723-WA0004.jpg'
import img20250723WA0003 from '../assets/images/supplements/IMG-20250723-WA0003.jpg'
import img20250723WA0002 from '../assets/images/supplements/IMG-20250723-WA0002.jpg'
import vd1k1 from '../assets/images/supplements/1(1)_VD_1K.JPG'
import vd1k4 from '../assets/images/supplements/1(4)_VD_1K.JPG'
import bcg1 from '../assets/images/supplements/1(1)_BCG.JPG'
import bcg4 from '../assets/images/supplements/1(4)_BCG.JPG'

// Existing Medical Equipment Imports (keep these)
import medicalEquipment1 from '../assets/images/medical_equipment/medical_equipment_1.jpg'
import medicalEquipment2 from '../assets/images/medical_equipment/medical_equipment_2.jpg'
import medicalEquipment3 from '../assets/images/medical_equipment/medical_equipment_3.jpg'
import medicalEquipment5 from '../assets/images/medical_equipment/medical_equipment_5.jpg'
import nebulizerSystem from '../assets/images/medical_equipment/nebulizer_system.jpg'
import medicalEquipment7 from '../assets/images/medical_equipment/medical_equipment_7.jpg'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Products', count: 18 },
    { id: 'supplements', name: 'Nutritional Supplements', count: 12 },
    { id: 'medical-devices', name: 'Medical Devices', count: 4 },
    { id: 'diagnostics', name: 'Diagnostic Equipment', count: 2 }
  ]

  const products = [
    // Nutritional Supplements - Updated with new images
    {
      id: 1,
      name: "Lignel Healthcare Immunity Booster Effervescent Tablets",
      category: "supplements",
      image: lignelImmunityBooster,
      description: "Support your body’s natural defenses with Lignel Healthcare Immunity Booster Effervescent, a powerful blend of essential nutrients designed to strengthen your immune system and enhance resilience. Each tablet dissolves quickly in water to deliver a refreshing, high-potency formula with Vitamin C (1000 mg), Vitamin D3 (1000 IU), Selenium (40 mcg), and Zinc (15 mg).",
      features: ["Supports optimal immune function", "Helps protect cells against oxidative stress", "Promotes faster recovery during seasonal challenges", "Convenient, fast-absorbing effervescent format"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "New Arrival"
    },
    {
      id: 2,
      name: "Lignel Healthcare Vitamin D3 Softgels 5000 IU",
      category: "supplements",
      image: zinc100mg,
      description: "Boost your Vitamin D levels with Lignel Healthcare Vitamin D3 5000 IU Softgels, an ultra-potent dose designed for individuals with significant deficiency or increased requirements. This essential nutrient supports strong bones, healthy immune function, and overall vitality.",
      features: ["High-strength formula for rapid replenishment", "Supports bone density and calcium absorption", "Enhances immune system performance", "Easy-to-swallow softgel for superior absorption"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 3,
      name: "Lignel Healthcare Vitamin D3 Softgels 1000 IU",
      category: "supplements",
      image: zinc50mg,
      description: "Maintain optimal Vitamin D levels daily with Lignel Healthcare Vitamin D3 1000 IU Softgels. This gentle, effective dosage is ideal for routine supplementation, supporting bone health, immune defenses, and general well-being.",
      features: ["Daily maintenance dose for overall health", "Contributes to bone strength and muscle function", "Supports immune system activity", "Highly bioavailable softgel formulation"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Popular"
    },
    {
      id: 4,
      name: "Lignel Healthcare Zinc Tablets 100 mg",
      category: "supplements",
      image: immunityBooster,
      description: "Empower your immune system and cellular health with Lignel Healthcare Zinc 100 mg Tablets. Zinc is a critical mineral for immune defense, wound healing, and DNA synthesis. This high-strength formulation is tailored for short-term use under medical supervision.",
      features: ["Potent zinc dose for targeted support", "Enhances immune function and recovery", "Supports skin repair and antioxidant defense", "For use as directed by a healthcare provider"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Best Seller"
    },
    {
      id: 5,
      name: "Lignel Healthcare Zinc Tablets 50 mg",
      category: "supplements",
      image: eveningPrimrose1,
      description: "Promote everyday immune resilience with Lignel Healthcare Zinc 50 mg Tablets, an essential mineral supplement that contributes to cell repair, immune defense, and overall vitality. Perfect for regular supplementation to help keep your body protected.",
      features: ["Supports daily immune system needs", "Aids in wound healing and enzyme activity", "Contributes to healthy skin and cellular function", "Convenient once-daily tablet."],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 6,
      name: "Lignel Healthcare Evening Primrose Oil 1000 mg Capsules",
      category: "supplements",
      image: lignelBeauty,
      description: "Support hormonal balance and skin health with Lignel Healthcare Evening Primrose Oil 1000 mg Capsules. Naturally rich in gamma-linolenic acid (GLA), this essential fatty acid helps regulate inflammation, support women’s hormonal wellness, and promote radiant skin.",
      features: ["Supports hormonal balance during PMS and menopause", "Promotes skin hydration and elasticity", "Contributes to joint comfort and inflammatory balance", "Cold-pressed oil for maximum potency"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Premium"
    },
    {
      id: 7,
      name: "Lignel Healthcare Evening Primrose Oil 1500 mg Capsules",
      category: "supplements",
      image: img20250723WA0012,
      description: "For enhanced support, try Lignel Healthcare Evening Primrose Oil 1500 mg Capsules. This high-strength formulation delivers a greater concentration of GLA, providing additional benefits for skin vitality, menstrual comfort, and overall wellness.",
      features: ["High-potency GLA for superior hormonal support", "Nourishes skin from within for a healthy glow", "Reduces discomfort associated with PMS and menopause", "Convenient once-daily dosage"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 8,
      name: "Lignel Healthcare GlutaGlow+ Gummies (Glutathione 5000 mg + Hyaluronic Acid 100 mg + Vitamin E + Collagen)",
      category: "supplements",
      image: img20250723WA0011,
      description: "Achieve a radiant complexion from the inside out with Lignel Healthcare GlutaGlow+ High Strength Gummies. This advanced beauty formula combines Glutathione (5000 mg), Hyaluronic Acid (100 mg), Vitamin E, and Collagen to brighten skin, reduce oxidative stress, and support youthful elasticity.",
      features: ["Promotes skin brightening and even tone", "Enhances hydration and reduces signs of aging", "Powerful antioxidant support with Glutathione &amp; Vitamin E", "Delicious gummy format for easy daily use"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "New"
    },
    {
      id: 9,
      name: "Lignel Healthcare BioColla Glow Gummies (Biotin + Collagen + Vitamin E 15000 mcg)",
      category: "supplements",
      image: img20250723WA0018,
      description: "Boost your beauty routine with Lignel Healthcare BioColla Glow Gummies, a high-strength combination of Biotin, Collagen, and Vitamin E. This triple-action formula supports healthy hair, radiant skin, and strong nails while providing antioxidant protection.",
      features: ["Encourages hair growth and strength", "Enhances skin elasticity and youthful glow", "Supports nail health and repair", "Tasty gummy formula for effortless daily supplementation"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 10,
      name: "Lignel Healthcare BioColla Luxe Oil (Biotin + Collagen 20000 mcg, Topical Use)",
      category: "supplements",
      image: eveningPrimrose2,
      description: "Experience targeted beauty care with Lignel Healthcare BioColla Luxe Oil, a high-strength topical formula enriched with Biotin (20,000 mcg) and Collagen. Designed to nourish hair and skin directly, this oil helps improve texture, strength, and overall vitality.",
      features: ["Direct nourishment for hair follicles and skin cells", "Supports thicker, stronger, and shinier hair", "Improves skin hydration and smoothness", "Lightweight, non-greasy topical oil for easy application"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 11,
      name: "Lignel Healthcare GlutaGlow+ Gummies (Glutathione 5000 mg + Hyaluronic Acid 100 mg + Vitamin E + Collagen)",
      category: "supplements",
      image: img20250723WA0005,
      description: "Achieve a radiant complexion from the inside out with Lignel Healthcare GlutaGlow+ High Strength Gummies. This advanced beauty formula combines Glutathione (5000 mg), Hyaluronic Acid (100 mg), Vitamin E, and Collagen to brighten skin, reduce oxidative stress, and support youthful elasticity.",
      features: ["Promotes skin brightening and even tone", "Enhances hydration and reduces signs of aging", "Powerful antioxidant support with Glutathione &amp; Vitamin E", "Delicious gummy format for easy daily use"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 12,
      name: "Lignel Healthcare BioColla Glow Gummies (Biotin + Collagen + Vitamin E 15000 mcg)",
      category: "supplements",
      image: img20250723WA0004,
      description: "Boost your beauty routine with Lignel Healthcare BioColla Glow Gummies, a high-strength combination of Biotin, Collagen, and Vitamin E. This triple-action formula supports healthy hair, radiant skin, and strong nails while providing antioxidant protection.",
      features: ["Encourages hair growth and strength", "Enhances skin elasticity and youthful glow", "Supports nail health and repair", "Tasty gummy formula for effortless daily supplementation"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 13,
      name: "Lignel Healthcare BioColla Luxe Oil (Biotin + Collagen 20000 mcg, Topical Use)",
      category: "supplements",
      image: img20250723WA0003,
      description: "Experience targeted beauty care with Lignel Healthcare BioColla Luxe Oil, a high-strength topical formula enriched with Biotin (20,000 mcg) and Collagen. Designed to nourish hair and skin directly, this oil helps improve texture, strength, and overall vitality.",
      features: ["Direct nourishment for hair follicles and skin cells", "Supports thicker, stronger, and shinier hair", "Improves skin hydration and smoothness", "Lightweight, non-greasy topical oil for easy application"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 14,
      name: "Lignel Healthcare BioColla Luxe Oil (Biotin + Collagen 20000 mcg, Topical Use)",
      category: "supplements",
      image: img20250723WA0002,
      description: "Experience targeted beauty care with Lignel Healthcare BioColla Luxe Oil, a high-strength topical formula enriched with Biotin (20,000 mcg) and Collagen. Designed to nourish hair and skin directly, this oil helps improve texture, strength, and overall vitality.",
      features: ["Direct nourishment for hair follicles and skin cells", "Supports thicker, stronger, and shinier hair", "Improves skin hydration and smoothness", "Lightweight, non-greasy topical oil for easy application"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 15,
      name: "Vitamin D3 + K2 I",
      category: "supplements",
      image: vd1k1,
      description: "Synergistic blend for bone and cardiovascular health.",
      features: ["Optimal absorption", "Bone density", "Heart health"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 16,
      name: "Vitamin D3 + K2 II",
      category: "supplements",
      image: vd1k4,
      description: "Supports calcium absorption and arterial health.",
      features: ["Strong bones", "Vascular support", "Immune function"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 17,
      name: "B-Complex I",
      category: "supplements",
      image: bcg1,
      description: "Essential B vitamins for energy production and nerve function.",
      features: ["Stress support", "Metabolism boost", "Brain health"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 18,
      name: "B-Complex II",
      category: "supplements",
      image: bcg4,
      description: "High-potency B-complex for daily energy and well-being.",
      features: ["Comprehensive blend", "Nervous system support", "Cellular energy"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },

    // Medical Devices (keep existing)
    {
      id: 19,
      name: "Digital Blood Pressure Monitor",
      category: "medical-devices",
      image: medicalEquipment2,
      description: "Accurate and reliable blood pressure monitoring for home and clinical use.",
      features: ["Large LCD display", "Memory storage", "WHO indicator"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Professional"
    },
    {
      id: 20,
      name: "Pulse Oximeter",
      category: "medical-devices",
      image: medicalEquipment3,
      description: "Fingertip pulse oximeter for oxygen saturation and pulse rate monitoring.",
      features: ["OLED display", "Low battery indicator", "Auto power-off"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 21,
      name: "Digital Thermometer",
      category: "medical-devices",
      image: medicalEquipment5,
      description: "Fast and accurate temperature measurement for all ages.",
      features: ["1-second reading", "Fever alarm", "Memory recall"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Fast"
    },
    {
      id: 22,
      name: "Nebulizer System",
      category: "medical-devices",
      image: nebulizerSystem,
      description: "Compact nebulizer for respiratory medication delivery.",
      features: ["Quiet operation", "Portable design", "Complete kit"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Portable"
    },

    // Diagnostic Equipment (keep existing)
    {
      id: 23,
      name: "Advanced Diagnostic Scanner",
      category: "diagnostics",
      image: medicalEquipment1,
      description: "State-of-the-art diagnostic imaging equipment for medical facilities.",
      features: ["High resolution", "AI-assisted", "Cloud connectivity"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Advanced"
    },
    {
      id: 24,
      name: "Laboratory Analysis System",
      category: "diagnostics",
      image: medicalEquipment7,
      description: "Comprehensive laboratory equipment for accurate medical testing.",
      features: ["Multi-parameter", "Automated", "Quality control"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Professional"
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleRequestQuote = (productName) => {
    const message = `Hello! I would like to request a quote for "${productName}". Please provide me with pricing and availability information.`
    const whatsappUrl = `https://wa.me/18149549493?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of premium nutritional supplements, medical devices, 
            and diagnostic equipment designed to support your health and wellness journey.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Categories and Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge 
                      className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-green-600 text-white"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full p-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            product.rating >= 4.9 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      onClick={() => handleRequestQuote(product.name)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of healthcare products designed to meet diverse needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Nutritional Supplements
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium vitamins, minerals, and specialty supplements for optimal health and wellness.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multivitamins & Minerals</li>
                  <li>• Omega-3 & Fish Oils</li>
                  <li>• Probiotics & Digestive Health</li>
                  <li>• Immune Support Formulas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Medical Devices
                </h3>
                <p className="text-gray-600 mb-4">
                  Reliable medical devices for home monitoring and clinical applications.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Blood Pressure Monitors</li>
                  <li>• Pulse Oximeters</li>
                  <li>• Digital Thermometers</li>
                  <li>• Nebulizer Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Diagnostic Equipment
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced diagnostic tools for accurate medical testing and analysis.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Imaging Systems</li>
                  <li>• Laboratory Equipment</li>
                  <li>• Point-of-Care Testing</li>
                  <li>• Quality Control Systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100">
              Can't find what you're looking for? Contact us for custom product recommendations 
              and bulk ordering options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Sales Team
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

