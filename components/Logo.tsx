export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 135 175" className="h-40 w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="circuit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0bcfcb" />
            <stop offset="100%" stopColor="#06063a" />
          </linearGradient>
        </defs>
        {/* "7" navy shape */}
        <path
          d="M2 80 H58 Q66 80 66 88 V164 Q66 172 58 170 L54 169 Q48 167 47 160 L44 98 H8 Q2 97 2 91 Z"
          fill="#06063a"
        />
        {/* circuit traces */}
        <g fill="none" stroke="url(#circuit)" strokeWidth="2.5" strokeLinecap="round">
          <path d="M70 8 V78 H118" />
          <path d="M77 18 V86 H124" />
          <path d="M84 28 V94 H128" />
        </g>
        <g>
          <circle cx="70" cy="7" r="3" fill="#0bcfcb" />
          <circle cx="77" cy="17" r="3" fill="#0bcfcb" />
          <circle cx="84" cy="27" r="3" fill="#0bcfcb" />
          <circle cx="119" cy="78" r="3" fill="#06063a" />
          <circle cx="125" cy="86" r="3" fill="#06063a" />
          <circle cx="129" cy="94" r="3" fill="#06063a" />
        </g>
      </svg>
      <h1 className="mt-4 text-3xl tracking-wide">
        <span className="font-bold">RAITec</span> <span className="font-light">App</span>
      </h1>
    </div>
  );
}
