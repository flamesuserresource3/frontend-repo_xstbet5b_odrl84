import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
