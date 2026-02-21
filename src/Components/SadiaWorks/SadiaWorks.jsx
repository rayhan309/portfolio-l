"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layout, Server, Zap, ArrowUpRight } from "lucide-react";

// Local Projects Data (Database chara ekhane project add korun)
const projects = [
    {
        id: 1,
        title: "Flexship IT Management",
        category: "Full-Stack",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        desc: "Complete employee and payroll management system with real-time updates.",
        tech: ["Next.js", "Socket.io", "MongoDB"],
        live: "#",
        github: "#"
    },
    {
        id: 2,
        title: "FairBazar E-Commerce",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2632&auto=format&fit=crop",
        desc: "A premium shopping experience with SSL Commerz & dark mode support.",
        tech: ["React", "Node.js", "Redux"],
        live: "#",
        github: "#"
    },
    {
        id: 3,
        title: "ChatNest App",
        category: "Full-Stack",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2670&auto=format&fit=crop",
        desc: "Real-time messaging platform with group chat and file sharing.",
        tech: ["Socket.io", "React", "Express"],
        live: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Xorit Skill Academy",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        desc: "Modern landing page with complex Framer Motion animations.",
        tech: ["Next.js", "GSAP", "Tailwind"],
        live: "#",
        github: "#"
    }
];

const categories = ["All", "Full-Stack", "E-Commerce", "UI/UX"];

export default function SadiaWorks() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="py-32 px-6 lg:px-24 bg-white" id="works">
            <div className="container mx-auto">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <span className="text-rose-500 font-mono text-sm font-bold tracking-[0.3em] uppercase">
              // Selected Works
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mt-4 leading-none">
                            FEATURED <br /> <span className="text-slate-200">PROJECTS.</span>
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === cat
                                    ? "bg-white text-rose-600 shadow-md"
                                    : "text-slate-400 hover:text-slate-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-slate-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                        <a href={project.live} className="p-4 bg-white rounded-full text-slate-900 hover:bg-rose-500 hover:text-white transition-all">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.github} className="p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-8 px-4 flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest px-2 py-1 bg-rose-50 rounded-lg">
                                                {project.category}
                                            </span>
                                            <div className="flex gap-1">
                                                {project.tech.slice(0, 2).map((t, i) => (
                                                    <span key={i} className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                        • {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 mt-2 text-sm line-clamp-1 max-w-sm">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <motion.div
                                        whileHover={{ rotate: 45 }}
                                        className="p-3 border border-slate-100 rounded-2xl text-slate-300 group-hover:text-rose-500 group-hover:border-rose-200 transition-all"
                                    >
                                        <ArrowUpRight size={24} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All on GitHub (Optional) */}
                <div className="mt-20 text-center">
                    <button className="px-12 py-5 border-2 border-slate-100 rounded-[2rem] font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500">
                        WANT TO SEE MORE? VISIT MY GITHUB
                    </button>
                </div>

            </div>
        </section>
    );
}