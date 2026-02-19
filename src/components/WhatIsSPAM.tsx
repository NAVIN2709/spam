import { Handshake, Rocket, Code, Laptop } from 'lucide-react';

const steps = [
  {
    icon: Handshake,
    label: 'Identify Problems',
    description: 'E-Cell identifies real campus problems like service fragmentation and lack of offers.',
  },
  {
    icon: Code,
    label: 'Build Together',
    description: 'We open these projects to students who build solutions under our mentorship.',
  },
  {
    icon: Rocket,
    label: 'Launch at Fests',
    description: 'Completed projects are showcased and deployed during Pragyan.',
  },
  {
    icon: Laptop,
    label: 'Campus Impact',
    description: 'Students use these platforms to avail services, discounts, and exclusive offers.',
  },
];

export default function WhatIsSPAM() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-20 text-center leading-tight">
          What is SPAM?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">Shared Projects And Mentorship</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                SPAM is an initiative designed to bridge the gap between student talent and real-world campus needs.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">The Problem Space</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Campus services are often fragmented. Finding information about food, transport, or repairs can be a hassle, and students often miss out on exclusive discounts and offers available to them.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Solution</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                We open these problem statements as projects for the student body. Selected teams build centralized platforms to solve these issues, receiving guidance and mentorship throughout the journey.
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.label}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
