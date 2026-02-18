import { Users, ThumbsUp, Shield, TrendingDown } from 'lucide-react';

const steps = [
  {
    icon: Users,
    label: 'Students use services',
  },
  {
    icon: ThumbsUp,
    label: 'Rate, report & vote',
  },
  {
    icon: Shield,
    label: 'Student CORE reviews',
  },
  {
    icon: TrendingDown,
    label: 'Fixed campus pricing',
  },
];

export default function WhatIsSPAM() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-20 text-center">
          What is SPAM?
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              SPAM is a student-governed platform that brings structure and
              fairness to campus services.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Students use services, rate them, and vote on decisions. A
              dedicated student CORE team reviews all data and ensures vendors
              follow fixed campus pricing.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Poor performers are removed. Good vendors stay. The community
              decides what works.
            </p>
            <p className="text-xl text-gray-900 font-semibold">
              This is governance by students, for students.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <step.icon className="w-12 h-12 text-slate-700 stroke-1.5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
