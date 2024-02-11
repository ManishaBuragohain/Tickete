import * as React from "react";
const LeftArrow = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_34_1634)">
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="#F9F9FB"
        fillOpacity={0.75}
      />
      <path
        d="M18.5307 20.4693C18.6715 20.6102 18.7507 20.8013 18.7507 21.0006C18.7507 21.1998 18.6715 21.3909 18.5307 21.5318C18.3898 21.6727 18.1987 21.7519 17.9994 21.7519C17.8001 21.7519 17.609 21.6727 17.4682 21.5318L12.4681 16.5318C12.3982 16.4621 12.3428 16.3793 12.3049 16.2882C12.267 16.197 12.2476 16.0993 12.2476 16.0006C12.2476 15.9019 12.267 15.8041 12.3049 15.713C12.3428 15.6218 12.3982 15.539 12.4681 15.4693L17.4682 10.4693C17.609 10.3284 17.8001 10.2493 17.9994 10.2493C18.1987 10.2493 18.3898 10.3284 18.5307 10.4693C18.6715 10.6102 18.7507 10.8013 18.7507 11.0006C18.7507 11.1998 18.6715 11.3909 18.5307 11.5318L14.0625 15.9999L18.5307 20.4693Z"
        fill="#60646C"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_34_1634"
        x={-50}
        y={-50}
        width={132}
        height={132}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={25} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_34_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_34_1634"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default LeftArrow;
