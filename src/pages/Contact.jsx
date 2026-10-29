import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'İsim gereklidir';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-posta gereklidir';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi girin';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Konu gereklidir';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj gereklidir';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Mesaj en az 10 karakter olmalıdır';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            toast({
                title: "Talebiniz Alındı! 🚜",
                description: "Vinç kiralama ve teknik ekibimiz en kısa sürede sizinle iletişime geçecektir.",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            toast({
                title: "Hata! ❌",
                description: "Lütfen tüm alanları doğru şekilde doldurun.",
                variant: "destructive"
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>İletişim & Teklif Talebi - Sepetli Vinç Kiralama</title>
                <meta name="description" content="Sepetli vinç kiralama, dış cephe montajı ve yüksekte çalışma çözümleriniz için profesyonel ekibimizden hızlıca fiyat teklifi alın." />
            </Helmet>

            <div className="min-h-screen bg-zinc-950 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-emerald-500/20">
                            7/24 Kesintisiz Hizmet
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
                            İletişim & <span className="text-emerald-500">Teklif Alın</span>
                        </h1>
                        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
                            Saatlik, günlük veya projenize özel vinç kiralama talepleriniz ve keşif hizmetlerimiz için bizimle iletişime geçin.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* İletişim Bilgileri */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6"
                            >
                                <div className="bg-emerald-500/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4 border border-emerald-500/20">
                                    <Phone className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 italic">7/24 Operasyon Hattı</h3>
                                <p className="text-zinc-400 font-medium">+90 (212) 555 0123</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6"
                            >
                                <div className="bg-emerald-500/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4 border border-emerald-500/20">
                                    <Mail className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 italic">E-posta Adresi</h3>
                                <p className="text-zinc-400 font-medium">info@sepetlivinc.com</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6"
                            >
                                <div className="bg-emerald-500/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4 border border-emerald-500/20">
                                    <MapPin className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 italic">Merkez Garaj & Ofis</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Sanayi Mahallesi, Vinç Yolu Sokak No:12<br />
                                    Pendik, İstanbul, Türkiye
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* İletişim Formu */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-zinc-300 font-bold mb-2 text-sm uppercase tracking-wide">
                                            Adınız Soyadınız / Firma Adı *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors ${
                                                errors.name ? 'border-red-500' : 'border-zinc-800'
                                            }`}
                                            placeholder="Adınız veya firmanızın unvanı"
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-zinc-300 font-bold mb-2 text-sm uppercase tracking-wide">
                                            E-posta Adresi *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors ${
                                                errors.email ? 'border-red-500' : 'border-zinc-800'
                                            }`}
                                            placeholder="ornek@firma.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-zinc-300 font-bold mb-2 text-sm uppercase tracking-wide">
                                        Hizmet Türü / Konu *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors ${
                                            errors.subject ? 'border-red-500' : 'border-zinc-800'
                                        }`}
                                        placeholder="Örn: Dış Cephe Montajı, Tabela Takılması, Budama vb."
                                    />
                                    {errors.subject && (
                                        <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-zinc-300 font-bold mb-2 text-sm uppercase tracking-wide">
                                        İş Detayları ve Mesajınız *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className={`w-full px-4 py-3 rounded-xl border bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none ${
                                            errors.message ? 'border-red-500' : 'border-zinc-800'
                                        }`}
                                        placeholder="Çalışmanın yapılacağı yükseklik (metre), lokasyon ve tarih detaylarını belirtebilirsiniz..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-6 rounded-xl text-lg font-black uppercase tracking-wider transition-all"
                                    >
                                        <Send className="h-5 w-5 mr-2" />
                                        Teklif Talebi Gönder
                                    </Button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;