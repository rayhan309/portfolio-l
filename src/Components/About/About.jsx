"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { User, Code2, Palette, Cpu, Rocket, Heart, Zap } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SadiaAbout() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-item", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const coreSkills = [
        { name: "Next.js & React", icon: <Cpu size={20} />, color: "bg-rose-50 text-rose-600" },
        { name: "Animation (GSAP)", icon: <Palette size={20} />, color: "bg-indigo-50 text-indigo-600" },
        { name: "Node.js Backend", icon: <Code2 size={20} />, color: "bg-emerald-50 text-emerald-600" },
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 lg:px-24 bg-white overflow-hidden" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- Left Side: Aesthetic Image/Box --- */}
                    <div className="lg:col-span-5 relative reveal-item">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-slate-900 rounded-[3rem] translate-x-4 translate-y-4 z-0" />
                            {/* Image Placeholder with Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-indigo-100 rounded-[3rem] z-10 overflow-hidden flex items-center justify-center">
                                <User size={120} className="text-white/50" />
                                {/* Real Image Thakle ekhane <Image /> use korben */}
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -right-8 top-1/4 p-6 bg-white shadow-2xl rounded-3xl z-20 border border-slate-50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        <Rocket size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Status</p>
                                        <p className="text-sm font-black text-slate-900">Always Learning</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- Right Side: Content --- */}
                    <div className="lg:col-span-7">
                        <motion.div className="reveal-item">
                            <span className="text-rose-500 font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                // About Me
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                                Mixing <span className="text-slate-300 italic">Logic</span> with Creativity.
                            </h2>

                            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl font-medium">
                                I’m Sadia, a software engineer who loves turning complex code into
                                beautiful, user-friendly interfaces. My journey started with a curiosity
                                for how things work on the web, and now I specialize in building
                                <span className="text-slate-900 font-bold"> high-performance systems </span>
                                that feel alive.
                            </p>
                        </motion.div>

                        {/* Core Skills Chips */}
                        <div className="flex flex-wrap gap-4 mb-10 reveal-item">
                            {coreSkills.map((skill, i) => (
                                <div key={i} className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm border border-transparent hover:border-slate-100 transition-all ${skill.color}`}>
                                    {skill.icon}
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        {/* Personalized "Fact" Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-item">
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <Heart className="text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">User Centric</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">I don't just write code; I design experiences that people love to interact with every day.</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <Zap className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Fast Leaner</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Adapting to new technologies like Gatsby or Socket.io is my playground. I thrive in evolution.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}