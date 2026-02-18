import { Car, UtensilsCrossed, Dumbbell, Wrench, Bike } from 'lucide-react';

const problems = [
  {
    icon: Car,
    title: 'Transport',
    description: 'Random pricing, bargaining stress',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food',
    description: 'Limited options, expensive delivery',
  },
  {
    icon: Dumbbell,
    title: 'Protein',
    description: 'Hard to access consistently',
  },
  {
    icon: Wrench,
    title: 'Repairs',
    description: 'No trusted pricing',
  },
  {
    icon: Bike,
    title: 'Rentals',
    description: 'No structured system',
  },
];

export default function CampusProblems() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-20 text-center">
          Campus life has problems.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <problem.icon className="w-16 h-16 text-slate-700 mb-8 stroke-1.5" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {problem.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
