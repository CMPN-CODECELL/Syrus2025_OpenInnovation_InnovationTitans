import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { ArrowRight, Shield, Award, LineChart, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MicroFund</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to make financial services accessible to all sustainable businesses 
                through the power of AI and human-centered microfinance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At MicroFund, we believe that access to finance should not be determined by traditional credit 
                scores or banking history. Instead, we use AI to evaluate the potential and sustainability of 
                businesses to provide fair funding opportunities to entrepreneurs worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our platform connects small business owners with investors who want to make a positive impact 
                while generating returns. By leveraging artificial intelligence, we streamline the entire 
                process from application to funding, making it faster, more transparent, and accessible to all.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
                <p className="text-gray-600">We believe in full transparency in all our operations and loan terms.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Heart className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability First</h3>
                <p className="text-gray-600">We prioritize businesses that contribute to environmental and social sustainability.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Award className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in our technology, service, and impact.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-md transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <LineChart className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously innovate to make financial services more accessible and efficient.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="text-center text-gray-600 mb-8">
              <p className="text-lg">
                Our diverse team combines expertise in finance, technology, and sustainability to create a platform 
                that serves both borrowers and investors with excellence.
              </p>
            </div>
            {/* Team members would go here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder for team members */}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
