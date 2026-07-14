import React from 'react';

const HeroImage = () => {
    return (
        <div className="relative w-8 h-8 shrink-0 text-white" data-name="ic-excavator">
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Ekskavatör / Kepçe Gövde ve Palet Yapısı */}
                <path
                    d="M2 18C2 16.8954 2.89543 16 4 16H14C15.1046 16 16 16.8954 16 18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18Z"
                    fill="currentColor"
                />
                <path
                    d="M5 11H11V15H5V11Z"
                    fill="currentColor"
                />
                {/* Hidrolik Kol ve Kova (Kepçe) Kısmı */}
                <path
                    d="M10 13L16 7H20L19 10L22 12L19 14H15L10 13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Palet İçi Küçük Tekerlek Detayları */}
                <circle cx="5" cy="18" r="1" fill="black" />
                <circle cx="9" cy="18" r="1" fill="black" />
                <circle cx="13" cy="18" r="1" fill="black" />
            </svg>
        </div>
    );
};

export default HeroImage;