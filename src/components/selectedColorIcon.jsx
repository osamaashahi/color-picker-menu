import React from 'react';
import styled from 'styled-components';
import { invertColor } from '../helpers/invertColor';

const SelectIcon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const SelectedColorIcon = ({ color }) => {
  return (
    <SelectIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        fill={invertColor(color)}
        viewBox="0 0 256 256"
      >
        <rect width="20" height="20" fill="none"></rect>
        <polyline
          points="216 72 104 184 48 128"
          fill="none"
          stroke={invertColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="20"
        ></polyline>
      </svg>
    </SelectIcon>
  );
};

export default SelectedColorIcon;
