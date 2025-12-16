import React from 'react';
import PhoneMockup from '../../assets/iPhone.svg';
import Pictures from '../../assets/Pictures.svg';

const BuildSmarter = () => {
    return (
        <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            Start now and build smarter
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Managing construction projects shouldn't be a headache. FieldPaper brings your team, tasks, and tools together in one powerful platform.
                        </p>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Say goodbye to scattered spreadsheets and hello to real-time progress tracking, automated attendance, and precise inventory management. Take the first step towards a more organised and profitable business today.
                        </p>

                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg shadow-green-600/20">
                            Get Started
                        </button>
                    </div>

                    {/* Right Visuals */}
                    <div className="flex-1 w-full relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-fit">
                            {/* Background Circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-none border border-green-500/20 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[480px] md:h-[480px] bg-none border border-green-500/30 rounded-full" />

                            {/* Main Phone */}
                            <div className="relative z-10 w-[240px] md:w-[280px]">
                                <img src={PhoneMockup} alt="App Dashboard" className="w-full h-auto drop-shadow-2xl" />
                            </div>

                            {/* Floating Pictures (Overlaid) */}
                            <div className="absolute top-1/2 -left-20 md:-left-32 -translate-y-1/2 z-20 w-[200px] md:w-[320px]">
                                <img src={Pictures} alt="Features Preview" className="w-full h-auto drop-shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildSmarter;
