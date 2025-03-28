import React from 'react';
import { Button } from "../components/ui/button";
import { ArrowRight, DollarSign, Briefcase, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block bg-blue-50 rounded-full px-4 py-1 mb-6">
                <p className="text-blue-600 text-sm font-medium">AI-Driven Microfinance</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empower <span className="hero-text-gradient">Sustainable</span> Businesses
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Using cutting-edge AI to connect small businesses with the funding they need to grow sustainably, create jobs, and drive positive impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-primary" size="lg" asChild>
                <Link to="/apply">
                  <DollarSign size={18} className="mr-1" />
                  Apply for Funding
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline" className="button-secondary" size="lg" asChild>
                <Link to="/invest">
                  <Briefcase size={18} className="mr-1" />
                  For Investors
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/how-it-works" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <Info size={16} className="mr-1" />
                <span>Learn How It Works</span>
              </Link>
              <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowRight size={16} className="mr-1" />
                <span>Contact Us</span>
              </Link>
            </div>
            
            <div className="pt-6 pb-2">
              <p className="text-sm text-gray-500 mb-4">Trusted by sustainable businesses worldwide</p>
              <div className="flex flex-wrap items-center gap-8">
                <img src="https://via.placeholder.com/120x40" alt="Partner logo" className="h-8 opacity-60" />
                <img src="https://via.placeholder.com/120x40" alt="Partner logo" className="h-8 opacity-60" />
                <img src="https://via.placeholder.com/120x40" alt="Partner logo" className="h-8 opacity-60" />
                <img src="https://via.placeholder.com/120x40" alt="Partner logo" className="h-8 opacity-60" />
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative flex justify-center">
              <div className="w-full max-w-md glass-card rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-[5/3] w-full bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">Get funded in 3 easy steps</h2>
                    <div className="space-y-4 w-full">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-semibold">1</span>
                        </div>
                        <p className="text-sm">Apply with our AI assistant</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-semibold">2</span>
                        </div>
                        <p className="text-sm">Get instant AI assessment</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-semibold">3</span>
                        </div>
                        <p className="text-sm">Receive funds in your account</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Average loan amount</p>
                      <p className="text-xl font-semibold">$25,000</p>
                    </div>
                    <div className="h-10 border-r border-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500">Approval rate</p>
                      <p className="text-xl font-semibold">94%</p>
                    </div>
                    <div className="h-10 border-r border-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500">Processing time</p>
                      <p className="text-xl font-semibold">24 hrs</p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/apply">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full filter blur-2xl opacity-60"></div>
            <div className="absolute -z-10 bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-40 h-40 bg-indigo-100 rounded-full filter blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
