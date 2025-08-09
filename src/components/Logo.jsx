export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 135 40" {...props}>
      {/* Icon: Magnifying glass with AI neural net inside */}
      <defs>
        <clipPath id="clip0_405_2">
          <rect width="40" height="40" rx="8" fill="white" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_405_2)">
        {/* Main shape of the magnifying glass */}
        <circle
          cx="20"
          cy="16"
          r="11"
          stroke="#2563EB"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="28"
          y1="25"
          x2="36"
          y2="33"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* AI Neural Net inside the glass */}
        <g fill="#0F172A">
          {/* Nodes */}
          <circle cx="16" cy="16" r="1.5" />
          <circle cx="24" cy="12" r="1.5" />
          <circle cx="24" cy="20" r="1.5" />

          {/* Connections */}
          <line
            x1="16.5"
            y1="16"
            x2="23.5"
            y2="12.5"
            stroke="#0F172A"
            strokeWidth="0.8"
          />
          <line
            x1="16.5"
            y1="16"
            x2="23.5"
            y2="19.5"
            stroke="#0F172A"
            strokeWidth="0.8"
          />
        </g>
      </g>

      {/* Logo Text: "Insight" */}
      <text
        x="48"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="#0F172A"
      >
        Auri
      </text>
    </svg>
  )
}
