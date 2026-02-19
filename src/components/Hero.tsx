export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20 pb-10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
          Shared Projects And Mentorship
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Bridging the gap between student talent and campus needs. Solving real problems, building real solutions.
        </p>
        <button
          onClick={scrollToServices}
          className="px-8 py-4 md:px-10 md:py-5 bg-indigo-600 text-white text-base md:text-lg font-semibold rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl ring-4 ring-indigo-50"
        >
          Explore Services
        </button>
        <p className="mt-8 text-xs md:text-sm font-medium text-gray-400 tracking-wide uppercase">
          An initiative by E-Cell NIT Trichy
        </p>
      </div>
    </section>
  );
}
