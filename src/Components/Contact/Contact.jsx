"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, Facebook } from "lucide-react";

export default function SadiaContact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // const formData = new FormData(e.target);
        // formData.append("access_key", "YOUR_ACCESS_KEY_HERE");


        setIsSent(true);

    };

    return (
        <section className="py-32 px-6 lg:px-24 bg-white relative overflow-hidden" id="contact">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* --- Left Side: Contact Info --- */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-rose-600 font-mono text-sm font-bold tracking-[0.3em] uppercase"
                        >
                            // Get in Touch
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mt-4 leading-none">
                            LET'S START <br /> A <span className="text-slate-200">PROJECT.</span>
                        </h2>
                        <p className="mt-8 text-slate-500 text-lg max-w-md leading-relaxed">
                            I’m ready to turn your idea into reality. Just send a message, and I’ll get back to you very quickly.
                        </p>

                        <div className="mt-12 space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Me</p>
                                    <p className="text-lg font-bold text-slate-900">sadia456745@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Me</p>
                                    <p className="text-lg font-bold text-slate-900">+880 1783-695240</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-4">
                            {[{ Icon: Github, href: "https://github.com/sadia-120" }, { Icon: Facebook, href: "https://www.facebook.com/sa.di.a.591003" }, { Icon: Instagram, href: "#" }].map((Icon, i) => (
                                <a key={i} href={Icon.href} target="_blank" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-all">
                                    <Icon.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* --- Right Side: Conditional Form/Success --- */}
                    <div className="relative min-h-[500px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isSent ? (
                                <motion.div
                                    key="contact-form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="w-full bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
                                >
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Your Name</label>
                                                <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none text-gray-800 focus:ring-2 focus:ring-rose-500/20 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Email Address</label>
                                                <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none text-gray-800 focus:ring-2 focus:ring-rose-500/20 transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Subject</label>
                                            <input required name="subject" type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none text-gray-800 focus:ring-2 focus:ring-rose-500/20 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Message</label>
                                            <textarea required name="message" rows="5" placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none text-gray-800 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"></textarea>
                                        </div>
                                        <button
                                            disabled={isSubmitting}
                                            className="w-full py-5 cursor-pointer bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
                                        >
                                            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                                            {!isSubmitting && <Send size={18} />}
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", damping: 12 }}
                                    className="w-full bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl flex flex-col items-center text-center"
                                >
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} className="text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">MESSAGE SENT!</h3>
                                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                                        Thank you, Sadia has received your inquiry. <br />
                                        Expected response time: <strong>under 24 hours.</strong>
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsSent(false)
                                            setIsSubmitting(false)
                                        }}
                                        className="px-8 py-3 cursor-pointer text-slate-400 hover:text-slate-900 font-bold text-xs tracking-widest uppercase transition-all"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* <div className="container mx-auto mt-32 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-xs font-medium">© 2026 SADIA. ALL RIGHTS RESERVED.</p>
                <p className="text-slate-400 text-xs font-medium">MADE WITH NEXT.JS & LOVE.</p>
            </div> */}
        </section>
    );
}