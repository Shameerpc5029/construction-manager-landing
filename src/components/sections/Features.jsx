import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, LayoutDashboard, FileText, Smartphone, Play } from 'lucide-react';
const skills = [
    {
        title: "Manage projects. Build efficiently.",
        description: "Monitor all your construction projects from one centralized dashboard. Track progress, manage locations, update statuses, and store project documents. Never lose sight of any site with real-time synchronization across all your devices.",
        variant: "centered",
        // Removed imageSide, icon, and features for this variant as they are not needed
    },
    {
        title: "Visualize your construction",
        description: "Get real-time accuracy of all the projects, tasks, and team members performance. No more manual updates or spreadsheets.",
        imageSide: "left",
        icon: <FileText className="w-6 h-6 text-white" />,
        features: ["Performance tracking", "Automated reports", "Task visualization"]
    },
    {
        title: "Focus on what matters",
        description: "Create custom tasks and assign them to your team. Never lose track of progress and ensure everyone stays aligned.",
        imageSide: "right",
        icon: <Smartphone className="w-6 h-6 text-white" />,
        features: ["Task assignment", "Progress tracking", "Team alignment"]
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section Removed/Simplified as per new design implication or kept? Content matches the first item now. 
                    The reference image looks like it REPLACES the intro or IS a feature block. 
                    I'll keep the intro for now but the first Item is the main focus per request.
                */}

                {/* 
                   Actually, looking at the design, "Everyting you need..." might be a separate header. 
                   The user simply said "create this" pointing to "Manage projects...".
                   I will render the list.
                */}

                <div className="space-y-24 md:space-y-32">
                    {skills.map((item, index) => {
                        if (item.variant === "centered") {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center max-w-4xl mx-auto"
                                >
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-center">
                                        <button className="group flex items-center gap-3 text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors">
                                            <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                                            </span>
                                            Demo training
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        }

                        // Standard Layout for other items
                        return (
                            <div key={index} className={`flex flex-col ${item.imageSide === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="flex-1"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {item.features && item.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Image/Mockup Area */}
                                <motion.div
                                    initial={{ opacity: 0, x: item.imageSide === 'left' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative aspect-[4/3] bg-slate-50 rounded-2xl border-4 border-slate-100 shadow-2xl overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                                        {/* Placeholder content representing UI */}
                                        <div className="absolute inset-4 bg-white rounded-xl shadow-inner p-6 flex flex-col gap-4">
                                            <div className="h-8 w-1/3 bg-slate-100 rounded-lg" />
                                            <div className="flex gap-4">
                                                <div className="h-32 w-1/2 bg-blue-50 rounded-lg border border-blue-100" />
                                                <div className="h-32 w-1/2 bg-green-50 rounded-lg border border-green-100" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 w-full bg-slate-50 rounded" />
                                                <div className="h-4 w-5/6 bg-slate-50 rounded" />
                                                <div className="h-4 w-4/6 bg-slate-50 rounded" />
                                            </div>
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-green-100 p-2 rounded-lg">
                                                    <LayoutDashboard className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-semibold uppercase">Efficiency</p>
                                                    <p className="text-lg font-bold text-slate-900">+120%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
