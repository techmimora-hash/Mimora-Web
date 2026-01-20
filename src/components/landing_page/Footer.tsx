import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#FAFAFA] border-t border-gray-200 py-12">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                {/* Left: Copyright & Links */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-[13px] text-[#6B6B6B]">
                    <span>© 2024 Mimora. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
                        <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
                        <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
                    </div>
                </div>

                {/* Right: Selectors */}
                <div className="flex items-center gap-4">
                    {/* Language Selector */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-[13px] text-[#6B6B6B] group-hover:opacity-70 transition-opacity">English (US)</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="w-[1px] h-4 bg-gray-300"></div>

                    {/* Currency Selector */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-[13px] text-[#6B6B6B] group-hover:opacity-70 transition-opacity">USD</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
