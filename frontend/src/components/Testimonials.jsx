import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The AI-powered application process was so intuitive that I was able to complete everything in under 15 minutes. Within 24 hours, I had the funds I needed to expand my sustainable farming business.",
      author: "Sarah Johnson",
      position: "Founder, GreenGrow Farms",
      image: "https://via.placeholder.com/100"
    },
    {
      quote: "As a first-time entrepreneur with no credit history, traditional banks wouldn't give me a chance. MicroFund's alternative credit scoring saw the potential in my eco-friendly packaging business.",
      author: "Miguel Sanchez",
      position: "CEO, EcoPack Solutions",
      image: "https://via.placeholder.com/100"
    },
    {
      quote: "The AI financial coaching has been invaluable. It's like having a CFO in my pocket, giving me actionable insights that have helped improve our cash flow by 32% in just three months.",
      author: "Priya Patel",
      position: "Founder, SustainaTech",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Hear from small business owners who transformed their ventures with MicroFund.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-8 relative animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-20 h-20 rounded-full bg-blue-100 opacity-50"></div>
              
              <svg className="w-12 h-12 text-blue-100 mb-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21V14.9C14.017 12.2 15.217 10.1 18.117 9.1C18.617 8.9 19.117 9.1 19.317 9.5C19.517 9.9 19.317 10.4 18.917 10.6C16.717 11.4 15.917 12.7 15.917 14.9V21C15.917 21.5 15.517 22 14.917 22H14.017C14.017 22 14.017 21.5 14.017 21ZM7.917 21V14.9C7.917 12.2 9.117 10.1 12.017 9.1C12.517 8.9 13.017 9.1 13.217 9.5C13.417 9.9 13.217 10.4 12.817 10.6C10.617 11.4 9.817 12.7 9.817 14.9V21C9.817 21.5 9.417 22 8.817 22H7.917C7.917 22 7.917 21.5 7.917 21Z" />
              </svg>
              
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
