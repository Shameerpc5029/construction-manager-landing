import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../common/Button';

const plans = [
    {
        name: "WEEKLY PASS",
        coins: "07",
        price: "₹199",
        duration: "7 Days Access",
        description: "Perfect for short-term projects or trial runs. Get full access to every feature including unlimited projects and team members for a week.",
        color: "bg-orange-500",
        headerColor: "bg-orange-500",
        popular: false
    },
    {
        name: "MOST POPULAR",
        coins: "30",
        price: "₹799",
        duration: "30 Days Access",
        description: "Our most popular choice. Enjoy uninterrupted access for a full month to keep your sites running smoothly without any limits.",
        color: "bg-green-600",
        headerColor: "bg-green-600",
        popular: true
    },
    {
        name: "YEARLY PRO",
        coins: "365",
        price: "₹7,999",
        duration: "365 Days Access",
        description: "The best value for growing businesses. Secure a full year of hassle-free management and dedicated support while saving big.",
        color: "bg-blue-600",
        headerColor: "bg-blue-600",
        popular: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start pt-10">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'md:-mt-10 md:mb-10 shadow-2xl z-10' : ''
                                }`}
                        >
                            {/* Colored Header */}
                            <div className={`${plan.headerColor} py-4 text-center`}>
                                <h3 className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
                                    {plan.name}
                                </h3>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                {/* Coins Count */}
                                <div className="flex items-end gap-2 mb-6 border-b border-gray-100 pb-6 border-dashed">
                                    <span className="text-6xl md:text-7xl font-bold text-slate-900 leading-none">
                                        {plan.coins}
                                    </span>
                                    <span className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                                        Coins
                                    </span>
                                </div>

                                {/* Price & Duration */}
                                <div className="mb-6">
                                    <div className="text-2xl font-medium text-slate-700 mb-1">
                                        {plan.price}
                                    </div>
                                    <div className="text-slate-500 font-medium">
                                        {plan.duration}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8">
                                    {plan.description}
                                </p>

                                <div className="mt-auto">
                                    <button
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                        onClick={() => window.open('https://workiee-manager-v1.web.app/', '_blank')}
                                    >
                                        Start 14 days trail
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
