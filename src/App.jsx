import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Helmet'ı buraya import ediyoruz

import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import AboutContact from '@/pages/AboutContact';

import Contact from '@/pages/Contact';

function App() {
    return (
        <Router>

                {/* Global Meta Ayarları */}
                <Helmet>
                    <title>Zincirlitaş Vinç | Profesyonel Kaldırma Çözümleri</title>
                    <link rel="icon" type="image/png" href="/OzmenVincLogo.png" />
                    <link rel="apple-touch-icon" href="/OzmenVincLogo.png" />
                    {/* Sosyal medya paylaşım görselini de burada sabitleyebilirsin */}
                    <meta property="og:image" content="/OzmenVincLogo.png" />
                </Helmet>

                <div className="min-h-screen bg-black text-white selection:bg-crane-orange selection:text-white">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-contact" element={<AboutContact />} />

                        {/* Legacy Routes */}

                        <Route path="/iletisim" element={<Contact />} />
                    </Routes>
                    <Toaster />
                </div>

        </Router>
    );
}

export default App;