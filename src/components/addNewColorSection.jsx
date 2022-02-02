import React, { useRef, useState } from 'react';
import SpinningIcon from './icons/spinningIcon';
import {
  AddNewColorSection,
  AddNewColorTitle,
  AddNewColorInput,
  AddNewColorButton,
} from './styled';

import '../styles.css';

const AddNewSection = ({ onChange, onSuccess }) => {
  const [newColorInputValue, setNewColorInputValue] = useState('');
  const [inputHasError, setInputHasError] = useState(false);
  const [showSpinningIcon, setShowSpinningIcon] = useState(false);

  const newColorInputRef = useRef(null);

  const handleNewColorInputChange = () => {
    if (inputHasError) {
      setInputHasError(false);
    }
    let colorInputValue = newColorInputRef.current.value.replace('#', '');

    // remove any character that doesn't match with HEX
    colorInputValue = colorInputValue.replace(/[^a-fA-F0-9]/g, '');

    if (colorInputValue.length > 6) {
      // limit the character length to 6
      let splitValues = colorInputValue.split('');
      splitValues.splice(6, splitValues.length - 6);
      colorInputValue = splitValues.join('');
    }
    colorInputValue = `#${colorInputValue}`;
    setNewColorInputValue(colorInputValue);
  };

  const handleSubmit = () => {
    let colorInputValue = newColorInputRef.current.value.replace('#', '');
    if (!/^([0-9A-F]{3}){1,2}$/i.test(colorInputValue)) {
      setInputHasError(true);
      return;
    }
    if (colorInputValue.length === 3) {
      // pad color value
      colorInputValue =
        colorInputValue[0] +
        colorInputValue[0] +
        colorInputValue[1] +
        colorInputValue[1] +
        colorInputValue[2] +
        colorInputValue[2];
    }
    // response to parent component with delay - simulate processing to provide feedback?
    setShowSpinningIcon(true);
    setTimeout(() => {
      onSuccess();
      onChange(`#${colorInputValue}`);
    }, 750);
  };

  return (
    <AddNewColorSection>
      <AddNewColorTitle>HEX</AddNewColorTitle>
      <AddNewColorInput
        placeholder="#FFFFFF"
        hasError={inputHasError}
        ref={newColorInputRef}
        value={newColorInputValue}
        onChange={handleNewColorInputChange}
      />
      <AddNewColorButton onClick={handleSubmit}>
        {showSpinningIcon ? <SpinningIcon /> : 'Save'}
      </AddNewColorButton>
    </AddNewColorSection>
  );
};

export default AddNewSection;
