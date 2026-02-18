export default function Hero() {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-24"
    >
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
          SPAM is a student-governed utility for campus life.
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Fair transport. Affordable food. Trusted services. Decided by students.
        </p>
        <button
          onClick={scrollToJoin}
          className="px-10 py-5 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
        >
          Join the waitlist
        </button>
        <p className="mt-6 text-sm text-gray-500">Starting at NIT Trichy</p>
      </div>
    </section>
  );
}
