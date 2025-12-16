import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold text-slate-900">FieldPaper</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Manage production, improve quality, and simplify safety, all from one mobile-first platform.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company Info</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">About Us</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Careers</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Features</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Project Management</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Time Tracking</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Resource Planning</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary text-sm">Integration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Download App</h4>
                        <div className="flex flex-col gap-3">
                            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition-colors">
                                <div className="text-2xl"></div>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition-colors">
                                <div className="text-xl">▶</div>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-wider">Get it on</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">© 2024 FieldPaper Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="text-slate-400 text-sm">Privacy</span>
                        <span className="text-slate-400 text-sm">Security</span>
                        <span className="text-slate-400 text-sm">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
