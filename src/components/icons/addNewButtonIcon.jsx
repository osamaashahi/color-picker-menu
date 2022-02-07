import React from 'react';
import { useTheme } from 'styled-components';

const AddNewButtonIcon = () => {
  const theme = useTheme();

  const iconColor = theme.colors.icon;
  const iconStrokeWidth = theme.id === 'light' ? '12' : '20';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill={iconColor}
      viewBox="24 24 208 208"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M35.3,103.1a96.4,96.4,0,0,1,24.8-43"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <path
        d="M60.1,195.9a95.7,95.7,0,0,1-24.8-43.1"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <path
        d="M152.9,220.7a94.2,94.2,0,0,1-49.7,0"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <path
        d="M220.7,152.9a96.4,96.4,0,0,1-24.8,43"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <path
        d="M195.9,60.1a95.7,95.7,0,0,1,24.8,43.1"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <path
        d="M103.1,35.3a94.2,94.2,0,0,1,49.7,0"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></path>
      <line
        x1="90"
        y1="128"
        x2="166"
        y2="128"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></line>
      <line
        x1="128"
        y1="90"
        x2="128"
        y2="166"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></line>
    </svg>
  );
};

export default AddNewButtonIcon;
