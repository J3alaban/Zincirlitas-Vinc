import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Anasayfa' },
        { path: '/about-contact', label: 'Hakkımızda & İletişim' },
    ];

    const isActivePath = (path) => location.pathname === path;

    return (
        <nav className="bg-white/90 border-b border-emerald-950/10 sticky top-0 z-50 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Sepetli Vinç Teması */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src="/sepetli-vinc-logo.svg"
                            alt="Vinç Logo"
                            className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />

                        <div className="flex flex-col">
                            <span className="text-xl font-black text-emerald-950 tracking-tight uppercase leading-none italic">
                               ZİNCİRLİTAŞ <span className="text-emerald-600">VİNÇ</span>
                            </span>
                            <span className="text-[9px] text-zinc-500 tracking-[0.2em] uppercase mt-1 font-bold">
                                Güvenli Yüksek Erişim
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative group py-2"
                            >
                                <span className={`text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                                    isActivePath(link.path) ? 'text-emerald-600' : 'text-zinc-700 group-hover:text-emerald-900'
                                }`}>
                                  {link.label}
                                </span>
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-transform duration-300 ${
                                    isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
                            </Link>
                        ))}

                        <Link to="/about-contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-emerald-950 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-colors flex items-center shadow-md shadow-emerald-950/10"
                            >
                                <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                                Teklif Alın
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-zinc-700 hover:text-emerald-950"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-8 w-8" />
                        ) : (
                            <Menu className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-emerald-950/10 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block text-xl font-black uppercase tracking-tighter italic ${
                                        isActivePath(link.path) ? 'text-emerald-600' : 'text-emerald-950'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-zinc-200">
                                <Link to="/about-contact" onClick={() => setIsMenuOpen(false)}>
                                    <button className="w-full bg-emerald-950 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
                                        Hemen İletişime Geçin
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;