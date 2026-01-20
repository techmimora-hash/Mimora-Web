import React, { useState, useCallback, useEffect, useRef } from 'react';
import AuthInput from '../AuthInput';
import OTPInput from '../OTPInput';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton, { PhoneIcon, GoogleIcon } from '../SecondaryButton';

interface CustomerEmailSignupViewProps {
    fullName: string;
    email: string;
    otp: string[];
    onFullNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onOtpChange: (otp: string[]) => void;
    onSubmit: () => void;
    onPhoneSignIn: () => void;
    onGoogleSignIn: () => void;
    onLoginClick: () => void;
}

// Validation helpers
const validateFullName = (name: string): string | undefined => {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
        return 'Full name is required';
    }
    if (trimmedName.length < 2) {
        return 'Please enter your full name. Name should be at least 2 characters.';
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
        return 'Name can only contain letters and spaces';
    }
    return undefined;
};

const validateEmail = (email: string): string | undefined => {
    if (email.length === 0) {
        return 'Email address is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return undefined;
};

const validateOtp = (otp: string[]): string | undefined => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
        return 'Please enter all 6 digits';
    }
    return undefined;
};

const CustomerEmailSignupView: React.FC<CustomerEmailSignupViewProps> = ({
    fullName,
    email,
    otp,
    onFullNameChange,
    onEmailChange,
    onOtpChange,
    onSubmit,
    onPhoneSignIn,
    onGoogleSignIn,
    onLoginClick,
}) => {
    const [touched, setTouched] = useState({
        fullName: false,
        email: false,
        otp: false,
    });
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const timerRef = useRef<number | null>(null);

    // Get validation errors
    const fullNameError = touched.fullName ? validateFullName(fullName) : undefined;
    const emailError = touched.email ? validateEmail(email) : undefined;
    const otpError = touched.otp ? validateOtp(otp) : undefined;

    // Check if form is valid for getting OTP
    const isFormValid = !validateFullName(fullName) && !validateEmail(email);

    // Check if OTP is complete and valid
    const isOtpComplete = otp.join('').length === 6;
    const isOtpValid = !validateOtp(otp);

    // Timer effect
    useEffect(() => {
        if (otpSent && timer > 0) {
            timerRef.current = setTimeout(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [otpSent, timer]);

    const handleFullNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onFullNameChange(e.target.value);
    }, [onFullNameChange]);

    const handleFullNameBlur = useCallback(() => {
        setTouched(prev => ({ ...prev, fullName: true }));
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onEmailChange(e.target.value);
    }, [onEmailChange]);

    const handleEmailBlur = useCallback(() => {
        setTouched(prev => ({ ...prev, email: true }));
    }, []);

    const handleOtpChange = useCallback((newOtp: string[]) => {
        onOtpChange(newOtp);
        setTouched(prev => ({ ...prev, otp: true }));
    }, [onOtpChange]);

    const handleGetOtp = useCallback(() => {
        // Mark all fields as touched to show any errors
        setTouched(prev => ({ ...prev, fullName: true, email: true }));

        if (isFormValid) {
            setOtpSent(true);
            setTimer(30);
            setCanResend(false);
        }
    }, [isFormValid]);

    const handleResendOtp = useCallback(() => {
        if (canResend) {
            setTimer(30);
            setCanResend(false);
            // Reset OTP
            onOtpChange(['', '', '', '', '', '']);
            setTouched(prev => ({ ...prev, otp: false }));
        }
    }, [canResend, onOtpChange]);

    const handleSubmit = useCallback(() => {
        setTouched(prev => ({ ...prev, otp: true }));
        if (isOtpValid) {
            onSubmit();
        }
    }, [isOtpValid, onSubmit]);

    // Format timer as MM:SS
    const formatTimer = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="auth-view-enter">
            {/* Heading */}
            <h1 className={`font-semibold text-[#1E1E1E] leading-tight mb-1 ${otpSent ? 'text-[24px]' : 'text-[28px]'}`}>
                Create your account
            </h1>
            <p className={`text-sm text-[#6B6B6B] ${otpSent ? 'mb-4' : 'mb-8'}`}>
                Join Mimora to book trusted professionals.
            </p>

            {/* Form */}
            <div className={otpSent ? 'space-y-2' : 'space-y-4'}>
                <AuthInput
                    label="Full name"
                    placeholder="Eg. Naveen Kumar"
                    value={fullName}
                    onChange={handleFullNameChange}
                    onBlur={handleFullNameBlur}
                    error={fullNameError}
                    disabled={otpSent}
                    compact={otpSent}
                />

                <AuthInput
                    label="Email address"
                    type="email"
                    placeholder="Eg. name@company.com"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={!otpSent ? emailError : undefined}
                    disabled={otpSent}
                    compact={otpSent}
                />

                {/* OTP Section - appears after Create Account is clicked */}
                {otpSent && (
                    <div className="mt-2 animate-fade-in">
                        <label className="block text-xs text-[#6B6B6B] mb-1">
                            Enter OTP (One Time Password)
                        </label>
                        <OTPInput
                            value={otp}
                            onChange={handleOtpChange}
                            error={otpError}
                            length={6}
                            compact
                        />

                        {/* Timer and Resend */}
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-[#6B6B6B]">
                                {formatTimer(timer)}
                            </span>
                            <button
                                onClick={handleResendOtp}
                                disabled={!canResend}
                                className={`text-xs font-medium underline transition-colors ${canResend
                                    ? 'text-[#1E1E1E] hover:text-[#E91E63] cursor-pointer'
                                    : 'text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Create Account / Verify Button */}
            <div className={otpSent ? 'mt-3' : 'mt-6'}>
                {!otpSent ? (
                    <PrimaryButton
                        onClick={handleGetOtp}
                        disabled={!isFormValid}
                    >
                        Create account
                    </PrimaryButton>
                ) : (
                    <PrimaryButton
                        onClick={handleSubmit}
                        disabled={!isOtpComplete}
                        compact
                    >
                        Create account
                    </PrimaryButton>
                )}
            </div>

            {/* Divider */}
            <div className={`flex items-center gap-4 ${otpSent ? 'my-3' : 'my-6'}`}>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Secondary Options */}
            <div className={otpSent ? 'space-y-2' : 'space-y-3'}>
                <SecondaryButton icon={<PhoneIcon />} onClick={onPhoneSignIn} compact={otpSent}>
                    Sign in with Phone
                </SecondaryButton>
                <SecondaryButton icon={<GoogleIcon />} onClick={onGoogleSignIn} compact={otpSent}>
                    Sign in with Google
                </SecondaryButton>
            </div>

            {/* Footer Link */}
            <p className={`text-center text-sm text-[#6B6B6B] ${otpSent ? 'mt-4' : 'mt-8'}`}>
                Already have an account?{' '}
                <button
                    onClick={onLoginClick}
                    className="font-semibold text-[#1E1E1E] hover:underline"
                >
                    Log in
                </button>
            </p>
        </div>
    );
};

export default CustomerEmailSignupView;
