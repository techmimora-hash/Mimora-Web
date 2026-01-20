import React from "react";

const AppDownloadSection: React.FC = () => {
    return (
        <section className="w-full relative bg-[#1E1E1E] overflow-hidden">
            {/* Background Overlay - Darkened slightly for contrast */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 md:px-10 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between min-h-[600px]">

                {/* Left Side: Text */}
                <div className="flex-1 max-w-[600px] mb-12 md:mb-0 text-center md:text-left">
                    <h2 className="text-white text-[36px] md:text-[48px] font-bold leading-tight mb-6">
                        Crafting our<br />Mobile Experience
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-[500px] mx-auto md:mx-0">
                        Get seamless access to all our beauty services on the go. Stay tuned for our upcoming mobile app.
                    </p>
                    <button
                        className="bg-[#FF4D8D] text-white rounded-full px-[18px] h-[40px] text-[15px] font-medium transition-transform duration-250 ease-out hover:scale-[1.02] active:scale-95"
                        aria-label="Notify me about the app"
                    >
                        Notify me
                    </button>
                </div>

                {/* Right Side: Phone Mockup */}
                <div className="flex-1 flex justify-center md:justify-end relative">
                    {/* 
                   Using 'Landing mobile.png' as the phone mockup based on file size and name context.
                   If this is actually a full mockup, we just display it. 
                */}
                    <img
                        src="/info/landing/Landing mobile.png"
                        alt="Mobile App Preview"
                        className="w-full max-w-[350px] md:max-w-[400px] drop-shadow-2xl transform translate-y-10 md:translate-y-0"
                    />
                </div>
            </div>

            {/* Background Image - Fallback or Actual */}
            {/* If 'Form Container.png' is the background, we use it here. 
            Given the name 'Landing mobile.png' is likely the foreground phone. 
            I will use a placeholder gradient or simple dark bg if no specific 'bg' image is confirmed, 
            but the code uses a dark bg color #1E1E1E as base. 
            If there is a specific BG image intended (e.g. 'landing laptop.png' used as cover?), 
            I'll stick to the safe dark theme requested by 'Darkened slightly'.
        */}
        </section>
    );
};

export default AppDownloadSection;
