import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CampusProblems from './components/CampusProblems';
import WhatIsSPAM from './components/WhatIsSPAM';
import Services from './components/Services';
import WhyThisWorks from './components/WhyThisWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CampusProblems />
      <WhatIsSPAM />
      <Services />
      <WhyThisWorks />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
