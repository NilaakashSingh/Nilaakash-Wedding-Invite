interface MandalaProps {
  className?: string;
  color?: string;
}

export function Mandala({ className = '', color = 'currentColor' }: MandalaProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="0.8" fill="none" opacity="0.6">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="15" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x1 = 100 + 15 * Math.cos(angle);
          const y1 = 100 + 15 * Math.sin(angle);
          const x2 = 100 + 90 * Math.cos(angle);
          const y2 = 100 + 90 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const cx = 100 + 52 * Math.cos(angle);
          const cy = 100 + 52 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="8" />;
        })}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const cx = 100 + 82 * Math.cos(angle);
          const cy = 100 + 82 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="2" />;
        })}
      </g>
    </svg>
  );
}

export function PaisleyDivider({ className = '', color = '#d97706' }: MandalaProps) {
  return (
    <svg
      viewBox="0 0 300 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1" fill="none" opacity="0.5">
        <line x1="20" y1="20" x2="120" y2="20" />
        <line x1="180" y1="20" x2="280" y2="20" />
        <path d="M120 20 Q140 5 150 20 Q160 35 180 20" />
        <circle cx="150" cy="20" r="6" />
        <circle cx="150" cy="20" r="2" fill={color} />
        <circle cx="115" cy="20" r="2" fill={color} />
        <circle cx="185" cy="20" r="2" fill={color} />
      </g>
    </svg>
  );
}

export function LotusIcon({ className = '', color = 'currentColor' }: MandalaProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.5" fill="none" opacity="0.7">
        <path d="M50 15 Q45 35 50 55 Q55 35 50 15" />
        <path d="M50 15 Q35 30 30 50 Q40 45 50 55" />
        <path d="M50 15 Q65 30 70 50 Q60 45 50 55" />
        <path d="M50 55 Q30 50 20 60 Q35 65 50 65" />
        <path d="M50 55 Q70 50 80 60 Q65 65 50 65" />
        <path d="M50 55 Q45 70 50 80 Q55 70 50 55" />
      </g>
    </svg>
  );
}

export function GaneshaIcon({ className = '', color = 'currentColor' }: MandalaProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.7">
        <ellipse cx="50" cy="45" rx="25" ry="22" />
        <path d="M35 30 Q30 20 40 18" />
        <path d="M65 30 Q70 20 60 18" />
        <circle cx="42" cy="42" r="3" fill={color} />
        <circle cx="58" cy="42" r="3" fill={color} />
        <path d="M45 52 Q50 56 55 52" />
        <path d="M50 56 Q48 65 52 68 Q50 72 50 78" />
        <path d="M30 55 Q20 60 25 70 Q30 68 35 62" />
        <path d="M70 55 Q80 60 75 70 Q70 68 65 62" />
        <path d="M40 78 Q50 85 60 78" />
      </g>
    </svg>
  );
}
