import React from 'react';

interface LogoProps {
  width?: string | number;
  height?: string | number;
  primaryColor?: string; // İş makinesi ve ana metin rengi (Örn: İnşaat sarısı)
  secondaryColor?: string; // Toprak ve alt metin rengi (Örn: Koyu gri/Siyah)
}

const HafriyatLogo: React.FC<LogoProps> = ({
  width = "100%",
  height = "auto",
  primaryColor = "#F59E0B", // Amber / İnşaat Sarısı
  secondaryColor = "#1F2937" // Koyu Gri / Antrasit
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      width={width}
      height={height}
      className="hafriyat-logo"
    >
      <g id="Logo-Icon">
        {/* Arka Plan Toprak/Dağ Kütlesi */}
        <polygon points="30,110 70,60 120,90 160,50 200,110" fill={`${secondaryColor}33`} />
        <polygon points="50,110 100,40 140,75 180,110" fill={secondaryColor} opacity="0.15" />

        {/* Zemin Çizgisi */}
        <line x1="20" y1="110" x2="210" y2="110" stroke={secondaryColor} strokeWidth="6" strokeLinecap="round" />
        <line x1="40" y1="118" x2="190" y2="118" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />

        {/* Ekskavatör / Kepçe Gövde & Palet */}
        <rect x="80" y="90" width="50" height="15" rx="7" fill={secondaryColor} />
        <circle cx="92" y="97.5" r="4" fill="#FFF" />
        <circle cx="105" y="97.5" r="4" fill="#FFF" />
        <circle cx="118" y="97.5" r="4" fill="#FFF" />
        <rect x="85" y="72" width="35" height="18" rx="3" fill={primaryColor} />
        <rect x="90" y="76" width="12" height="10" rx="1" fill={secondaryColor} />

        {/* Kepçe Kolu (Boom & Arm) */}
        <path
          d="M 115,76 L 145,50 L 180,65 L 185,80"
          fill="none"
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Kepçe Ağzı (Bucket) */}
        <path
          d="M 185,80 L 175,92 L 163,88 L 168,76 Z"
          fill={secondaryColor}
        />
        {/* Dinamik Hareket Çizgileri (Toprak Kaldırma Etkisi) */}
        <path d="M 160,100 Q 170,105 180,98" fill="none" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
      </g>

      <g id="Logo-Text">
        {/* Ana Başlık */}
        <text
          x="230"
          y="80"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="36"
          letterSpacing="2"
          fill={secondaryColor}
        >
          BALABAN
        </text>
        {/* Sektör Alt Başlığı */}
        <text
          x="232"
          y="105"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="6"
          fill={primaryColor}
        >
          HAFRİYAT & İNŞAAT
        </text>
      </g>
    </svg>
  );
};

export default HafriyatLogo;