const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;

export const isValidHex = function (props, propName, componentName) {
  if (
    props[propName] && // makes it optional
    props[propName] !== 'transparent' && // allowed other than valid HEX
    !hexRegex.test(props[propName]) // HEX Syntax validation
  ) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Expected "transparent" OR a valid HEX string.'
    );
  }
};

export const isValidHexColor = function (props, propName, componentName) {
  if (
    props[propName] && // makes it optional
    !hexRegex.test(props[propName]) // HEX Syntax validation
  ) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Expected a valid HEX string.'
    );
  }
};
