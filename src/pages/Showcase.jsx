import React, { useState, useEffect } from 'react';

const Showcase = () => {
    const [os, setOs] = useState('unknown');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            setOs('android');
        } else if (/iPad|iPhone|iPod|Mac/i.test(userAgent) && !window.MSStream) {
            setOs('ios');
        } else {
            setOs('other');
        }
    }, []);

    const getStoreInfo = (androidUrl, iosUrl) => {
        if (os === 'ios') {
            return {
                text: 'View on Apple App Store',
                url: iosUrl
            };
        }
        return {
            text: 'View on Google Play Store',
            url: androidUrl
        };
    };

    const mnemosyneStore = getStoreInfo(
        "https://play.google.com/store/search?q=Mnemosyne%20Journal&c=apps",
        "https://apps.apple.com/us/iphone/search?term=mnemosyne%20journal"
    );

    const solitaireStore = getStoreInfo(
        "https://play.google.com/store/search?q=Solitaire%20Win-Only&c=apps",
        "https://apps.apple.com/us/iphone/search?term=solitaire%20win-only"
    );

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center animate-fade-in">
                    Showcase
                </h1>
                <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 animate-slide-up">
                    A selection of our recent projects. These applications were built and deployed using Google's suite of advanced AI products, demonstrating our capability to leverage cutting-edge tools for rapid, high-quality full-stack development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mnemosyne Journal Card */}
                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up flex flex-col group">
                        <div className="relative aspect-video overflow-hidden bg-gray-900">
                            <img 
                                src="https://play-lh.googleusercontent.com/Uc6AKHDzD9FhUfUdpWqQC1IKgH6BPt-vQvqjOGNwNyvcnipUvhQTHhOtf1y1Pxg2fl55ySVK3jyb8WpCr4OH" 
                                alt="Mnemosyne Journal Feature Graphic" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <a href={mnemosyneStore.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors shadow-lg">
                                    {mnemosyneStore.text}
                                </span>
                            </a>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <h2 className="text-2xl font-bold text-white mb-3">Mnemosyne Journal</h2>
                            <h3 className="text-lg font-medium text-gray-300 mb-4">Your Private, Unedited Sanctuary</h3>
                            <p className="text-gray-400 mb-6 flex-grow">
                                In an era where every thought seems destined for social media, Mnemosyne Journal brings back the sanctity of the traditional paper journal. Your true mood and authentic thoughts deserve a private place to call home. Engineered for complete local privacy, Mnemosyne is designed to be a faithful digital replication of a sealed notebook—safeguarding your most honest reflections.
                            </p>
                            <div className="pt-4 border-t border-gray-800">
                                <a href={mnemosyneStore.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium w-full justify-center">
                                    {mnemosyneStore.text}
                                </a>
                            </div>
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
                            <a href={solitaireStore.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors shadow-lg">
                                    {solitaireStore.text}
                                </span>
                            </a>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <h2 className="text-2xl font-bold text-white mb-3">Solitaire Win-Only</h2>
                            <h3 className="text-lg font-medium text-gray-300 mb-4">Guaranteed Winnable Deals</h3>
                            <p className="text-gray-400 mb-6 flex-grow">
                                Tired of unwinnable games? Enjoy a relaxing game of Solitaire where every single deal is 100% winnable! Perfect for unwinding, testing your skills, and enjoying guaranteed victories. Experience the classic card game with a refreshing twist that ensures a satisfying outcome every time you play.
                            </p>
                            <div className="pt-4 border-t border-gray-800">
                                <a href={solitaireStore.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium w-full justify-center">
                                    {solitaireStore.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
