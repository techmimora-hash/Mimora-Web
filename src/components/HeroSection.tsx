import { ChevronDown } from 'lucide-react';

function HeroSection() {
    return (
        <section className="w-full bg-white ">
            {/* Hero Content Container */}
            <div className="max-w-[1440px] mx-auto">
                {/* Headline */}
                <div className="pt-7 text-center">
                    <h1 className="leading-tight">
                        <span className="block font-semibold text-[#1E1E1E] text-5xl">
                            Pick Your
                        </span>
                        <span className="block font-bold italic text-[#E84A7F] text-5xl">
                            Favourite Artist
                        </span>
                    </h1>
                </div>

                {/* Image Collage Section - Full width edge to edge */}
                <div className="relative w-full overflow-hidden">
                    {/* Use the pre-composed collage image */}
                    <div className="w-full">
                        <img
                            src="/info/landing/hero/Group 625888.png"
                            alt="Beauty and makeup artists collage"
                            className="w-full h-auto object-cover min-w-screen ml-[calc(-50vw+50%)]"
                            loading="eager"
                        />
                    </div>

                    {/* Bottom gradient overlay - white fade */}
                    <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-[150px] bg-linear-to-t from-white via-white/50 to-transparent" />
                </div>
            </div>

            {/* How it works section */}
            <div className="w-full flex flex-col gap-6 items-center justify-center -mt-4 relative z-10">
                {/* Pink bounce button - sits above the grey strip */}
                <button
                    className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#E84A7F] shadow-lg shadow-[#E84A7F]/25 animate-gentle-bounce cursor-pointer hover:scale-105 transition-transform"
                >
                    <ChevronDown className="w-5 h-5 text-white" strokeWidth={2.5} />
                </button>

                {/* Grey strip with only "How it works" text */}
                <div className="w-full bg-[#F7F7F7]">
                    <div className="flex items-center justify-center gap-1 py-6 cursor-pointer hover:opacity-80 transition-opacity text-sm text-[#666666] font-medium">
                        <span>How it works</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
