"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, PenTool, Code2, Rocket, CheckCircle2, Zap } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        title: "Discovery & Strategy",
        desc: "I dive deep into your requirements to understand your core goals, target audience, and define the perfect tech-stack for scalability.",
        icon: <Search className="text-rose-500" />,
        color: "rose"
    },
    {
        title: "Design Architecture",
        desc: "Crafting intuitive UI/UX structures and wireframes that prioritize user engagement and seamless navigation across all devices.",
        icon: <PenTool className="text-indigo-500" />,
        color: "indigo"
    },
    {
        title: "Development & Logic",
        desc: "Turning designs into reality with clean, performant code using Next.js and robust backend systems for a glitch-free experience.",
        icon: <Code2 className="text-emerald-500" />,
        color: "emerald"
    },
    {
        title: "Deployment & Growth",
        desc: "Optimizing for SEO and performance before launching your project to production, followed by continuous support and updates.",
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

            // Step Reveal with a smoother stagger
            gsap.utils.toArray(".process-step").forEach((step, i) => {
                gsap.from(step, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 lg:px-24 bg-[#FAFBFF] overflow-hidden" id="process">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 mb-6"
                    >
                        <Zap size={14} className="fill-indigo-600" />
                        <span className="font-mono text-xs font-bold tracking-widest uppercase">Workflow</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
                        MY WORKING <br /> <span className="text-slate-200 italic">METHODOLOGY_</span>
                    </h2>
                </div>

                {/* Process Roadmap */}
                <div className="relative max-w-6xl mx-auto process-container">

                    {/* Central Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 overflow-hidden">
                        <div className="progress-line w-full h-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className={`flex-1 w-full ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className={`inline-block p-5 rounded-[2rem] mb-8 bg-white shadow-2xl shadow-slate-200/50 border border-slate-50 transition-transform hover:scale-110 duration-500`}>
                                        {step.icon}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                                        <span className="text-slate-200 mr-2 font-mono">0{index + 1}.</span> {step.title}
                                    </h3>

                                    <p className={`text-slate-500 text-lg leading-relaxed max-w-sm ${index % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Center Circle Indicator */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-white border-[6px] border-[#FAFBFF] shadow-2xl flex items-center justify-center relative">
                                        <div className="absolute inset-0 rounded-full border-2 border-indigo-600 animate-pulse opacity-20" />
                                        <CheckCircle2 size={24} className="text-indigo-600" />
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