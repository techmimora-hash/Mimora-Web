function Navbar() {
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white" style={{ height: '64px' }}>
            <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-10">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/info/common/logo.png"
                        alt="Mimora"
                        style={{ height: '28px', width: 'auto' }}
                        className="object-contain"
                    />
                </a>

                {/* Right side: Nav links + Login */}
                <div className="flex items-center gap-6">
                    {/* Nav Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#services"
                            className="text-[14px] font-medium text-[#2B2B2B] hover:text-[#1E1E1E] transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-[14px] font-medium text-[#2B2B2B] hover:text-[#1E1E1E] transition-colors"
                        >
                            Contact us
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        className="flex items-center justify-center bg-[#111111] text-white text-[13px] font-medium rounded-full transition-all duration-200 hover:scale-[1.02]"
                        style={{
                            height: '36px',
                            paddingLeft: '14px',
                            paddingRight: '14px',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
