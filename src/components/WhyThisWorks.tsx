import { Users, DollarSign, Star } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Student-Governed Decisions',
    description:
      'Every policy, vendor, and change is decided by students through voting and feedback. No external control.',
  },
  {
    icon: DollarSign,
    title: 'Fixed Campus Pricing',
    description:
      'No more bargaining or price variations. Services follow transparent, campus-wide rates agreed upon by the community.',
  },
  {
    icon: Star,
    title: 'Real Accountability',
    description:
      'Ratings matter. Poor performers are removed. The system rewards quality and punishes exploitation.',
  },
];

export default function WhyThisWorks() {
  return (
    <section id="governance" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-20 text-center">
          Why this works.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <pillar.icon className="w-16 h-16 text-slate-700 mb-8 mx-auto stroke-1.5" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
