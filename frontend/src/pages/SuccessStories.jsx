import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Award, Heart, Briefcase } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const featuredStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      business: "GreenGrow Farms",
      location: "Karnataka, India",
      image: "https://via.placeholder.com/400",
      story: "The AI-powered application process was so intuitive that I was able to complete everything in under 15 minutes. Within 24 hours, I had the funds I needed to expand my sustainable farming business. The ongoing financial coaching has helped me optimize operations and increase profits by 32%.",
      impact: "Created 12 new jobs and increased crop yield by 40% using sustainable methods",
      category: "Agriculture",
      fundingAmount: 15000,
      returnRate: "11.2%"
    },
    {
      id: 2,
      name: "Miguel Sanchez",
      business: "EcoPack Solutions",
      location: "Medellín, Colombia",
      image: "https://via.placeholder.com/400",
      story: "As a first-time entrepreneur with no credit history, traditional banks wouldn't give me a chance. MicroFund's alternative credit scoring saw the potential in my eco-friendly packaging business. Now we supply biodegradable packaging to over 200 local businesses.",
      impact: "Prevented 5 tons of plastic waste and mentored 8 young entrepreneurs",
      category: "Manufacturing",
      fundingAmount: 22000,
      returnRate: "9.8%"
    },
    {
      id: 3,
      name: "Priya Patel",
      business: "SustainaTech",
      location: "Nairobi, Kenya",
      image: "https://via.placeholder.com/400",
      story: "The AI financial coaching has been invaluable. It's like having a CFO in my pocket, giving me actionable insights that have helped improve our cash flow by 32% in just three months. We've now expanded our solar lamp distribution to five new rural communities.",
      impact: "Provided clean energy to 5,000+ households and reduced carbon emissions",
      category: "Energy",
      fundingAmount: 18000,
      returnRate: "10.5%"
    }
  ];

  const moreStories = [
    {
      id: 4,
      name: "Hassan Ahmed",
      business: "Clean Water Initiative",
      location: "Kampala, Uganda",
      category: "Water & Sanitation",
      shortStory: "Secured funding to install water purification systems in 12 villages, bringing clean water to over 5,000 people.",
      fundingAmount: 12000,
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      business: "Artisan Collective",
      location: "Oaxaca, Mexico",
      category: "Fair Trade",
      shortStory: "Expanded fair trade artisan collective, increasing income for 35 indigenous women craftspeople by 45%.",
      fundingAmount: 8500,
    },
    {
      id: 6,
      name: "Raj Mehta",
      business: "Solar Solutions",
      location: "Gujarat, India",
      category: "Renewable Energy",
      shortStory: "Built micro-solar grid business bringing affordable electricity to 8 off-grid rural communities.",
      fundingAmount: 25000,
    },
    {
      id: 7,
      name: "Fatima Nkosi",
      business: "EduTech Academy",
      location: "Cape Town, South Africa",
      category: "Education",
      shortStory: "Developed low-cost educational tablets and curriculum for underserved schools, reaching 3,000+ students.",
      fundingAmount: 16000,
    }
  ];

  const impactStats = [
    { figure: "500+", label: "Businesses Funded" },
    { figure: "$12M+", label: "Total Funding" },
    { figure: "25,000+", label: "Jobs Created" },
    { figure: "95%", label: "Repayment Rate" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl text-gray-600 mb-8">
                Meet the entrepreneurs who are changing their communities with the help of MicroFund.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {impactStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-4">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.figure}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Success Stories</h2>
              
              <div className="space-y-16">
                {featuredStories.map((story, index) => (
                  <div 
                    key={story.id} 
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center gap-8 lg:gap-12`}
                  >
                    <div className="w-full lg:w-1/3">
                      <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 transform rotate-2 scale-105"></div>
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-auto rounded-xl shadow-lg"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                            {story.category === "Agriculture" && <Award className="text-green-600" size={24} />}
                            {story.category === "Manufacturing" && <Briefcase className="text-blue-600" size={24} />}
                            {story.category === "Energy" && <Heart className="text-red-600" size={24} />}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-2/3 space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold">{story.name}</h3>
                          <p className="text-lg text-blue-600">{story.business}</p>
                          <p className="text-gray-500">{story.location}</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                          <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            ${story.fundingAmount.toLocaleString()} Funded
                          </div>
                          {story.returnRate && (
                            <div className="text-green-600 text-sm mt-1">
                              {story.returnRate} Return for Investors
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Quote className="absolute top-0 left-0 text-blue-100" size={40} />
                        <p className="text-gray-600 pl-10 pt-6 relative">
                          {story.story}
                        </p>
                      </div>
                      
                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <p className="text-sm font-medium text-green-800">Impact:</p>
                        <p className="text-gray-700">{story.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More Success Stories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">More Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {moreStories.map((story) => (
                  <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{story.name}</h3>
                          <p className="text-blue-600">{story.business}</p>
                        </div>
                        <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          ${story.fundingAmount.toLocaleString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-gray-500 text-sm">{story.location}</span>
                        <span>•</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs">{story.category}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{story.shortStory}</p>
                      
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        Read Full Story
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Success Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to grow your sustainable business or want to invest in positive impact, MicroFund can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/apply">Apply for Funding</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/invest">Start Investing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
