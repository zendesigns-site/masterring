import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Consumer } from './pages/Consumer';
import { Tactical } from './pages/Tactical';
import { Technology } from './pages/Technology';
import { Ecosystem } from './pages/Ecosystem';
import { Investors } from './pages/Investors';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-primary text-action font-sans antialiased selection:bg-tech selection:text-black">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/tactical" element={<Tactical />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/investors" element={<Investors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;