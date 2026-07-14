import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Zap, Leaf, ChevronRight } from 'lucide-react';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            icon: ShieldAlert,
            title: "Maksimum İş Güvenliği",
            desc: "Tüm şantiye alanlarında, ISG (İş Sağlığı ve Güvenliği) standartlarına %100 uyum sağlıyoruz. Operasyonlarımız profesyonel mühendislik denetimleri altında, sertifikalı uzman ekiplerimiz tarafından yürütülür.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Baretli çalışan / Şantiye
            tag: "ISG Standartları"
        },
        {
            icon: Zap,
            title: "Yüksek Tonaj & Güçlü Filo",
            desc: "En sert zeminlerde ve en derin temel kazılarında bile performanstan ödün vermeyen, bakımları düzenli yapılan modern iş makinesi parkurumuzla projelerinize hız ve kesintisiz güç katıyoruz.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Ekskavatör / Ağır Makine
            tag: "Operasyon Gücü"
        },
        {
            icon: Leaf,
            title: "Çevreye Hassas Yıkım",
            desc: "Bina yıkımı ve moloz bertaraf işlemlerinde çevre mevzuatlarına tam uyum sağlıyoruz. Çevre kirliliğini ve gürültüyü en aza indirmek için sulama sistemleri ve modern kırım teknikleri kullanıyoruz.",
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop", // Şantiye Sahası
            tag: "Çevre Mevzuatı"
        }
    ];

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Arka Plan Süslemesi (Endüstriyel Amber/Turuncu Dokunuş) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-600/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                        Hizmet <span className="text-amber-500">Standartlarımız</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* SOL TARAF: TAB BUTONLARI */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left border ${
                                    activeTab === index
                                        ? "bg-amber-500 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                                        : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${activeTab === index ? "bg-black text-amber-500" : "bg-zinc-800 text-amber-500"}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <span className={`font-bold uppercase tracking-wider ${activeTab === index ? "text-white" : "text-gray-400"}`}>
                                        {feature.title}
                                    </span>
                                </div>
                                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === index ? "rotate-90 text-white" : "text-zinc-600"}`} />
                            </button>
                        ))}
                    </div>

                    {/* SAĞ TARAF: DİNAMİK İÇERİK */}
                    <div className="w-full lg:w-2/3 min-h-[450px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/30 p-8 rounded-[32px] border border-zinc-800/50 backdrop-blur-sm"
                            >
                                <div className="space-y-6 flex flex-col justify-center">
                                    <span className="text-amber-500 font-black text-xs uppercase tracking-[0.3em]">
                                        {features[activeTab].tag}
                                    </span>
                                    <h3 className="text-3xl font-black text-white uppercase leading-tight tracking-tight">
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {features[activeTab].desc}
                                    </p>
                                    <div className="pt-4">
                                        <div className="h-1 w-24 bg-amber-500" />
                                    </div>
                                </div>

                                <div className="relative h-[300px] md:h-full overflow-hidden rounded-2xl">
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        src={features[activeTab].image}
                                        alt={features[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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