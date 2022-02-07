import tinycolor from 'tinycolor2';

export const getColorInAllFormats = (colorValue) => {
  const color = tinycolor(colorValue);
  const hex = color.toHex();
  const rgb = color.toRgb();
  const hsl = color.toHsl();

  return { hex: `#${hex}`, rgb, hsl };
};
