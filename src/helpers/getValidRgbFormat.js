export const getValidRgbFormat = (colorInputValue) => {
  // remove any character that doesn't match with RGB Syntax
  colorInputValue = colorInputValue.replace(/[^0-9,]/g, '');

  const totalCommas = colorInputValue.split(',').length - 1;
  // remove more than 2 commas
  if (totalCommas > 2) {
    // TODO: replace this with a regex?
    const splitValues = colorInputValue.split(',');
    colorInputValue = splitValues.slice(0, 3).join(',');
    colorInputValue += splitValues.slice(4, splitValues.length - 1).join('');
  }

  // TODO: insert commas after every 3 digits, if not already added
  // if (colorInputValue.length >= 3 && totalCommas === 0) {
  //   colorInputValue += ',';
  // }

  if (colorInputValue.length > 11) {
    // limit the character length to 11 - includes commas
    let splitValues = colorInputValue.split('');
    splitValues.splice(11, splitValues.length - 11);
    colorInputValue = splitValues.join('');
  }
  return colorInputValue;
};
