import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-purple-900/10 to-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Eastside Groups LLC
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        Delivering robust software solutions for over a decade. Now pioneering the next generation of AI-accelerated applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                        <Link to="/contact">
                            <Button variant="primary" className="text-lg px-8 py-3">
                                Start a Project
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="secondary" className="text-lg px-8 py-3">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-dark/80 relative z-10 border-t border-b border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Eastside Groups?</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🗓️</div>
                            <h3 className="text-xl font-bold text-white mb-2">10+ Years Experience</h3>
                            <p className="text-gray-400">Surviving and thriving in tech for a decade, providing a foundation of proven reliability.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-2">End-to-End Execution</h3>
                            <p className="text-gray-400">From cloud infrastructure to UI, bringing ideas seamlessly to the App Store or Web.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-2">AI-Powered Efficiency</h3>
                            <p className="text-gray-400">Leveraging the latest AI tools to build better software, faster and smarter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-dark relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-surface p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-purple-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors">
                                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Consulting Services</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Expert guidance in AI product development. From ideation to deployment, we help you navigate the complex landscape of artificial intelligence to build robust, scalable solutions.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                    AI Strategy & Roadmap
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                    Custom Model Fine-tuning
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                    Full-stack AI Integration
                                </li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-surface p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Startup Partnerships</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                We partner with ambitious startups to co-develop innovative AI products. We bring technical expertise and resources to help turn visionary ideas into market-ready realities.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Co-development & Equity
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Technical Due Diligence
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Rapid Prototyping
                                </li>
                            </ul>
                        </div>
                        {/* Service 3 */}
                        <div className="bg-surface p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-colors duration-300 group">
                            <div className="w-16 h-16 bg-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600/20 transition-colors">
                                <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Full-Stack & Mobile</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Professional software development across all layers: Cloud, Databases, Servers, Web, and UIs. We love partnering to publish your apps on Google Play or the Web.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                                    Web & Mobile Apps
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                                    Database & Cloud Arch.
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                                    Google Play Publishing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
