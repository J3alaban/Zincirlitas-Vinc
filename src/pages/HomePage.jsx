import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HardHat, Hammer, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlideshow from '@/components/HeroSlideshow';
import Features from '@/components/Features';

const HomePage = () => {
 const services = [
     {
         icon: HardHat,
         title: "Altyapı & Temel Kazısı",
         description: "Modern ekskavatör filomuzla, mühendislik standartlarına uygun hassas ve güvenli temel kazı çözümleri sunuyoruz."
     },
     {
         icon: Truck,
         title: "Hafriyat Nakliyatı & Dolgu",
         description: "Geniş damperli kamyon ağımız ile moloz atımı, saha temizliği ve kaliteli dolgu malzemesi temini sağlıyoruz."
     }
 ];

    return (
        <div className="w-full overflow-x-hidden">
            <Helmet>
                <title>Hafriyat Hizmetleri - Güçlü Filo, Profesyonel Altyapı</title>
                <meta name="description" content="Temel kazısı, profesyonel bina yıkımı ve hafriyat nakliyatı çözümlerinde son teknoloji iş makinelerimizle hizmetinizdeyiz." />
            </Helmet>

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#1a1a1a] pt-20 md:pt-32">
                <div className="container mx-auto px-4 mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-amber-500/30">
                            Yılların Tecrübesi ve Güçlü Filo
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 leading-[0.9] uppercase italic tracking-tighter">
                            Geleceğin <br />
                            <span className="text-amber-500">Temellerini Atıyoruz</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                            Zorlu sahalarda, yüksek tonajlı modern iş makinelerim ve uzman operatörlerimiz ile projelerinizi sıfır hata ile teslim ediyoruz.
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <HeroSlideshow />
                </div>
            </section>

            {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-20 md:py-32 bg-[#0f0f0f] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                        Uzmanlık <span className="text-amber-500">Alanlarımız</span>
                    </h2>
                    <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
                </div>

                {/* md:grid-cols-3 olan kısmı md:grid-cols-2 yaptık */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#151515] border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-500"
                        >
                            <div>
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-amber-500 mb-6 border border-zinc-800 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 italic">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-zinc-900/50">
                                <div className="h-1 w-12 bg-amber-500 transition-all duration-500 group-hover:w-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

            {/* --- WHY CHOOSE US --- */}
            <Features />

            {/* --- CTA SECTION --- */}
            <section className="py-20 md:py-32 bg-amber-500 relative overflow-hidden text-center px-4">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic leading-none tracking-tighter">
                        Yeni Projeniz <br className="md:hidden" /> Hazır mı?
                    </h2>
                    <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                        Saha analizi, hafriyat metrajı hesaplama ve projenize özel fiyat teklifleri almak için teknik ekibimizle hemen iletişime geçin.
                    </p>
                    <Link to="/about-contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-10 py-4 md:px-14 md:py-6 rounded-full font-black text-base md:text-lg uppercase tracking-widest shadow-2xl transition-all"
                        >
                            Teklif Alın
                        </motion.button>
                    </Link>
                </div>

                {/* Dekoratif Arka Plan Yazısı */}
                <div className="absolute -bottom-10 -right-10 text-white/5 text-[15rem] font-black select-none pointer-events-none uppercase italic">
                    KAZI
                </div>
            </section>
        </div>
    );
};

export default HomePage;