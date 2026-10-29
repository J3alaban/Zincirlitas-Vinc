import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Building2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitHeroSlider from '@/components/SplitHeroSlider';
import HeroSlideshow from '@/components/HeroSlideshow';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const HomePage = () => {
    const services = [
        {
            icon: ShieldCheck,
            title: "Yüksek Erişim & Sepetli Vinç Kiralama",
            description: "Farklı metre uzunluklarına sahip modern sepetli platform filomuzla, yüksekte güvenli ve pratik çalışma imkanı sağlıyoruz."
        },
        {
            icon: Building2,
            title: "Dış Cephe Montaj & Temizlik",
            description: "Plaza, bina ve cam giydirme cephelerin temizlik, bakım, onarım ve cephe kaplama işlerinde saatlik, günlük veya aylık kiralama."
        },
        {
            icon: Wrench,
            title: "Tabela & Işıklandırma Hizmetleri",
            description: "Totem tabela montajı, elektrik hat bakımları, reklam panosu ve dış mekan aydınlatma montajlarında pratik çözümler."
        },
        {
            icon: ArrowUpRight,
            title: "Peyzaj & Ağaç Budama",
            description: "Uzun metrajlı sepetli vinçlerimiz ile yüksek ağaçların güvenli budanması ve tehlikeli dalların temizlenmesi işlemleri."
        }
    ];

    return (
        <div className="w-full overflow-x-hidden bg-white text-emerald-950">
            <Helmet>
                <title>Sepetli Vinç Kiralama & Yüksek Erişim Hizmetleri</title>
                <meta name="description" content="Güvenli ve sertifikalı sepetli vinç filomuzla dış cephe, montaj, temizlik ve yüksekte çalışma çözümlerinde 7/24 hizmetinizdeyiz." />
            </Helmet>

            {/* --- HERO SECTION --- */}
            <SplitHeroSlider />

            {/* --- SLIDESHOW SECTION --- */}
            <HeroSlideshow />

            {/* --- SERVICES SECTION --- */}
            <section id="services" className="py-20 md:py-32 bg-emerald-950 text-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
                            Hizmet <span className="text-emerald-400">Alanlarımız</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-emerald-900/60 border border-emerald-800/60 p-8 rounded-3xl flex flex-col justify-between group hover:border-emerald-400 transition-all duration-500 backdrop-blur-sm"
                            >
                                <div>
                                    <div className="w-14 h-14 bg-emerald-950 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-800 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors duration-500">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 italic">
                                        {service.title}
                                    </h3>
                                    <p className="text-emerald-100/70 leading-relaxed text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-8 pt-4 border-t border-emerald-800/40">
                                    <div className="h-1 w-12 bg-emerald-400 transition-all duration-500 group-hover:w-24" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <Features />
            {/* --- FOOTER / CTA SECTION --- */}
            <Footer />

        </div>
    );
};

export default HomePage;