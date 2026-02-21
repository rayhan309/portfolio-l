"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles, Github, Linkedin, MousePointer2, Zap, Globe, Layout, Facebook } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SadiaHero() {
    const containerRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text entrance animation
            gsap.from(".char", {
                y: 120,
                rotate: 10,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "expo.out",
            });

            // Subtle floating animation for background cards
            gsap.to(".floating-card", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center bg-[#fcfcfc] overflow-hidden"
        >
            {/* --- Background Dynamic Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-rose-200/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-200/30 rounded-full blur-[120px]" />
            </div>

            {/* --- Floating Interactive Cards (Visible on Desktop) --- */}
            <motion.div className="hidden xl:block absolute top-[20%] left-[12%] floating-card z-20">
                <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white flex items-center gap-3">
                    <div className="p-2 bg-rose-500 rounded-lg text-white"><Zap size={18} /></div>
                    <span className="text-xs font-bold text-slate-700">Fast Performance</span>
                </div>
            </motion.div>

            <motion.div className="hidden xl:block absolute bottom-[25%] right-[10%] floating-card z-20">
                <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white flex items-center gap-3">
                    <div className="p-2 bg-indigo-500 rounded-lg text-white"><Layout size={18} /></div>
                    <span className="text-xs font-bold text-slate-700">Clean Architecture</span>
                </div>
            </motion.div>

            {/* --- Main Content --- */}
            <div className="container mx-auto px-6 relative z-30 flex flex-col items-center">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="group flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm text-slate-500 text-[11px] font-black tracking-[0.25em] mb-12 hover:border-rose-200 transition-colors cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                    </span>
                    SADIA PORTFOLIO — 2026
                </motion.div>

                {/* Main Headline */}
                <div className="text-center mb-10 overflow-hidden">
                    <h1 className="text-[14vw] md:text-[9vw] font-black leading-[0.75] tracking-tighter text-slate-900 flex flex-wrap justify-center">
                        {"SADIA".split("").map((char, i) => (
                            <span key={i} className="char inline-block origin-bottom">{char}</span>
                        ))}
                        <span className="char inline-block text-transparent" style={{ WebkitTextStroke: "2px #f43f5e" }}>.</span>
                    </h1>
                </div>

                {/* Sub-headline & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="max-w-3xl text-center"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight mb-6">
                        Crafting <span className="text-rose-500">Immersive</span> Digital Experiences
                    </h2>
                    <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium px-4">
                        A Full-Stack Developer dedicated to building high-end,
                        scalable web systems using <span className="text-slate-900 font-bold border-b-2 border-rose-200">Next.js</span> and
                        <span className="text-slate-900 font-bold border-b-2 border-indigo-200"> GSAP</span>.
                        No Database, Just Pure Performance.
                    </p>
                </motion.div>

                {/* CTA & Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="mt-14 flex flex-col sm:flex-row items-center gap-8"
                >
                    <motion.a
                        href="#works"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 bg-slate-900 cursor-pointer text-white rounded-[2rem] font-bold flex items-center gap-4 hover:bg-rose-600 transition-all duration-500 shadow-2xl shadow-slate-300 group"
                    >
                        EXPLORE WORKS
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                            <ArrowRight size={14} />
                        </div>
                    </motion.a>

                    <div className="flex items-center gap-5">
                        <a href="https://github.com/sadia-120?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300">
                            <Github size={22} />
                        </a>
                        <a href="https://www.facebook.com/sa.di.a.591003" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                            <Facebook size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* Trust Stats (Database chara portfolio-r jonno perfect) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-slate-100 pt-10"
                >
                    <div className="text-center">
                        <p className="text-2xl font-black text-slate-900">12+</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Projects Done</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-black text-slate-900">99%</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Love</p>
                    </div>
                    <div className="text-center hidden md:block">
                        <p className="text-2xl font-black text-slate-900">0.5s</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg Load Time</p>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Gradient Overlay for Smooth Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-40" />
        </section>
    );
}