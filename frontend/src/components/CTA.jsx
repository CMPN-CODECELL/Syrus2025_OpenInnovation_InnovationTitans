import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="relative glass-card max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 to-indigo-600"></div>
          <div className="p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Sustainable Business?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are making a positive impact while growing their businesses with AI-powered microfinance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full" size="lg" asChild>
                <Link to="/apply">
                  <DollarSign size={18} />
                  Apply for Funding
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full" size="lg" asChild>
                <Link to="/invest">
                  <Briefcase size={18} />
                  For Investors
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
