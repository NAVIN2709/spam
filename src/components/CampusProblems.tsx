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
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-20 text-center leading-tight">
          Campus life has problems.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 md:p-10 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <problem.icon className="w-12 h-12 md:w-16 md:h-16 text-slate-700 mb-6 md:mb-8 stroke-1.5" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
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
