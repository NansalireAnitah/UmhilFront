import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import Contact from './pages/Contact';
import HajjLayout from './pages/hajj-umrah/HajjLayout';
import HajjHome from './pages/hajj-umrah/HajjHome';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/hajj-umrah" element={<HajjLayout />}>
            <Route index element={<HajjHome />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
