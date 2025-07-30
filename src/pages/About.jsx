import { Users, Target, Heart, Globe, Award, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import healthWellness4 from '../assets/images/health_wellness/health_wellness_4.jpg'
import researchTeam2 from '../assets/images/team/researchteam-2.jpeg'

// New leadership image imports
import lightObiomaNdurue from '../assets/images/team/ceo-img-2.jpeg'
import chineloCNdurue from '../assets/images/team/Chinelo-C-Ndurue.jpg'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding, putting people's wellbeing at the center of everything we do."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain the highest standards in all our products and services, ensuring excellence in every aspect of our operations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek new ways to improve healthcare outcomes through cutting-edge research and technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and teamwork to create meaningful change in global health."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our vision extends beyond borders, aiming to improve health outcomes for communities worldwide."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every endeavor, setting high standards and consistently delivering results."
    }
  ]

  const leadership = [
    {
      name: "Light Obioma Ndurue",
      role: "Chief Executive Officer",
      background: "Public Health Expert",
      description: "Light brings extensive experience in public health policy and community health initiatives. With a passion for improving healthcare access and outcomes, she leads Lignel Healthcare's strategic vision and operational excellence.",
      image: lightObiomaNdurue // Updated image path
    },
    {
      name: "Chinelo C. Ndurue",
      role: "Chief Financial Officer",
      background: "Business Transformation Expert",
      description: "Chinelo is a seasoned business transformation expert with a proven track record in financial management and organizational development. She oversees financial strategy and business operations at Lignel Healthcare.",
      image: chineloCNdurue // Updated image path
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Lignel Healthcare Company Limited was established with a vision to transform healthcare in Nigeria."
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched our first line of premium nutritional supplements, setting new quality standards in the market."
    },
    {
      year: "2022",
      title: "Public Health Initiatives",
      description: "Expanded into community health programs, reaching over 1,000 individuals in our first year."
    },
    {
      year: "2023",
      title: "Medical Equipment Division",
      description: "Added medical equipment supply to our services, partnering with leading healthcare facilities."
    },
    {
      year: "2024",
      title: "Brand Relaunch",
      description: "Completed comprehensive rebranding to better reflect our expanded mission and growing impact."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-blue-600">Lignel Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600">
                Founded in 2020 and rebranded in 2024, we are dedicated to advancing healthcare 
                excellence through innovation, compassion, and unwavering commitment to quality.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">50+</div>
                  <div className="text-sm text-gray-600">Products & Services</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={healthWellness4} 
                alt="Healthcare Excellence" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To improve global health outcomes by providing high-quality nutritional supplements, 
                  innovative medical equipment, and comprehensive public health solutions that empower 
                  individuals and communities to achieve optimal wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading healthcare company in Africa, recognized for our commitment to 
                  quality, innovation, and social impact, creating a world free from poverty, 
                  hunger, and preventable diseases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every action we take in our mission 
              to transform healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our founding in 2020 to our rebranding in 2024, discover the key milestones 
              that have shaped our growth and impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving Lignel Healthcare's mission to transform 
              global health outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-1">
                      {leader.role}
                    </div>
                    <div className="text-green-600 text-sm mb-4">
                      {leader.background}
                    </div>
                    <p className="text-gray-600">
                      {leader.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Multidisciplinary Team
              </h2>
              <p className="text-lg text-gray-600">
                Our diverse team brings together expertise from various fields including public health, 
                medicine, nutrition, business development, and technology. This multidisciplinary approach 
                enables us to address complex healthcare challenges with innovative, comprehensive solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Public Health Specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Medical Professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-800 rounded-full mr-3"></div>
                  <span className="text-gray-700">Nutrition Experts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-800 rounded-full mr-3"></div>
                  <span className="text-gray-700">Business Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Research & Development</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={researchTeam2} 
                alt="Multidisciplinary Healthcare Team" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Reach: National and Global Expansion
            </h2>
            <p className="text-xl text-blue-100">
              Based in Owerri, Imo State, Nigeria, we are expanding our impact across Africa 
              and beyond, bringing quality healthcare solutions to communities that need them most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Nigeria</div>
                <div className="text-blue-100">Primary Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Africa</div>
                <div className="text-100">Regional Expansion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Global</div>
                <div className="text-blue-100">Future Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About



