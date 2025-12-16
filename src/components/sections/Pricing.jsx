import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../common/Button';

const plans = [
    {
        name: "Hobby",
        price: "07",
        currency: "Coins",
        period: "/ day",
        description: "Perfect for personal projects.",
        features: ["1 Team Member", "Project access provided", "Basic features", "Email support"],
        color: "bg-orange-500",
        buttonVariant: "outline"
    },
    {
        name: "Monthly",
        price: "30",
        currency: "Coins",
        period: "/ month",
        description: "Great for small teams.",
        features: ["10 Team Members", "Unlimited projects", "Priority support", "Advanced reporting", "Cloud storage"],
        color: "bg-primary", // Green
        popular: true,
        buttonVariant: "default"
    },
    {
        name: "Yearly",
        price: "365",
        currency: "Coins",
        period: "/ year",
        description: "Best for large organizations.",
        features: ["Unlimited Team Members", "Full API access", "Dedicated account manager", "Custom integrations", "White labeling"],
        color: "bg-blue-600",
        buttonVariant: "outline"
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Simple Pay-As-You-Go Pricing
                    </h2>
                    <p className="text-lg text-slate-600">
                        Choose the plan that best fits your construction needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-slate-100 hover:shadow-2xl'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                            )}
                            {/* Header Bar */}
                            <div className={`h-2 w-full ${plan.color}`} />

                            <div className="p-8">
                                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    <span className="text-sm font-semibold text-slate-500 ml-1">{plan.currency}</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm text-slate-700">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant={plan.buttonVariant} className="w-full">
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
