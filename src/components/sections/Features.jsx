import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Smartphone, Users, ClipboardCheck, LayoutDashboard } from 'lucide-react';

// Assets
import Car1 from '../../assets/carousel-1.svg';
import Car2 from '../../assets/carousel-2.svg';
import Car3 from '../../assets/carousel-3.svg';
import Car4 from '../../assets/carousel-4.svg';
import Car5 from '../../assets/carousel-5.svg';
import Car6 from '../../assets/carousel-6.svg';
import Car7 from '../../assets/carousel-7.svg';
import Car8 from '../../assets/carousel-8.svg';
import Car9 from '../../assets/carousel-9.svg';
import Car10 from '../../assets/carousel-10.svg';


const features = [
    {
        id: "fieldpaper",
        title: "FieldPaper: Visualize your construction",
        description: "Get a real-time overview of active projects, tasks, and team status. Make informed decisions with live data updates at a glance.",
        borderColorOuter: "border-green-600",
        borderColorInner: "border-green-600",
        image: Car1,
        icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "employees",
        title: "Employees: Manage your workforce",
        description: "Manage your entire workforce from hiring to payroll. Track attendance, process salaries, and handle documents in one platform.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car2,
        icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "projects",
        title: "Projects: Manage all projects",
        description: "Monitor all construction sites from one centralized dashboard. Track progress, manage locations, and store documents with real-time sync.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car3,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "tasks",
        title: "Tasks: Never miss deadlines",
        description: "Create, assign, and track construction tasks with precision. Ensure deadlines are met with automated reminders and real-time updates.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car4,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "tools",
        title: "Tools: Track equipment inventory",
        description: "Track equipment inventory and usage across sites efficiently. Schedule maintenance and prevent losses with digital tracking.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car5,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "finance",
        title: "Finance: Control your budget",
        description: "Control your budget with complete financial transparency. Track credits, expenses, and payroll to keep projects profitable.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car6,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "materials",
        title: "Materials: Track your inventory",
        description: "Monitor stock levels and track usage across all projects. Get instant low-stock alerts to never run out of essential materials.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car7,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "settings",
        title: "Settings: Personalize your app",
        description: "Configure the app to match your workflow perfectly. Manage themes, notifications, and security preferences with ease.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car8,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "materials",
        title: "Materials: Track your inventory",
        description: "Monitor stock levels and track usage across all projects. Get instant low-stock alerts to never run out of essential materials.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car9,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
        id: "attendance",
        title: "Attendance: Track work hours",
        description: "Simplify tracking with digital clock-in/out for your team. Eliminate manual errors and integrate seamlessly with payroll.",
        borderColorOuter: "border-orange-500",
        borderColorInner: "border-orange-500",
        image: Car10,
        icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    }
];

const Features = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % features.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="features" className="py-20 lg:py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0 relative">

                {/* Slider Window */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {features.map((item, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center py-10">



                                <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 2xl:gap-20 w-full">
                                    {/* Left: Phone + Circles */}
                                    <div className="relative flex-shrink-0 md:min-h-[450px] xl:min-h-[550px] 2xl:min-h-[600px] md:flex md:items-center md:justify-center xl:w-[650px] 2xl:w-[800px]">
                                        {/* Circles */}
                                        <div className="absolute inset-0 flex items-center justify-center z-0">
                                            <div className={`absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] xl:w-[450px] xl:h-[450px] 4xl:w-[400px] 4xl:h-[400px] rounded-full border-4 ${item.borderColorOuter}`} />
                                            <div className={`absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] xl:w-[525px] xl:h-[525px] 2xl:w-[550px] 2xl:h-[550px] rounded-full border-2 ${item.borderColorOuter}`} />
                                            <div className={`absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border ${item.borderColorInner}`} />
                                        </div>

                                        {/* Phone Mockup */}
                                        <div className="relative z-10 w-[180px] md:w-[260px]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    {/* Right: Text */}
                                    <div className="max-w-md flex flex-col items-center text-center xl:items-start xl:text-left px-4 xl:px-0 2xl:px-20">
                                        <div className="mb-2">
                                            {/* Logo Icon */}
                                            <div className="w-12 h-12  items-center justify-center mb-2">
                                                <div className="text-blue-600">
                                                    {item.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {features.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-blue-600" : "w-3 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
