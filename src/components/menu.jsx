import React, { forwardRef, useEffect, useRef } from 'react';
import Portal from './portal';
import SelectedColorIcon from './selectedColorIcon';
import { Wrapper, Container, ColorButton, RemoveButton } from './styled';

export const ColorPickerMenu = forwardRef(
  ({ colors, selected, removeColor, onChange, onHide }, buttonRef) => {
    const colorPickerMenuRef = useRef(null);

    let colorsList = colors;
    if (!Array.isArray(colors)) {
      colorsList = ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'];
    }

    useEffect(() => {
      const colorPickerMenuElement = colorPickerMenuRef.current;

      if (!colorPickerMenuElement) {
        return;
      }

      // default position if buttonRef is not available
      let buttonRect = { bottom: 0, left: 0 };

      let buttonElment;
      if (buttonRef && buttonRef.current) {
        buttonElment = buttonRef.current;
        buttonRect = buttonElment.getBoundingClientRect();
      }

      const positionOffset = {
        top: buttonRect.bottom + 4,
        left: buttonRect.left + 4,
      };

      colorPickerMenuElement.style.opacity = '1';
      colorPickerMenuElement.style.top = `${positionOffset.top}px`;
      colorPickerMenuElement.style.left = `${positionOffset.left}px`;

      if (onHide) {
        function handleOutsideClick(event) {
          if (buttonElment) {
            if (
              !buttonElment.contains(event.target) &&
              !colorPickerMenuElement.contains(event.target)
            ) {
              onHide();
            }
          } else {
            if (!colorPickerMenuElement.contains(event.target)) {
              onHide();
            }
          }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }
    });

    return (
      <Portal>
        <Wrapper ref={colorPickerMenuRef}>
          <Container>
            {removeColor ? (
              <RemoveButton onClick={() => onChange(removeColor)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#718096"
                  viewBox="10 10 234 234"
                >
                  <rect width="22" height="22" fill="none"></rect>
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="#718096"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="22"
                  ></circle>
                  <line
                    x1="211.1"
                    y1="80"
                    x2="44.9"
                    y2="176"
                    fill="none"
                    stroke="#718096"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="22"
                  ></line>
                </svg>
              </RemoveButton>
            ) : null}
            {colorsList.map((color, index) => {
              const isSelected = selected === color;
              return (
                <ColorButton
                  key={color}
                  color={color}
                  isSelected={isSelected}
                  isLast={index + 1 === colorsList.length}
                  onClick={() => (onChange ? onChange(color) : null)}
                >
                  {isSelected && <SelectedColorIcon color={color} />}
                </ColorButton>
              );
            })}
          </Container>
        </Wrapper>
      </Portal>
    );
  }
);
