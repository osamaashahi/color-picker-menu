import React from 'react';
import styled from 'styled-components';
import { contrastingColor } from '../../helpers/contrastingColor';

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
        fill={contrastingColor(color)}
        viewBox="0 0 256 256"
      >
        <rect width="20" height="20" fill="none"></rect>
        <polyline
          points="216 72 104 184 48 128"
          fill="none"
          stroke={contrastingColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="20"
        ></polyline>
      </svg>
    </SelectIcon>
  );
};

export default SelectedColorIcon;
