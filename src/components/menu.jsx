import React, { forwardRef, useEffect, useRef, useState } from 'react';
import AddNewButtonIcon from './icons/addNewButtonIcon';
import Portal from './portal';
import RemoveButtonIcon from './icons/removeButtonIcon';
import SelectedColorIcon from './icons/selectedColorIcon';
import {
  Wrapper,
  Container,
  ColorButton,
  RemoveButton,
  AddNewButton,
} from './styled';
import AddNewSection from './addNewColorSection';

export const ColorPickerMenu = forwardRef(
  (
    { colors, selected, removeColor, enableAddNew = false, onChange, onHide },
    buttonRef
  ) => {
    const [displayAddNewSection, setDisplayAddNewSection] = useState(false);
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

    const handleColorButtonClick = (color) => {
      if (displayAddNewSection) {
        setDisplayAddNewSection(false);
      }
      if (onChange) {
        onChange(color);
      }
    };

    const handleNewColorInput = () => {
      setDisplayAddNewSection(false);
    };

    return (
      <Portal>
        <Wrapper ref={colorPickerMenuRef} className="colorPickerMenu">
          <Container>
            {removeColor ? (
              <RemoveButton onClick={() => onChange(removeColor)}>
                <RemoveButtonIcon />
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
                  onClick={() => handleColorButtonClick(color)}
                >
                  {isSelected && <SelectedColorIcon color={color} />}
                </ColorButton>
              );
            })}
            {enableAddNew && (
              <AddNewButton
                onClick={() => setDisplayAddNewSection(!displayAddNewSection)}
              >
                <AddNewButtonIcon />
              </AddNewButton>
            )}
          </Container>
          {displayAddNewSection && (
            <AddNewSection
              onChange={onChange}
              onSuccess={handleNewColorInput}
            />
          )}
        </Wrapper>
      </Portal>
    );
  }
);
