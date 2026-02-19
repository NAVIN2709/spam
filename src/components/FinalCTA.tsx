import { ChevronRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="join" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Ready to experience a better campus life?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join the movement to make campus services fair, transparent, and created for you.
        </p>
        
        <div className="flex justify-center">
           <a 
             href="mailto:contact@spam-ecell.in" 
             className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors group"
           >
             Contact Us
             <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
}
