import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare, Code2 } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const AboutContact = () => {
    const [hoverSide, setHoverSide] = useState(null);

    const aboutSteps = [
        {
            title: "Güçlü Makine Parkuru",
            desc: "Son teknoloji ekskavatörler, kırıcılar ile en zorlu sahalarda bile kesintisiz güç sunuyoruz."
        },
        {
            title: "Profesyonel Kazı",
            desc: "Mühendislik standartlarına uygun temel kazıları ve çevre güvenliğini ön planda tutan profesyonel kazı hizmetleri sağlıyoruz."
        },
    ];

    const galleryImages = [
        "/image1.jpeg",
        "/image2.jpeg",
        "/image3.jpeg",
        "/image4.jpeg",


    ];

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Helmet>
                <title>Hakkımızda ve İletişim - Hafriyat Hizmetleri</title>
            </Helmet>

            {/* --- HAKKIMIZDA BÖLÜMÜ --- */}
            {/* items-stretch ile sol ve sağ sütunların boylarını birbirine eşitledik */}
            <section className="relative flex flex-col lg:flex-row bg-zinc-950 items-stretch">

                {/* Sol Metin Alanı: Dikey boşluklar sağdaki grid yüksekliğine göre dengelendi */}
                <div className="w-full lg:w-1/2 px-6 md:px-24 py-16 lg:py-24 relative z-10 flex flex-col justify-between">
                    {aboutSteps.map((step, i) => (
                        <div key={i} className="py-8 flex flex-col justify-center mb-12 last:mb-0">
                           {/* <span className="text-amber-500 font-black mb-3 block tracking-widest text-sm">
                                ETAP 0{i + 1}
                            </span> */}
                            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight tracking-tighter italic">
                                {step.title}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sağ Taraf: Sol tarafla milimetrik hizada eşleşen, taşmayan sabit alan */}
                <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 flex items-center justify-center bg-zinc-900/20 border-l border-zinc-900/50">
                    {/* Hiza bütünlüğü için max-w ve aspect oranları kilitlendi */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-lg aspect-square lg:aspect-auto">
                        {galleryImages.map((imgUrl, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800/80 group"
                            >
                                <img
                                    src={imgUrl}
                                    alt={`Hafriyat Galeri ${index + 1}`}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>

            {/* --- İLETİŞİM BÖLÜMÜ (RESPONSIVE SPLIT) --- */}
            <section className="relative h-screen md:h-[70vh] flex flex-col md:flex-row overflow-hidden border-t border-zinc-900">

                {/* Tasarımcı Alanı */}
                <motion.div
                    onMouseEnter={() => setHoverSide('designer')}
                    onMouseLeave={() => setHoverSide(null)}
                    animate={{
                        width: typeof window !== 'undefined' && window.innerWidth > 768
                            ? (hoverSide === 'designer' ? '70%' : hoverSide === 'company' ? '30%' : '50%')
                            : '100%',
                        height: typeof window !== 'undefined' && window.innerWidth <= 768
                            ? (hoverSide === 'designer' ? '60%' : hoverSide === 'company' ? '40%' : '50%')
                            : '100%'
                    }}
                    className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 transition-all duration-500 overflow-hidden"
                >
                    <div className="relative z-10 text-center">
                        <Code2 className="w-12 h-12 md:w-16 md:h-16 text-amber-500 mx-auto mb-4 md:mb-6" />
                        <h3 className="text-xl md:text-4xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Dijital Tasarım</h3>
                        <p className={`text-gray-400 text-sm md:text-base mb-6 md:mb-8 transition-opacity duration-300 ${hoverSide === 'company' ? 'opacity-0' : 'opacity-100'}`}>
                            Projenin dijital mimarı ile iletişime geçin.
                        </p>
                        <a href="https://wa.me/905459266026" className="inline-flex bg-white text-black px-6 py-3 md:px-8 md:py-3 rounded-full font-bold uppercase text-xs md:text-sm hover:scale-105 transition-transform items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> Geliştirici
                        </a>
                    </div>
                </motion.div>

                {/* Şirket Alanı */}
                <motion.div
                    onMouseEnter={() => setHoverSide('company')}
                    onMouseLeave={() => setHoverSide(null)}
                    animate={{
                        width: typeof window !== 'undefined' && window.innerWidth > 768
                            ? (hoverSide === 'company' ? '70%' : hoverSide === 'designer' ? '30%' : '50%')
                            : '100%',
                        height: typeof window !== 'undefined' && window.innerWidth <= 768
                            ? (hoverSide === 'company' ? '60%' : hoverSide === 'designer' ? '40%' : '50%')
                            : '100%'
                    }}
                    className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-amber-600 transition-all duration-500 overflow-hidden"
                >
                    <div className="relative z-10 text-center text-white">
                        <MapPin className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
                        <h3 className="text-xl md:text-4xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Hafriyat Hizmetleri</h3>
                        <p className={`text-white/80 text-sm md:text-base mb-6 md:mb-8 transition-opacity duration-300 ${hoverSide === 'designer' ? 'opacity-0' : 'opacity-100'}`}>
                            Şantiye destek hattı, teklif ogrenme ve konum bilgisi.
                        </p>
                        <div className="flex flex-col gap-3 items-center">
                            <a
                                href="https://wa.me/905324191089"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-bold uppercase text-xs md:text-sm hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                              Teklif Al
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Orta Ayırıcı Yazı */}
                {!hoverSide && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-zinc-800 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hidden md:block z-20">
                        Seçiminizi Yapın
                    </div>
                )}
            </section>
        </div>
    );
};

export default AboutContact;