import React, { useState } from 'react';
import AppStoreBadge from '../../assets/app-store.svg';
import GooglePlayBadge from '../../assets/google-play.svg';

const DownloadSection = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleComingSoon = (e, storeName) => {
        e.preventDefault();
        setToastMessage(`Coming soon to ${storeName}!`);
        setShowToast(true);
        // Reset after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="resources" className="py-20 lg:py-32 bg-white text-center relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                        Your Works. Any Device.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
                        <span className="text-green-600 font-bold">FieldPaper</span> is available on iPhone, Android, and Web. Access your construction sites from the field, office, or home and never lose track of progress. Your data is secure, private, and fully exportable at any time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#"
                            className="transform transition-transform hover:scale-105"
                            onClick={(e) => handleComingSoon(e, 'App Store')}
                        >
                            <img src={AppStoreBadge} alt="Download on the App Store" className="h-[42px] sm:h-[54px] w-auto" />
                        </a>
                        <a
                            href="#"
                            className="transform transition-transform hover:scale-105"
                            onClick={(e) => handleComingSoon(e, 'Google Play')}
                        >
                            <img src={GooglePlayBadge} alt="Get it on Google Play" className="h-[42px] sm:h-[54px] w-auto" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom Toast Notification */}
            <div
                className={`fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center gap-3 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">{toastMessage}</span>
            </div>
        </section>
    );
};

export default DownloadSection;
