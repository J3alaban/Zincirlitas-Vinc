import React from "react";
import { motion } from "framer-motion";

const images = [
    { url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop", title: "Ağır Hafriyat" },

    { url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop", title: "Altyapı Çalışmaları" },
    { url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop", title: "Moloz Bertaraf" },
];

// Akışın kesintisiz olması için listeyi çoğaltıyoruz
const marqueeItems = [...images, ...images, ...images];

const HeroSlideshow = () => {
    return (
        <section className="relative bg-[#050505] w-full overflow-hidden py-16">

            {/* Üst Başlık Alanı */}
            <div className="container mx-auto px-6 mb-12 z-10">
            <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none italic text-center mx-auto">
                GÜÇLÜ <span className="text-amber-500">FİLO</span>
            </h2>
             <p className="text-gray-500 text-[10px] md:text-xs mt-4 max-w-2xl uppercase tracking-[0.2em] text-center mx-auto">
                 Geniş Makine Parkuru ve Profesyonel Operasyon
             </p>
            </div>

            {/* Marquee Konteynerı */}
            <div className="flex overflow-hidden group relative z-10">
                <motion.div
                    className="flex gap-4 md:gap-8 whitespace-nowrap"
                    animate={{ x: [0, -2500] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeItems.map((item, idx) => (
                        <div
                            key={idx}
                            // Mobilde 280px genişlik, Desktopta 500px
                            className="relative flex-shrink-0 w-[280px] h-[200px] md:w-[500px] md:h-[350px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-zinc-800/80 group/card"
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-110"
                            />

                            {/* Gradyan Karartma */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                            {/* Resim Üzerindeki Yazı */}
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter italic">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-1 bg-amber-500 mt-2 transition-all duration-500 group-hover/card:w-24" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Arka Plan Glow Efekti */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        </section>
    );
};

export default HeroSlideshow;