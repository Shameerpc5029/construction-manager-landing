import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                            FieldPaper
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#features" className="text-slate-600 hover:text-primary transition-colors font-medium">Features</a>
                        <a href="#solutions" className="text-slate-600 hover:text-primary transition-colors font-medium">Solutions</a>
                        <a href="#resources" className="text-slate-600 hover:text-primary transition-colors font-medium">Resources</a>
                        <a href="#pricing" className="text-slate-600 hover:text-primary transition-colors font-medium">Pricing</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Button variant="default" size="default">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-slate-100 shadow-lg">
                        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Features</a>
                        <a href="#solutions" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Solutions</a>
                        <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Pricing</a>
                        <div className="pt-4 pb-2">
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
