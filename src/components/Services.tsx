import { Car, UtensilsCrossed, Beef, Wrench, Bike } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Transport',
    description: 'Fixed-price autos and cabs across campus',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cloud Kitchens',
    description: 'Affordable meal options delivered to you',
  },
  {
    icon: Beef,
    title: 'Protein-Rich Foods',
    description: 'Consistent access to healthy nutrition',
  },
  {
    icon: Wrench,
    title: 'Repairs & Accessories',
    description: 'Trusted pricing for electronics and gear',
  },
  {
    icon: Bike,
    title: 'Cycle Rentals',
    description: 'Structured rental system for campus mobility',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-20 text-center">
          What SPAM does.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <service.icon className="w-16 h-16 text-slate-700 mb-8 stroke-1.5" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
