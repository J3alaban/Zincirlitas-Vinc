import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

const SplitHeroSlider = () => {
    const slides = [
        {
            id: 1,
            tag: "Güvenli Yükseklik & Uzman Operatörler",
            titleLine1: "Yükseklerde",
            titleHighlight: "Güvenle Yükselin",
            description: "Son teknoloji sepetli vinç filomuz ve ISG sertifikalı uzman operatör kadromuzla zorlu yüksek sahalarda sıfır kaza prensibiyle hizmet veriyoruz.",
            image: "/1.jpeg",
            stat: "27+ Metre",
            statLabel: "Maksimum Erişim"
        },
        {
            id: 2,
            tag: "7/24 Acil Kiralama & Sahra Desteği",
            titleLine1: "Dış Cephe",
            titleHighlight: "Profesyonel Çözüm",
            description: "Plaza cam temizliği, dış cephe mantolama ve cephe bakım onarım projelerinizde saatlik veya günlük esnek sepetli vinç kiralama imkanı.",
            image: "/2.jpeg",
            stat: "7/24",
            statLabel: "Kesintisiz Hizmet"
        },
        {
            id: 3,
            tag: "Hızlı Kurulum & Pratik Operasyon",
            titleLine1: "Tabela & Montaj",
            titleHighlight: "Işıklandırma İşleri",
            description: "Totem tabela montajları, elektrik direği bakımları ve dış mekan reklam uygulamalarınızda dar sokaklarda bile kusursuz manevra kabiliyeti.",
            image: "/3.jpeg",
            stat: "%100",
            statLabel: "İş Güvenliği Uyumu"
        },
        {
                id: 4,
                tag: "Hızlı Kurulum & Pratik Operasyon",
                titleLine1: "27 metreden 70 metreye kadar sepetli vinç",
                titleHighlight: "Profesyonel Çözüm",
                description: "Son teknoloji sepetli vinç filomuz ve ISG sertifikalı uzman operatör kadromuzla zorlu yüksek sahalarda sıfır kaza prensibiyle hizmet veriyoruz.",
                image: "/9.jpeg",
                stat: "27+",
                statLabel: "Yüksek Erişim"
        }

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center bg-zinc-950 text-white font-sans border-b border-white/10">

            {/* ARKAPLAN: Tek Fotoğrafı Ortadan İkiye Bölen (Split) Katman */}
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        {/* Sol Parça (Tek görselin sol yarısı - Ortadan dışa doğru açılır) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[10%] brightness-[0.85] transition-transform duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                clipPath: isActive ? "polygon(0 0, 50% 0, 50% 100%, 0 100%)" : "polygon(0 0, 0 0, 0 100%, 0 100%)",
                                transform: isActive ? "scale(1)" : "scale(1.05)"
                            }}
                        />
                        {/* Sağ Parça (Tek görselin sağ yarısı - Ortadan dışa doğru açılır) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[10%] brightness-[0.85] transition-transform duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                clipPath: isActive ? "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                                transform: isActive ? "scale(1)" : "scale(1.05)"
                            }}
                        />
                    </div>
                );
            })}

            {/* KARARTMA / GRADYAN KATMANI (Yazıların okunabilirliği için) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-black/40 pointer-events-none" />

            {/* İÇERİK KATMANI */}
            <div className="container mx-auto px-4 w-full z-30 relative">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-block bg-emerald-500/20 backdrop-blur-md text-emerald-300 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-emerald-400/30 shadow-sm">
                                {slides[currentSlide].tag}
                            </div>

                            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white mb-6 leading-[0.95] uppercase italic tracking-tighter drop-shadow-md">
                                {slides[currentSlide].titleLine1} <br />
                                <span className="text-emerald-400">{slides[currentSlide].titleHighlight}</span>
                            </h1>

                            <p className="text-base md:text-lg text-zinc-200 mb-8 max-w-xl leading-relaxed drop-shadow">
                                {slides[currentSlide].description}
                            </p>

                            <div className="flex items-center gap-6 pt-4 border-t border-white/20 mb-8 max-w-lg">
                                <div>
                                    <span className="text-2xl md:text-3xl font-black text-white italic tracking-tight drop-shadow">
                                        {slides[currentSlide].stat}
                                    </span>
                                    <p className="text-xs text-zinc-300 uppercase tracking-widest font-bold mt-1">
                                        {slides[currentSlide].statLabel}
                                    </p>
                                </div>
                                <div className="h-10 w-[1px] bg-white/20" />
                                <div className="flex items-center gap-2 text-zinc-200 text-xs font-bold uppercase tracking-wider">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    Sertifikalı Filo
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigasyon ve Kontroller */}
                    <div className="flex items-center justify-between pt-2 max-w-xl">
                        <div className="flex items-center gap-3">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-2 transition-all duration-300 rounded-full ${
                                        currentSlide === idx
                                            ? 'w-10 bg-emerald-400'
                                            : 'w-2 bg-white/30 hover:bg-white/60'
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-emerald-950 transition-all shadow-sm"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-emerald-950 transition-all shadow-sm"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitHeroSlider;