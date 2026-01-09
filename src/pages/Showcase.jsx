import React from 'react';

const Showcase = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
                    Showcase
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* YouTube Video Section */}
                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up">
                        <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/kU2aadzeKlc?si=-Ce8VOFzs2bXUGGV"
                                title="Suno Beginners Guide"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-3">Suno for Beginners</h2>
                            <p className="text-gray-400">
                                Explore the possibilities of AI music generation. This guide walks through the basics of using Suno to create incredible audio tracks.
                            </p>
                        </div>
                    </div>

                    {/* Cat Song Composer Section */}
                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="h-64 bg-gradient-to-br from-pink-900 to-purple-900 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10 text-center p-4">
                                <span className="text-6xl mb-4 block">🐱🎵</span>
                                <h3 className="text-2xl font-bold text-white">Cat Composer AI</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-3">AI Cat Song Composer</h2>
                            <p className="text-gray-400">
                                An innovative AI-powered application designed specifically for creating catchy songs about cats. Experience the fun side of AI creativity!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
