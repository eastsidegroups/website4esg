import React from 'react';

const Showcase = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
                    Showcase
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mnemosyne Journal Card */}
                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up flex flex-col group">
                        <div className="relative aspect-video overflow-hidden bg-gray-900">
                            <img 
                                src="https://play-lh.googleusercontent.com/Uc6AKHDzD9FhUfUdpWqQC1IKgH6BPt-vQvqjOGNwNyvcnipUvhQTHhOtf1y1Pxg2fl55ySVK3jyb8WpCr4OH" 
                                alt="Mnemosyne Journal Feature Graphic" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <a href="https://play.google.com/store/apps/details?id=com.newmnemosyne.app&hl=en_US" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors shadow-lg">
                                    View on Google Play
                                </span>
                            </a>
                        </div>
                        <div className="p-8 flex-grow">
                            <h2 className="text-2xl font-bold text-white mb-3">Mnemosyne Journal</h2>
                            <h3 className="text-lg font-medium text-gray-300 mb-4">Your Private, Unedited Sanctuary</h3>
                            <p className="text-gray-400">
                                In an era where every thought seems destined for social media, Mnemosyne Journal brings back the sanctity of the traditional paper journal. Your true mood and authentic thoughts deserve a private place to call home. Engineered for complete local privacy, Mnemosyne is designed to be a faithful digital replication of a sealed notebook—safeguarding your most honest reflections.
                            </p>
                        </div>
                    </div>

                    {/* Solitaire Win-Only Card */}
                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up delay-100 flex flex-col group">
                        <div className="relative aspect-video overflow-hidden bg-gray-900">
                            <img 
                                src="/solitaire_feature_graphic.png" 
                                alt="Solitaire Win-Only Feature Graphic" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <a href="https://play.google.com/store/search?q=Solitaire+Win-Only&c=apps" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors shadow-lg">
                                    View on Google Play
                                </span>
                            </a>
                        </div>
                        <div className="p-8 flex-grow">
                            <h2 className="text-2xl font-bold text-white mb-3">Solitaire Win-Only</h2>
                            <h3 className="text-lg font-medium text-gray-300 mb-4">Guaranteed Winnable Deals</h3>
                            <p className="text-gray-400">
                                Tired of unwinnable games? Enjoy a relaxing game of Solitaire where every single deal is 100% winnable! Perfect for unwinding, testing your skills, and enjoying guaranteed victories. Experience the classic card game with a refreshing twist that ensures a satisfying outcome every time you play.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
