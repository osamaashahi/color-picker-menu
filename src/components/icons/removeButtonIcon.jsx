import React from 'react';
import { useTheme } from 'styled-components';

const RemoveButtonIcon = () => {
  const theme = useTheme();

  const iconColor = theme.colors.icon;
  const iconStrokeWidth = theme.id === 'light' ? '16' : '20';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill={iconColor}
      viewBox="20 20 216 216"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></circle>
      <line
        x1="195.9"
        y1="60.1"
        x2="60.1"
        y2="195.9"
        fill="none"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={iconStrokeWidth}
      ></line>
    </svg>
  );
};

export default RemoveButtonIcon;
