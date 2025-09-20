interface FauxFlowLogoProps {
  className?: string;
  enabled?: boolean;
}

export default function FauxFlowLogo({ className = "w-5 h-5", enabled = false }: FauxFlowLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* FF stylized as flow/wave pattern */}
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={enabled ? "#3b82f6" : "#9ca3af"} />
          <stop offset="100%" stopColor={enabled ? "#1d4ed8" : "#6b7280"} />
        </linearGradient>
      </defs>
      
      {/* First F */}
      <path
        d="M15 20 L15 80 M15 20 L45 20 M15 50 L40 50"
        stroke="url(#logo-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Second F with wave effect */}
      <path
        d="M55 20 L55 80 M55 20 L85 20 M55 50 L80 50"
        stroke="url(#logo-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Flow waves */}
      <path
        d="M20 30 Q30 25 40 30 T60 30"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M20 40 Q35 35 50 40 T80 40"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M25 70 Q40 65 55 70 T85 70"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
