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
                title: "Talebiniz Alındı! 🏗️",
                description: "Proje ekibimiz en kısa sürede sizinle iletişime geçecektir.",
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
                <title>İletişim & Teklif Talebi - Hafriyat Hizmetleri</title>
                <meta name="description" content="Hafriyat, kazı, bina yıkımı ve şantiye çözümleriniz için profesyonel ekibimizden hemen teklif alın." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-black text-zinc-900 mb-4 uppercase tracking-tighter">Proje & İletişim</h1>
                        <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                            Şantiye, kazı ve yıkım projeleriniz için profesyonel destek ve fiyat teklifi almak adına bizimle iletişime geçin.
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
                                className="bg-white rounded-2xl shadow-md border border-zinc-200/60 p-6"
                            >
                                <div className="bg-amber-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                                    <Phone className="h-7 w-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-2">Şantiye Destek Hattı</h3>
                                <p className="text-zinc-600 font-medium">+90 (212) 555 0123</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-white rounded-2xl shadow-md border border-zinc-200/60 p-6"
                            >
                                <div className="bg-amber-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                                    <Mail className="h-7 w-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-2">E-posta Adresi</h3>
                                <p className="text-zinc-600 font-medium">proje@hafriyathizmetleri.com</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-white rounded-2xl shadow-md border border-zinc-200/60 p-6"
                            >
                                <div className="bg-amber-100 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                                    <MapPin className="h-7 w-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-2">Merkez Ofis</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Sanayi Mahallesi, Kazı Alanı Sokak No:45<br />
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
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md border border-zinc-200/60 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-zinc-800 font-bold mb-2">
                                            Adınız Soyadınız / Firma Adı *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors ${
                                                errors.name ? 'border-red-500' : 'border-zinc-300'
                                            }`}
                                            placeholder="Adınız veya firmanızın unvanı"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-zinc-800 font-bold mb-2">
                                            E-posta Adresi *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors ${
                                                errors.email ? 'border-red-500' : 'border-zinc-300'
                                            }`}
                                            placeholder="ornek@firma.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-zinc-800 font-bold mb-2">
                                        Proje Türü / Konu *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors ${
                                            errors.subject ? 'border-red-500' : 'border-zinc-300'
                                        }`}
                                        placeholder="Örn: Temel Kazısı, Bina Yıkımı, Moloz Atımı"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-zinc-800 font-bold mb-2">
                                        Proje Detayları ve Mesajınız *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors resize-none ${
                                            errors.message ? 'border-red-500' : 'border-zinc-300'
                                        }`}
                                        placeholder="Lütfen işin yapılacağı yer, tahmini metraj veya proje detaylarını belirtin..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 rounded-xl text-lg font-black uppercase tracking-tight shadow-lg transition-all"
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