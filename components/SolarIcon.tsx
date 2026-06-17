type SolarIconProps = {
  name: string;
  className?: string;
};

export function SolarIcon({ name, className = "h-6 w-6" }: SolarIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "home":
      return (
        <svg {...commonProps}>
          <path d="m3 11 9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
          <path d="M8 8h8l-1.4 4H6.6L8 8Z" />
        </svg>
      );
    case "building":
      return (
        <svg {...commonProps}>
          <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          <path d="M16 8h2a2 2 0 0 1 2 2v11" />
          <path d="M8 7h4M8 11h4M8 15h4M7 21h10" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5L11 20a2.2 2.2 0 0 1-3.1-3.1l8.7-8.7a4 4 0 0 1-1.9-1.9Z" />
          <path d="M8 17.5h.01" />
        </svg>
      );
    case "chat":
      return (
        <svg {...commonProps}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.3 9.3 0 0 1-3.8-.8L3 21l1.8-4.7A8.2 8.2 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...commonProps}>
          <path d="M3 4h18v16H3z" />
          <path d="M3 10h18M3 15h18M9 4 7 20M15 4l2 16" />
        </svg>
      );
    case "battery":
      return (
        <svg {...commonProps}>
          <path d="M4 7h14a2 2 0 0 1 2 2v1h1v4h-1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
          <path d="m10 9-2 4h3l-1 3 4-5h-3l1-2Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...commonProps}>
          <path d="M20 4c-7.5.3-12.6 3.6-14.5 9.3C4.4 16.7 7 20 10.5 20 16.2 20 20 13.7 20 4Z" />
          <path d="M4 20c3-5.5 7.1-8.7 12.5-10" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      );
  }
}
