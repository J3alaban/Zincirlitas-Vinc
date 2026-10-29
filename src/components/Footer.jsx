import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative py-20 md:py-28 bg-emerald-950 text-white overflow-hidden border-t border-emerald-900/50">
            {/* Arka Plan Desenleri & Glow Efektleri */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b15_1px,transparent_1px),linear-gradient(to_bottom,#064e3b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="bg-emerald-900/40 border border-emerald-800/80 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* Sol Taraf: Başlık ve Açıklama */}
                        <div className="lg:col-span-7 text-left">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Clock className="w-4 h-4 text-emerald-400" />
                                <span>7/24 Kesintisiz Sepetli Vinç Hizmeti</span>
                            </div>

                            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase italic leading-none tracking-tighter">
                                Sepetli Vinç <br />
                                <span className="text-emerald-400">İhtiyacınız mı Var?</span>
                            </h2>

                            <p className="text-emerald-100/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                Projenize özel saatlik, günlük veya uzun dönem kiralama fiyat teklifleri, ücretsiz keşif ve uzman operatör desteği için hemen iletişime geçin.
                            </p>

                            {/* Güven Rozetleri */}
                            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-emerald-800/60 text-xs font-bold text-emerald-200 uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    <span>ISG Sertifikalı Operatörler</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                    <span>Bursa & Zincirlitaş</span>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Taraf: İletişim Butonu ve Hızlı Arama Kartı */}
                        <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-6">
                            <Link to="/about-contact" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-5 md:px-12 md:py-6 rounded-2xl font-black text-base md:text-lg uppercase tracking-wider shadow-xl shadow-emerald-500/10 flex items-center justify-center gap-3 transition-all"
                                >
                                    <span>Hemen Teklif Alın</span>
                                    <ArrowRight className="w-6 h-6" />
                                </motion.button>
                            </Link>

                            {/* Doğrudan Telefon Arama Alanı */}
                            <a
                                href="tel:+905337147290"
                                className="w-full sm:w-auto bg-emerald-950/80 border border-emerald-800 hover:border-emerald-500/50 p-4 rounded-2xl flex items-center gap-4 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest block">Acil Kiralama Hattı</span>
                                    <span className="text-lg font-black text-white tracking-wider">+90 533 714 72 90</span>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* Arka Plan Filigran Yazısı */}
                    <div className="absolute -bottom-10 -right-6 text-white/5 text-[12rem] md:text-[16rem] font-black select-none pointer-events-none uppercase italic leading-none">
                        VİNÇ
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;