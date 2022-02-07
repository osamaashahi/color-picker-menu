export const getValidHexFormat = (colorInputValue) => {
  colorInputValue = colorInputValue.replace('#', '');

  // remove any character that doesn't match with HEX Syntax
  colorInputValue = colorInputValue.replace(/[^a-fA-F0-9]/g, '');

  if (colorInputValue.length > 6) {
    // limit the character length to 6
    let splitValues = colorInputValue.split('');
    splitValues.splice(6, splitValues.length - 6);
    colorInputValue = splitValues.join('');
  }
  return `#${colorInputValue}`;
};
