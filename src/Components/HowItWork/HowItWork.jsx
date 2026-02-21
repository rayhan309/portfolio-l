"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, PenTool, Code2, Rocket, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        title: "Discovery & Planning",
        desc: "Prothome ami apnar requirement ebong goal gulo bujhi. Ekhane amra tech-stack ebong design strategy fix kori.",
        icon: <Search className="text-rose-500" />,
        color: "rose"
    },
    {
        title: "UI/UX Architecture",
        desc: "Next.js ba React-e code korar agey ami Figma ba framework-er maddhome ekti shundor interactive structure toiri kori.",
        icon: <PenTool className="text-indigo-500" />,
        color: "indigo"
    },
    {
        title: "High-End Development",
        desc: "Ekti pixel-perfect, mobile-responsive frontend ebong secure backend (Next.js/Node.js) build kori.",
        icon: <Code2 className="text-emerald-500" />,
        color: "emerald"
    },
    {
        title: "Launch & Support",
        desc: "Project-ti Vercel ba VPS-e deploy kori ebong SEO-optmization shoho live production-e niye jai.",
        icon: <Rocket className="text-amber-500" />,
        color: "amber"
    }
];

export default function SadiaProcess() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Progress Line Animation
            gsap.from(".progress-line", {
                scaleY: 0,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                    trigger: ".process-container",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            });

            // Step Reveal
            gsap.utils.toArray(".process-step").forEach((step, i) => {
                gsap.from(step, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 lg:px-24 bg-[#FAFBFF] overflow-hidden">
            <div className="container mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-indigo-600 font-mono text-sm font-bold tracking-[0.3em] uppercase"
                    >
            // Efficiency
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mt-4">
                        HOW I <span className="text-slate-200">WORK_</span>
                    </h2>
                </div>

                {/* Process Roadmap */}
                <div className="relative max-w-5xl mx-auto process-container">

                    {/* Central Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 overflow-hidden">
                        <div className="progress-line w-full h-full bg-indigo-600" />
                    </div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-right w-full">
                                    <div className={`inline-block p-4 rounded-3xl mb-6 bg-white shadow-xl border border-slate-50 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold text-slate-900 mb-4 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {index + 1}. {step.title}
                                    </h3>
                                    <p className={`text-slate-500 leading-relaxed max-w-sm mx-auto ${index % 2 !== 0 ? 'md:ml-0 md:mr-auto md:text-left' : 'md:mr-0 md:ml-auto md:text-right'}`}>
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Center Circle Indicator */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-white border-4 border-indigo-600 shadow-xl flex items-center justify-center">
                                        <CheckCircle2 size={20} className="text-indigo-600" />
                                    </div>
                                </div>

                                {/* Empty Side (For Balanced Spacing) */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}