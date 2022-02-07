import React from 'react';
import { useTheme } from 'styled-components';

const DropListIcon = () => {
  const theme = useTheme();

  const iconColor = theme.colors.icon;

  return (
    <span className="dropListIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="7"
        fill={iconColor}
        viewBox="0 -35 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path d="M213.7,154.3l-80-80a8.1,8.1,0,0,0-11.4,0l-80,80a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,48,168H208a8,8,0,0,0,7.4-4.9A8.4,8.4,0,0,0,213.7,154.3Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="7"
        fill={iconColor}
        viewBox="0 35 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path d="M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"></path>
      </svg>
    </span>
  );
};

export default DropListIcon;
