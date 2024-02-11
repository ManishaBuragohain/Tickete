import * as React from "react";
const RightArrow = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_34_1637)">
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="#F9F9FB"
        fillOpacity={0.75}
      />
      <path
        d="M19.5306 16.5306L14.5306 21.5306C14.3897 21.6715 14.1986 21.7506 13.9993 21.7506C13.8001 21.7506 13.609 21.6715 13.4681 21.5306C13.3272 21.3897 13.248 21.1986 13.248 20.9993C13.248 20.8001 13.3272 20.609 13.4681 20.4681L17.9375 16L13.4693 11.5306C13.3996 11.4608 13.3442 11.378 13.3065 11.2869C13.2687 11.1957 13.2493 11.098 13.2493 10.9993C13.2493 10.9007 13.2687 10.803 13.3065 10.7118C13.3442 10.6207 13.3996 10.5379 13.4693 10.4681C13.5391 10.3983 13.6219 10.343 13.7131 10.3052C13.8042 10.2675 13.9019 10.248 14.0006 10.248C14.0993 10.248 14.197 10.2675 14.2881 10.3052C14.3793 10.343 14.4621 10.3983 14.5318 10.4681L19.5318 15.4681C19.6017 15.5379 19.6571 15.6207 19.6948 15.7119C19.7326 15.8031 19.7519 15.9009 19.7518 15.9996C19.7517 16.0983 19.7321 16.196 19.6941 16.2872C19.6562 16.3783 19.6006 16.461 19.5306 16.5306Z"
        fill="#60646C"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_34_1637"
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
          result="effect1_backgroundBlur_34_1637"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_34_1637"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default RightArrow;
