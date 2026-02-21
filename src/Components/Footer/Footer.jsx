"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Heart, Facebook } from "lucide-react";

export default function SadiaFooter() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/sadia-120", label: "Github" },
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/sa.di.a.591003", label: "Facebook" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/sa_dia3649?igsh=MWdic3B5YTRsYTh4bQ==", label: "Instagram" },
        { icon: <Twitter size={20} />, href: "https://www.instagram.com/sa_dia3649?igsh=MWdic3B5YTRsYTh4bQ==", label: "Twitter" },
    ];

    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12 px-6 lg:px-24 overflow-hidden">
            <div className="container mx-auto">

                {/* Top Section: Big Call to Action */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
                        >
                            HAVE AN IDEA? <br />
                            <span className="text-rose-500">LET'S TALK.</span>
                        </motion.h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="group flex flex-col cursor-pointer items-center gap-4"
                    >
                        <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-500">
                            <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                        </div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 group-hover:text-white transition-colors">
                            Back to Top
                        </span>
                    </motion.button>
                </div>

                {/* Middle Section: Links & Branding */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-t border-slate-800">
                    {/* Branding */}
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-black tracking-tighter mb-6">
                            SADIA<span className="text-rose-500">.</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                            Developing high-end digital solutions with a focus on clean code and immersive user experiences. Available for worldwide collaborations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Navigation</p>
                            <ul className="space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-bold text-slate-300 hover:text-rose-500 transition-colors uppercase tracking-tight">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Socials</p>
                            <ul className="space-y-2">
                                {socialLinks.map((social) => (
                                    <li key={social.label}>
                                        <a href={social.href} target="_blank" className="text-sm font-bold text-slate-300 hover:text-rose-500 transition-colors uppercase tracking-tight">
                                            {social.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter / Status */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-800">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Local Time</span>
                            </div>
                            <p className="text-xl font-bold font-mono">
                                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800 gap-6">
                    <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                        © {currentYear} ALL RIGHTS RESERVED — SADIA
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                        MADE WITH <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" /> BY SADIA
                    </div>
                    <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                        DHAKA, BANGLADESH
                    </p>
                </div>

            </div>
        </footer>
    );
}