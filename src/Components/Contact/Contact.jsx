"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

export default function SadiaContact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // Database chara email pathanor jonno Web3Forms bebohar kora hoyeche
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // developers.web3forms.com theke key nite hobe

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setIsSent(true);
            e.target.reset();
        }
        setIsSubmitting(false);
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
                            Apnar idea-ke reality-te rupantor korte ami prostut. Shudhu ekti message pathan, ami khub druto reply debo.
                        </p>

                        <div className="mt-12 space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Me</p>
                                    <p className="text-lg font-bold text-slate-900">hello@sadia.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Me</p>
                                    <p className="text-lg font-bold text-slate-900">+880 1XXX XXXXXX</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-16 flex gap-4">
                            {[Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* --- Right Side: Contact Form --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Your Name</label>
                                    <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Email Address</label>
                                    <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Subject</label>
                                <input required name="subject" type="text" placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Message</label>
                                <textarea required name="message" rows="5" placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"></textarea>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
                            >
                                {isSubmitting ? "SENDING..." : isSent ? "MESSAGE SENT! ✅" : "SEND MESSAGE"}
                                {!isSubmitting && !isSent && <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Footer Copyright */}
            <div className="container mx-auto mt-32 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-xs font-medium">© 2026 SADIA. ALL RIGHTS RESERVED.</p>
                <p className="text-slate-400 text-xs font-medium">MADE WITH NEXT.JS & LOVE.</p>
            </div>
        </section>
    );
}