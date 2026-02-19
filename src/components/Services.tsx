import { Car, UtensilsCrossed, Beef, Wrench, Bike, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import transportData from '../data/transport.json';
import cloudKitchenData from '../data/cloud_kitchen.json';
import proteinFoodsData from '../data/protein_foods.json';
import repairsData from '../data/mobile_laptop_repairs.json';
import rentalsData from '../data/rentals.json';
import fruitsData from '../data/fresh_fruits.json';
import salonsData from '../data/salons.json';

const services = [
  {
    title: 'Transport Services',
    icon: Car,
    description: 'Fixed-price autos and cabs across campus',
    data: transportData,
  },
  {
    title: 'Cloud Kitchens',
    icon: UtensilsCrossed,
    description: 'Affordable meal options delivered to you',
    data: cloudKitchenData,
  },
  {
    title: 'Fresh Fruits',
    icon: UtensilsCrossed, // You might want to get a specific Fruit icon like 'Apple' or 'Grape' if available in your version of lucide-react, or keep UtensilsCrossed
    description: 'Fresh fruits from local vendors',
    data: fruitsData,
  },
  {
    title: 'Protein-Rich Foods',
    icon: Beef, // Or 'Dumbim' or similar if looking for fitness
    description: 'Consistent access to nutrition',
    data: proteinFoodsData,
  },
  {
    title: 'Repairs & Accessories',
    icon: Wrench,
    description: 'Electronics and gear repair',
    data: repairsData,
  },
  {
    title: 'Cycle Rentals',
    icon: Bike,
    description: 'Rental system for campus mobility',
    data: rentalsData,
  },
  {
    title: 'Salons & Grooming',
    icon: UtensilsCrossed, // Placeholder, maybe use 'Scissors' if available
    description: 'Unisex salons and styling',
    data: salonsData,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Everything you need, <span className="text-indigo-600">right here.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our curated lists of essential services around the campus. Scroll through categories to find exactly what you're looking for.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500 hidden sm:block">{service.description}</p>
                </div>
              </div>
              {service.data.length > 1 && (
                <div className="flex items-center text-sm font-medium text-indigo-600 animate-pulse">
                  Scroll for more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              )}
            </div>

            {/* Carousel Container */}
            <div className="flex overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 gap-6 scrollbar-hide snap-x scroll-pl-4">
              {service.data.length > 0 ? (
                service.data.map((item: any, idx) => (
                  <div 
                    key={idx} 
                    className="min-w-[85vw] sm:min-w-[300px] md:min-w-[350px] max-w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 snap-start hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight">
                        {item.name}
                      </h4>
                      {item.distance && (
                         <span className="shrink-0 text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-100">
                          {item.distance}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 flex-grow text-sm text-gray-600">
                      {item.category && service.title !== item.category && (
                        <div className="text-indigo-600 font-medium text-xs uppercase tracking-wide">
                          {item.category}
                        </div>
                      )}
                      
                      {item.phone && (
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                              <Phone className="w-4 h-4 text-gray-500" />
                           </div>
                          <a href={`tel:${item.phone.replace(/\s/g, '')}`} className="font-medium hover:text-indigo-600 hover:underline">
                            {item.phone}
                          </a>
                        </div>
                      )}
                      
                      {item.address && (
                        <div className="flex items-start gap-3">
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin className="w-4 h-4 text-gray-500" />
                           </div>
                          <span className="line-clamp-2">{item.address}</span>
                        </div>
                      )}
                      
                      {item.hours && (
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                             <Clock className="w-4 h-4 text-gray-500" />
                           </div>
                          <span className="text-gray-500">{item.hours}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                 <div className="w-full min-w-[85vw] sm:min-w-[300px] text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 snap-start">
                    <p className="text-gray-400 font-medium">Coming Soon</p>
                    <p className="text-sm text-gray-400 mt-1">We are working on adding {service.title.toLowerCase()}.</p>
                 </div>
              )}
               {/* Spacer for end of carousel */}
               <div className="min-w-[1px] h-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
