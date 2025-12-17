import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const { data, error } = await supabase
                .from('subscription_plans')
                .select('*')
                .eq('is_active', true)
                .order('coin_amount', { ascending: true });

            if (error) throw error;

            // Transform data to match UI requirements
            const transformedPlans = data.map((plan, index) => {
                // Determine styling based on index or plan properties
                const styles = getPlanStyles(index);

                return {
                    id: plan.id,
                    name: plan.plan_name,
                    coins: plan.coin_amount.toString().padStart(2, '0'),
                    price: `₹${plan.price}`,
                    duration: formatDuration(plan.plan_type),
                    description: plan.description,
                    color: styles.color,
                    headerColor: styles.headerColor,
                    popular: index === 1, // Highlight the middle plan as popular for now
                };
            });

            setPlans(transformedPlans);
        } catch (error) {
            console.error('Error fetching plans:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (type) => {
        const typeMap = {
            '1_month': '30 Days Access',
            '3_months': '90 Days Access',
            '6_months': '180 Days Access',
            '12_months': '365 Days Access'
        };
        return typeMap[type] || type.replace('_', ' ');
    };

    const getPlanStyles = (index) => {
        const styles = [
            { color: 'bg-orange-500', headerColor: 'bg-orange-500' },
            { color: 'bg-green-600', headerColor: 'bg-green-600' },
            { color: 'bg-blue-600', headerColor: 'bg-blue-600' },
            { color: 'bg-purple-600', headerColor: 'bg-purple-600' },
        ];
        return styles[index % styles.length];
    };

    if (loading) {
        return (
            <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-slate-200 rounded w-1/4 mx-auto"></div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-96 bg-slate-200 rounded-2xl"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto items-start pt-10">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full md:w-[calc((100%-4rem)/3)] ${plan.popular ? 'md:-mt-10 md:mb-10 shadow-2xl z-10' : ''
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

                                {/* <div className="mt-auto">
                                    <button
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                        onClick={() => window.open('https://workiee-manager-v1.web.app/', '_blank')}
                                    >
                                        Start 14 days trail
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
