import React, { useRef, useState } from 'react';
import SpinningIcon from './icons/spinningIcon';
import {
  AddNewColorSection,
  AddNewColorFormat,
  AddNewColorInput,
  AddNewColorButton,
  FormatPicker,
  FormatPickerItem,
} from './styled';

import '../styles.css';
import DropListIcon from './icons/dropListIcon';
import { getValidHexFormat } from '../helpers/getValidHexFormat';
import { getValidRgbFormat } from '../helpers/getValidRgbFormat';
import { getValidHslFormat } from '../helpers/getValidHslFormat';
import { getColorInAllFormats } from '../helpers/getColorInAllFormats';

const NewColorSection = ({
  formatPicker,
  defaultFormat,
  allowedFormats,
  onChange,
  onSuccess,
}) => {
  const format =
    allowedFormats.indexOf(defaultFormat) === -1
      ? allowedFormats[0]
      : defaultFormat;
  const [activeFormat, setActiveFormat] = useState(format);
  const [newColorInputValue, setNewColorInputValue] = useState('');
  const [inputHasError, setInputHasError] = useState(false);
  const [showSpinningIcon, setShowSpinningIcon] = useState(false);

  const newColorInputRef = useRef(null);

  const hasMultipleFormats = allowedFormats.length > 1;

  const handleInputFocus = () => {
    if (inputHasError) {
      setInputHasError(false);
    }
  };

  const handleNewColorInputChange = () => {
    let colorInputValue = '';
    const inputValue = newColorInputRef.current.value;
    if (activeFormat === 'hex') {
      colorInputValue = getValidHexFormat(inputValue);
    } else if (activeFormat === 'rgb') {
      colorInputValue = getValidRgbFormat(inputValue);
    } else if (activeFormat === 'hsl') {
      colorInputValue = getValidHslFormat(inputValue);
    }

    setNewColorInputValue(colorInputValue);
  };

  const handleSubmit = () => {
    let colorInputValue = '';
    const inputValue = newColorInputRef.current.value;
    if (activeFormat === 'hex') {
      colorInputValue = inputValue.replace('#', '');
      if (!/^([0-9A-F]{3}){1,2}$/i.test(colorInputValue)) {
        setInputHasError(true);
        return;
      }
      colorInputValue = `#${colorInputValue}`;
    } else if (activeFormat === 'rgb' || activeFormat === 'hsl') {
      if (!/^(\d{1,3}),(\d{1,3}),(\d{1,3})$/g.test(inputValue)) {
        setInputHasError(true);
        return;
      }
      const splitValues = inputValue.split(',');
      if (activeFormat === 'rgb') {
        if (
          splitValues[0] > 255 ||
          splitValues[1] > 255 ||
          splitValues[2] > 255
        ) {
          setInputHasError(true);
          return;
        }
        colorInputValue = {
          r: splitValues[0],
          g: splitValues[1],
          b: splitValues[2],
        };
      } else if (activeFormat === 'hsl') {
        if (
          splitValues[0] > 360 ||
          splitValues[1] > 100 ||
          splitValues[2] > 100
        ) {
          setInputHasError(true);
          return;
        }
        colorInputValue = {
          h: splitValues[0],
          s: splitValues[1],
          l: splitValues[2],
        };
      }
    }

    const returnValue = getColorInAllFormats(colorInputValue);
    // response to parent component with delay - simulate processing to provide feedback?
    setShowSpinningIcon(true);
    setTimeout(() => {
      onSuccess();
      onChange(returnValue);
    }, 450);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
        handleSubmit();
        break;

      case 'Esc': // IE/Edge specific value
      case 'Escape':
        onSuccess();
        break;

      default:
        return;
    }
  };

  const getInputPlaceholder = () => {
    let placeholder;
    switch (activeFormat) {
      case 'rgb':
        placeholder = '255,255,255';
        break;

      case 'hsl':
        placeholder = '0°,5%,100%';
        break;

      default:
        placeholder = '#FFFFFF';
        break;
    }
    return placeholder;
  };

  return (
    <AddNewColorSection>
      <AddNewColorFormat
        clickable={hasMultipleFormats}
        onClick={hasMultipleFormats ? formatPicker.toggle : null}
      >
        <span>{activeFormat}</span>
        {hasMultipleFormats && <DropListIcon />}
      </AddNewColorFormat>
      <AddNewColorInput
        placeholder={getInputPlaceholder()}
        hasError={inputHasError}
        ref={newColorInputRef}
        value={newColorInputValue}
        onChange={handleNewColorInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
      />
      <AddNewColorButton onClick={handleSubmit}>
        {showSpinningIcon ? <SpinningIcon /> : 'Save'}
      </AddNewColorButton>
      {formatPicker.display && (
        <FormatPicker ref={formatPicker.ref}>
          {allowedFormats.map((format, index) => (
            <FormatPickerItem
              key={format}
              active={format === activeFormat}
              isLast={index === allowedFormats.length - 1}
              onClick={() => {
                setActiveFormat(format);
                setInputHasError(false);
                setNewColorInputValue('');
                formatPicker.toggle();
              }}
            >
              {format}
            </FormatPickerItem>
          ))}
        </FormatPicker>
      )}
    </AddNewColorSection>
  );
};
export default NewColorSection;
