import React, { useState } from 'react';
import PhoneMockup from '../../assets/iPhone-13-Pro-Front.svg';

const FocusSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Boost productivity by 60%",
            description: "Eliminate manual paperwork and repetitive administrative tasks. FieldPaper automates your daily workflows, reporting, and tracking, allowing your team to complete projects faster and more efficiently than ever before."
        },
        {
            title: "Reduce costly errors",
            description: "Minimize mistakes with real-time data sync and automated validation. Ensure everyone is working from the latest plans and documents."
        },
        {
            title: "Access from anywhere",
            description: "Manage your construction sites from the office, the field, or home. Our cloud-based platform ensures you're always connected."
        }
    ];

    return (
        <section id="solutions" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Focus on what matters
                    </h2>
                    <p className="text-lg text-slate-600">
                        Streamline your construction management so you can spend less time on paperwork and more time building.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                    {/* Left: Tabs */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="space-y-8">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer group"
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="flex gap-6">
                                        {/* Indicator Line */}
                                        <div className={`w-1 flex-shrink-0 rounded-full transition-colors duration-300 ${activeTab === index ? "bg-yellow-400" : "bg-slate-200 group-hover:bg-slate-300"
                                            }`} />

                                        <div className="pb-2">
                                            <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${activeTab === index ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                                                }`}>
                                                {tab.title}
                                            </h3>

                                            {/* Expandable Description */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                                }`}>
                                                <p className="text-slate-600 leading-relaxed">
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Phone */}
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative w-[220px] sm:w-[280px] md:w-[320px]">
                            <img
                                src={PhoneMockup}
                                alt="App Dashboard"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center mt-20">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    Get Started
                </button>
            </div> */}
        </section>
    );
};

export default FocusSection;
