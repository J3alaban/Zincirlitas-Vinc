import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, ChevronRight } from 'lucide-react';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            icon: ShieldCheck,
            title: "Maksimum İş Güvenliği & ISG",
            desc: "Yüksekte çalışma yönetmeliklerine ve İSG standartlarına %100 uyum sağlıyoruz. Operasyonlarımız sertifikalı uzman operatörlerimizle yürütülür.",
            image: "http://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
            tag: "ISG Standartları"
        },
        {
            icon: Wrench,
            title: "Geniş Platform & Uzun Metraj",
            desc: "Farklı metre uzunluklarına sahip eklemli ve teleskopik sepetli vinçlerimizle en dar sokaklardan yüksek plaza cephelerine kadar kolay erişim.",
            image: "/7.jpeg",
            tag: "Operasyon Gücü"
        },
        {
            icon: Clock,
            title: "7/24 Acil Kiralama & Destek",
            desc: "Acil tabela müdahaleleri, dış cephe arızaları ve zaman duyarlı projeleriniz için saatlik, günlük veya uzun dönem kiralama.",
            image: "/8.jpeg",
            tag: "Kesintisiz Hizmet"
        }
    ];

    return (
        <section className="py-24 bg-zinc-50 border-t border-emerald-950/10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase italic tracking-tighter">
                        Hizmet <span className="text-emerald-600">Standartlarımız</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start max-w-7xl mx-auto">
                    {/* SOL TARAF */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left border ${
                                    activeTab === index
                                        ? "bg-emerald-950 border-emerald-950 text-white shadow-lg"
                                        : "bg-white border-zinc-200 text-emerald-950 hover:border-emerald-300"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${activeTab === index ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold uppercase tracking-wider text-sm">
                                        {feature.title}
                                    </span>
                                </div>
                                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === index ? "rotate-90 text-emerald-400" : "text-zinc-400"}`} />
                            </button>
                        ))}
                    </div>

                    {/* SAĞ TARAF */}
                    <div className="w-full lg:w-2/3 min-h-[420px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-[32px] border border-zinc-200 shadow-xl"
                            >
                                <div className="space-y-6 flex flex-col justify-center">
                                    <span className="text-emerald-600 font-black text-xs uppercase tracking-[0.3em]">
                                        {features[activeTab].tag}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black text-emerald-950 uppercase leading-tight tracking-tight italic">
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                                        {features[activeTab].desc}
                                    </p>
                                    <div className="pt-2">
                                        <div className="h-1 w-20 bg-emerald-600 rounded-full" />
                                    </div>
                                </div>

                                <div className="relative h-[260px] md:h-full overflow-hidden rounded-2xl border border-zinc-100">
                                    <motion.img
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        src={features[activeTab].image}
                                        alt={features[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;