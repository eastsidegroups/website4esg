import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
                    About Us
                </h1>

                <div className="bg-surface rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl animate-slide-up">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Eastside Groups LLC is a growing technology consultancy passionate about the frontier of Artificial Intelligence. We specialize in helping businesses navigate the rapidly evolving AI landscape.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-dark/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-purple-400 mb-3">Cloud Expertise</h3>
                                <p className="text-gray-400">
                                    Our team brings many years of experience building a wide variety of robust, scalable cloud-based software solutions across different industries.
                                </p>
                            </div>

                            <div className="bg-dark/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-blue-400 mb-3">cutting-edge Tools</h3>
                                <p className="text-gray-400">
                                    We are deeply embedded in the modern development ecosystem and remain very familiar with advanced tools like Google's Antigravity IDEs to deliver speed and quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
