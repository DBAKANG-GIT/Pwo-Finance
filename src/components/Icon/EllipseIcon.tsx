interface EllipseIconProps {
  color: string;
  className?: string;
}

const EllipseIcon: React.FC<EllipseIconProps> = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="87"
      height="87"
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ellipse 10" filter="url(#filter0_f_1201_197)">
        <circle cx="43.5" cy="43.5" r="23.5" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_f_1201_197"
          x="0"
          y="0"
          width="87"
          height="87"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_1201_197"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default EllipseIcon;
