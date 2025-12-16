import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

// Assets
import PhoneMockup from '../../assets/PhoneMockup.svg';
import AlarmClock from '../../assets/AlarmClock.svg';
import Clipboard from '../../assets/Clipboard.svg';
import GreenCard from '../../assets/GreenCard.svg';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white">

            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Image/Mockup Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto lg:mr-auto order-2 lg:order-1"
                    >
                        {/* Phone Mockup */}
                        <div className="relative z-10 w-[280px] md:w-[320px] mx-auto">
                            <img
                                src={PhoneMockup}
                                alt="App Dashboard Mockup"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Elements */}

                        {/* Alarm Clock - Top Left */}
                        <motion.img
                            src={AlarmClock}
                            alt="Alarm Clock"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-10 -left-10 w-24 md:w-32 z-20"
                        />

                        {/* Clipboard - Top Right */}
                        <motion.img
                            src={Clipboard}
                            alt="Clipboard"
                            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-0 -right-4 md:-right-12 w-20 md:w-28 z-0"
                        />

                        {/* Green Card - Middle Right */}
                        <motion.img
                            src={GreenCard}
                            alt="Status Card"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-16 md:-right-24 w-40 md:w-48 z-20 shadow-xl rounded-xl rotate-12"
                        />

                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 order-1 lg:order-2"
                    >
                        {/* Logo / Brand Name (Optional here if in Navbar, but matching reference maybe?) */}
                        {/* <div className="mb-6">
                            <span className="text-2xl font-bold flex items-center gap-2 justify-center lg:justify-start">
                                <span className="text-blue-600">Field</span>Paper
                            </span>
                         </div> */}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Construction <br />
                            Management Made <br />
                            <span className="">Simple</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            All-in-one platform to manage your construction projects, teams, materials, and finances from anywhere. Built by construction professionals, for construction professionals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto text-base bg-[#ff5733] hover:bg-[#e64a2e] text-white border-none shadow-orange-500/30">
                                Start 14 Days Trial
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
