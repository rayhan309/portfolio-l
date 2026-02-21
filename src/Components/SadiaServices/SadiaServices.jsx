"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe, Smartphone, Zap, Code, ShieldCheck,
    BarChart3, X, CheckCircle2, ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Full-Stack Web Systems",
        desc: "Next.js, Node.js ebong MongoDB bebohar kore enterprise-grade scalable web applications toiri kori.",
        icon: <Globe size={32} className="text-blue-600" />,
        features: ["Custom Dashboard Design", "SSR & ISR Performance", "Scalable Database Schema", "Secure API Endpoints"]
    },
    {
        title: "Creative Animations",
        desc: "Framer Motion ebong GSAP bebohar kore brand-focused interactive experience toiri kori.",
        icon: <Zap size={32} className="text-amber-500" />,
        features: ["Smooth Scroll Effects", "Micro-interactions", "Lottie Vector Animations", "Immersive Transitions"]
    },
    {
        title: "E-commerce Solutions",
        desc: "Payment gateway integration shoho complex inventory management ebong online shop develop kori.",
        icon: <Smartphone size={32} className="text-purple-600" />,
        features: ["Secure Checkout Flows", "Admin Order Tracking", "Product Inventory System", "Dynamic Cart Logic"]
    },
    {
        title: "Custom API & Integration",
        desc: "Safe ebong blazing fast RESTful API toiri kori apnar digital ecosystem-er nirbachonprokriyay.",
        icon: <Code size={32} className="text-emerald-600" />,
        features: ["JWT Authentication", "Third-party Integrations", "Rate Limiting", "Webhooks Setup"]
    },
    {
        title: "Performance & SEO",
        desc: "Apnar site-er speed ebong SEO optmize kore Google ranking ebong user retention briddhi kori.",
        icon: <BarChart3 size={32} className="text-cyan-600" />,
        features: ["90+ Lighthouse Score", "Semantic SEO Structure", "Asset Optimization", "Core Web Vitals Fix"]
    },
    {
        title: "Secure Architecture",
        desc: "Auth.js ba NextAuth bebohar kore robust security ebong database design ensure kori.",
        icon: <ShieldCheck size={32} className="text-rose-600" />,
        features: ["Role-based Access", "Data Encryption", "CSRF/XSS Protection", "Session Management"]
    },
];

export default function SadiaServices() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="py-32 px-6 lg:px-24 bg-[#F8FAFC] relative overflow-hidden" id="services">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-rose-600 font-mono text-sm tracking-[0.3em] uppercase font-bold"
                    >
            // Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mt-4 italic text-slate-900"
                    >
                        SERVICES <span className="text-slate-200">&</span> SOLUTIONS.
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedService(service)}
                            className="p-10 rounded-[2.5rem] bg-white border border-slate-100 group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/5"
                        >
                            {/* Icon Container */}
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-50 transition-all duration-500">
                                {service.icon}
                            </div>

                            <h4 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {service.desc}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-xs font-black text-slate-300 group-hover:text-rose-500 transition-all">
                                LEARN MORE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal - Details Popup */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] cursor-zoom-out"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-x-6 top-[15%] md:left-1/2 md:ml-[-300px] md:w-[600px] bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl z-[101] border border-slate-100"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-8 right-8 p-2 bg-slate-50 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-6 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center">
                                {selectedService.icon}
                            </div>

                            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">
                                {selectedService.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed mb-8">
                                {selectedService.desc}
                            </p>

                            <div className="space-y-4 mb-10">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Core Features:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedService.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className="text-rose-500 flex-shrink-0" />
                                            <span className="text-sm font-bold text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-rose-600 transition-all group"
                            >
                                LET'S DISCUSS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}