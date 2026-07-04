type IconProps = { className?: string };

export const MailIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.5 6.5L12 13l8.5-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkedInIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.95 1.95 0 100 3.9 1.95 1.95 0 000-3.9zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.67V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.17V20z" />
    </svg>
  );
};

export const ArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
};

export const PinIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.7 7-11.7A7 7 0 105 9.3C5 14.3 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.3"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const SparkleIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 106 110"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M83.0,58.0 L82.45,58.05 L80.85,58.36 L78.3,59.17 L74.97,60.69 L71.07,63.03 L66.84,66.23 L62.55,70.26 L58.44,74.97 L54.7,80.17 L51.52,85.59 L48.98,90.93 L47.13,95.85 L45.93,100.06 L45.28,103.29 L45.04,105.31 L45.0,106.0 L44.96,105.31 L44.72,103.29 L44.07,100.06 L42.87,95.85 L41.02,90.93 L38.48,85.59 L35.3,80.17 L31.56,74.97 L27.45,70.26 L23.16,66.23 L18.93,63.03 L15.03,60.69 L11.7,59.17 L9.15,58.36 L7.55,58.05 L7.0,58.0 L7.55,57.95 L9.15,57.64 L11.7,56.83 L15.03,55.31 L18.93,52.97 L23.16,49.77 L27.45,45.74 L31.56,41.03 L35.3,35.83 L38.48,30.41 L41.02,25.07 L42.87,20.15 L44.07,15.94 L44.72,12.71 L44.96,10.69 L45.0,10.0 L45.04,10.69 L45.28,12.71 L45.93,15.94 L47.13,20.15 L48.98,25.07 L51.52,30.41 L54.7,35.83 L58.44,41.03 L62.55,45.74 L66.84,49.77 L71.07,52.97 L74.97,55.31 L78.3,56.83 L80.85,57.64 L82.45,57.95 Z" />
      <path d="M98.0,24.0 L97.77,24.02 L97.1,24.15 L96.02,24.49 L94.62,25.12 L92.98,26.1 L91.2,27.43 L89.39,29.11 L87.66,31.07 L86.09,33.24 L84.74,35.5 L83.68,37.72 L82.9,39.77 L82.39,41.53 L82.12,42.87 L82.02,43.71 L82.0,44.0 L81.98,43.71 L81.88,42.87 L81.61,41.53 L81.1,39.77 L80.32,37.72 L79.26,35.5 L77.91,33.24 L76.34,31.07 L74.61,29.11 L72.8,27.43 L71.02,26.1 L69.38,25.12 L67.98,24.49 L66.9,24.15 L66.23,24.02 L66.0,24.0 L66.23,23.98 L66.9,23.85 L67.98,23.51 L69.38,22.88 L71.02,21.9 L72.8,20.57 L74.61,18.89 L76.34,16.93 L77.91,14.76 L79.26,12.5 L80.32,10.28 L81.1,8.23 L81.61,6.47 L81.88,5.13 L81.98,4.29 L82.0,4.0 L82.02,4.29 L82.12,5.13 L82.39,6.47 L82.9,8.23 L83.68,10.28 L84.74,12.5 L86.09,14.76 L87.66,16.93 L89.39,18.89 L91.2,20.57 L92.98,21.9 L94.62,22.88 L96.02,23.51 L97.1,23.85 L97.77,23.98 Z" />
    </svg>
  );
};
