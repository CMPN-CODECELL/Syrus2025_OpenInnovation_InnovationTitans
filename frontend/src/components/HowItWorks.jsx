import React from 'react';
import { Button } from "../components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Register and complete your business profile with our AI assistant guiding you through each step.",
      imageUrl: "https://via.placeholder.com/500x300",
    },
    {
      number: "02",
      title: "AI Assessment",
      description: "Our intelligent system analyzes your application using multiple data points for a fair evaluation.",
      imageUrl: "https://via.placeholder.com/500x300",
    },
    {
      number: "03",
      title: "Choose Funding Option",
      description: "Select from direct loans, P2P lending, or crowdfunding based on your needs and eligibility.",
      imageUrl: "https://via.placeholder.com/500x300",
    },
    {
      number: "04",
      title: "Receive Funds & Coaching",
      description: "Get your funds quickly and benefit from ongoing AI-powered financial coaching for your business.",
      imageUrl: "https://via.placeholder.com/500x300",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How MicroFund Works</h2>
          <p className="text-lg text-gray-600">
            Our simple four-step process makes getting funded fast, transparent, and stress-free.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 transform rotate-1 scale-105"></div>
                  <img 
                    src={step.imageUrl} 
                    alt={step.title}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-blue-500">{step.number}</span>
                  <div className="h-px flex-grow bg-blue-200"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
                
                {index === steps.length - 1 && (
                  <div className="pt-6">
                    <Button size="lg" className="rounded-full">
                      Start Your Application
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
