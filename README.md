# Color Picker Menu
![Image](https://i.imgur.com/Zs63Ehr.png)
## Demo
##### [Live Demo](https://codesandbox.io/s/color-picker-menu-0fzhd)

## Installation & Usage

```sh
npm install color-picker-menu --save
```
OR
```sh
yarn add color-picker-menu
```

#### Include the Component

```js
import React from 'react';
import { ColorPickerMenu } from 'color-picker-menu';

const Component = () => {
  return <ColorPickerMenu />;
};
```
#### Properties
- None of the properties are required
- Any color passed should be in HEX format

| Property | Description | Default | Type |
| - | - | - | - |
| `ref` | reference of the button which opens the color picker menu. The position of the menu is based on this reference.  |||
| `theme` | `light` or `dark` | `light` | string |
| `colors` ||| array |
| `selected` ||| string |
| `removeColor` | `transparent` or any color  || string |
| `enableAddNew` ||`true`| boolean |
| `defaultFormat` | `hex`, `rgb`, or `hsl`  |`hex`| string |
| `allowedFormats` ||`['hex', 'rgb', 'hsl']`| array |
| `itemsPerRow` ||`6`| number |
| `onChange` |  when color is changed via click or `SAVE` button. It returns an object with `hex`, `rgb` and `hsl` values.   || func |
| `onHide` | when the detected click is outside the color picker || func |
