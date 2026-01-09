import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Eastside Groups
                        </span>
                        <p className="mt-2 text-sm text-gray-400">
                            Consulting & AI Partnerships
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <div className="flex space-x-6 mb-4">
                            <a href="mailto:eastsidegroups@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                Email Us
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="tel:+13603620505" className="text-gray-400 hover:text-white transition-colors">
                                +1 (360) 362-0505
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} Eastside Groups LLC. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
