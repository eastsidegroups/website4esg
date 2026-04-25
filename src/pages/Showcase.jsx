import React from 'react';

const Showcase = () => {
    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
                    Showcase
                </h1>

                    {/* YouTube Video Section */}


                    <div className="bg-surface rounded-2xl overflow-hidden border border-gray-800 shadow-xl animate-slide-up">
                        <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] bg-black">


<a href="https://play.google.com/store/apps/details?id=com.newmnemosyne.app&hl=en_US" target="_blank" rel="noopener noreferrer">
  Download on Google Play
</a>



                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-3">Mnemosyne Journal: Your Private, Unedited Sanctuary</h2>
                            <p className="text-gray-400">
                                In an era where every thought seems destined for social media, Mnemosyne Journal brings back the sanctity of the traditional paper journal. Your true mood and authentic thoughts deserve a private place to call home. Engineered for complete local privacy, Mnemosyne is designed to be a faithful digital replication of a sealed notebook—safeguarding your most honest reflections.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Showcase;
