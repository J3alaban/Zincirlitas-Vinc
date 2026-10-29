import React from 'react';

const HeroImage = () => {
    return (
        <div className="relative w-8 h-8 shrink-0 text-white" data-name="ic-crane">
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Kamyon Şasi ve Tekerlek Tabanı */}
                <path
                    d="M2 17C2 16.4477 2.44772 16 3 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17Z"
                    fill="currentColor"
                />
                {/* Tekerlekler */}
                <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                <circle cx="14" cy="18" r="1.5" fill="currentColor" />

                {/* Teleskopik Vinç Bomu (Yükselen Kol) */}
                <path
                    d="M7 16L17 6M10 6H17V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Uç Kısımdaki Çalışma Sepeti (Platform) */}
                <path
                    d="M15 4H19V8H15V4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
            </svg>
        </div>
    );
};

export default HeroImage;