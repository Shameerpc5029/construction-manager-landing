import React from 'react';
import AppStoreBadge from '../../assets/app-store.svg';
import GooglePlayBadge from '../../assets/google-play.svg';

const DownloadSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-white text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                        Your Works. Any Device.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
                        <span className="text-green-600 font-bold">FieldPaper</span> is available on iPhone, Android, and Web. Access your construction sites from the field, office, or home and never lose track of progress. Your data is secure, private, and fully exportable at any time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" className="transform transition-transform hover:scale-105">
                            <img src={AppStoreBadge} alt="Download on the App Store" className="h-[54px] w-auto" />
                        </a>
                        <a href="#" className="transform transition-transform hover:scale-105">
                            <img src={GooglePlayBadge} alt="Get it on Google Play" className="h-[54px] w-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
