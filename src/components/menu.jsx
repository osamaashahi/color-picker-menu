import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { isValidHex, isValidHexColor } from '../helpers/props';

import {
  Wrapper,
  Container,
  ColorButton,
  RemoveButton,
  AddNewButton,
  ColorsContainer,
  ColorsRow,
} from './styled';

import Portal from './portal';
import SelectedColorIcon from './icons/selectedColorIcon';
import NewColorSection from './newColorSection';
import RemoveButtonIcon from './icons/removeButtonIcon';
import AddNewButtonIcon from './icons/addNewButtonIcon';
import { getColorInAllFormats } from '../helpers/getColorInAllFormats';

import themeSchema from '../theme/schema.json';

export const ColorPickerMenu = forwardRef(
  (
    {
      colors,
      selected,
      removeColor,
      theme = 'light',
      enableAddNew = true,
      defaultFormat = 'hex',
      allowedFormats = ['hex', 'rgb', 'hsl'],
      itemsPerRow = 6,
      onChange,
      onHide,
    },
    buttonRef
  ) => {
    const selectedColor = selected ? selected.toUpperCase() : null;
    const [displayAddNewSection, setDisplayAddNewSection] = useState(false);
    const [displayFormatPicker, setDisplayFormatPicker] = useState(false);
    const colorPickerMenuRef = useRef(null);
    const formatPickerRef = useRef(null);

    let colorsList = [colors];
    if (colors && colors.length > itemsPerRow) {
      colorsList = [];
      for (var i = 0; i < colors.length; i += itemsPerRow) {
        colorsList.push(colors.slice(i, i + itemsPerRow));
      }
    }

    if (!colors) {
      colorsList = [
        ['#FF6666', '#ffd166', '#66FF7D', '#66F6FF', '#A366FF', '#FF66D9'],
      ];
    }

    useEffect(() => {
      const colorPickerMenuElement = colorPickerMenuRef.current;

      if (!colorPickerMenuElement) {
        return;
      }

      // default position if buttonRef is not available
      let buttonRect = { bottom: 0, left: 0 };

      let buttonElement;
      if (buttonRef && buttonRef.current) {
        buttonElement = buttonRef.current;
        buttonRect = buttonElement.getBoundingClientRect();
      }

      const positionOffset = {
        top: buttonRect.bottom + 4,
        left: buttonRect.left + 4,
      };

      colorPickerMenuElement.style.opacity = '1';
      colorPickerMenuElement.style.top = `${positionOffset.top}px`;
      colorPickerMenuElement.style.left = `${positionOffset.left}px`;

      const formatPickerElement = formatPickerRef.current;
      if (onHide || enableAddNew) {
        const handleOutsideClick = (event) => {
          if (!colorPickerMenuElement.contains(event.target)) {
            // click is outside color picker menu
            if (
              onHide &&
              (!buttonElement ||
                (buttonElement && !buttonElement.contains(event.target)))
            ) {
              onHide();
            }
          } else {
            /**
             * - click is inside color picker menu but  outside format picker
             * - format picker is visible
             */
            if (
              enableAddNew &&
              displayFormatPicker &&
              !formatPickerElement.contains(event.target)
            ) {
              setDisplayFormatPicker(false);
            }
          }
        };
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
        const colorInAllFormats = getColorInAllFormats(color);
        onChange(colorInAllFormats);
      }
    };

    const handleNewColorInput = () => {
      setDisplayAddNewSection(false);
    };

    const handleRemoveColorClick = () => {
      let color = {};
      if (removeColor === 'transparent') {
        color.hex = 'transparent';
      } else {
        color = getColorInAllFormats(removeColor);
      }
      onChange(color);
    };

    const toggleFormatPicker = () => {
      setDisplayFormatPicker(!displayFormatPicker);
    };

    return (
      <Portal>
        <ThemeProvider theme={themeSchema[theme]}>
          <Wrapper ref={colorPickerMenuRef} className="colorPickerMenu">
            <Container>
              <ColorsContainer>
                {colorsList.map((colorRow, rowIndex) => {
                  return (
                    <ColorsRow
                      key={rowIndex}
                      isLast={rowIndex + 1 === colorsList.length}
                    >
                      {removeColor && rowIndex === 0 ? (
                        <RemoveButton onClick={handleRemoveColorClick}>
                          <RemoveButtonIcon />
                        </RemoveButton>
                      ) : null}
                      {colorRow.map((color, index) => {
                        const isSelected =
                          selectedColor === color.toUpperCase();
                        return (
                          <ColorButton
                            key={color}
                            color={color}
                            isSelected={isSelected}
                            isLast={index + 1 === colorRow.length}
                            onClick={() => handleColorButtonClick(color)}
                          >
                            {isSelected && <SelectedColorIcon color={color} />}
                          </ColorButton>
                        );
                      })}
                      {enableAddNew && rowIndex === colorsList.length - 1 && (
                        <AddNewButton
                          onClick={() =>
                            setDisplayAddNewSection(!displayAddNewSection)
                          }
                        >
                          <AddNewButtonIcon />
                        </AddNewButton>
                      )}
                    </ColorsRow>
                  );
                })}
              </ColorsContainer>
            </Container>
            {displayAddNewSection && (
              <NewColorSection
                defaultFormat={defaultFormat}
                allowedFormats={allowedFormats}
                onChange={onChange}
                onSuccess={handleNewColorInput}
                formatPicker={{
                  ref: formatPickerRef,
                  display: displayFormatPicker,
                  toggle: toggleFormatPicker,
                }}
              />
            )}
          </Wrapper>
        </ThemeProvider>
      </Portal>
    );
  }
);

ColorPickerMenu.propTypes = {
  colors: PropTypes.arrayOf(isValidHexColor),
  selected: isValidHex,
  removeColor: isValidHex,
  theme: PropTypes.oneOf(['light', 'dark']),
  enableAddNew: PropTypes.oneOf([true, false, 'true', 'false']),
  defaultFormat: PropTypes.oneOf(['hex', 'rgb', 'hsl']),
  allowedFormats: PropTypes.arrayOf(PropTypes.oneOf(['hex', 'rgb', 'hsl'])),
  itemsPerRow: PropTypes.number,
  onChange: PropTypes.func,
  onHide: PropTypes.func,
};
