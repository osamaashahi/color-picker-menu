import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: -10000px;
  left: -10000px;
  opacity: 0;
  z-index: 9999;
  padding: 4px 0px;
  line-height: 1;
  background-color: ${(props) => props.theme.colors.primaryBg};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: rgb(9 30 66 / 31%) 0px 0px 1px,
    rgb(9 30 66 / 25%) 0px 4px 8px -2px;
  border-radius: 3px;
  transition: opacity 0.1s;
  user-select: none;
`;

export const Container = styled.div`
  display: flex;
  padding: 0px 8px;
`;

export const ColorsContainer = styled.div``;

export const ColorsRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.isLast ? null : '6px')};
`;

export const ColorButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  outline: 1px solid ${(props) => props.theme.colors.colorOutline.default};
  margin-right: ${(props) => (props.isLast ? null : '6px')};
  background-color: ${(props) => props.color};
  &:hover {
    outline-color: ${(props) => props.theme.colors.colorOutline.hover};
  }
`;

export const RemoveButton = styled(ColorButton)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-color: transparent;
`;

export const AddNewButton = styled(RemoveButton)`
  margin-left: 6px;
  margin-right: 0px; ;
`;

export const AddNewColorSection = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  margin-top: 4px;
  padding-top: 4px;
  padding-inline: 8px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddNewColorFormat = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.colors.primaryText};
  letter-spacing: 1.5px;
  width: 38px;
  height: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding-inline: 4px;
  cursor: ${(props) => (props.clickable ? `pointer` : null)};
  &:hover {
    box-shadow: ${(props) =>
      props.clickable
        ? `${props.theme.colors.boxShadow} 0px 0px 8px -3px`
        : null};
  }
`;

export const AddNewColorInput = styled.input`
  margin: 0 6px;
  width: 84px;
  height: 100%;
  font-size: 10px;
  color: ${(props) => props.theme.colors.primaryText};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${(props) =>
    props.hasError ? props.theme.colors.error : props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.secondaryBg};
  padding-left: 8px;
  padding-right: 6px;
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
  &:focus-visible {
    outline: 1px solid #adb5bd;
  }
`;

export const AddNewColorButton = styled.button`
  width: 38px;
  height: 100%;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  cursor: pointer;
  border: none;
  padding: 2px;
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.button.bg};
  color: ${(props) => props.theme.colors.button.text};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover.bg};
  }
`;

export const FormatPicker = styled.div`
  position: absolute;
  left: 10px;
  bottom: -29px;
  width: 38px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  background: ${(props) => props.theme.colors.ternaryBg};
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px;
`;

export const FormatPickerItem = styled.div`
  height: 18px;
  display: flex;
  position: relative;
  padding: 2px 6px;
  padding-left: 12px;
  border-bottom: ${(props) =>
    props.isLast ? null : `1px solid ${props.theme.colors.border}`};
  color: ${(props) => props.theme.colors.primaryText};
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: ${(props) =>
      props.theme.id === 'light' ? props.theme.colors.button.text : null};
    background-color: ${(props) => props.theme.colors.button.hover.bg};
  }
  ${(props) =>
    props.active
      ? ` &:before {
    content: '';
    position:absolute;
    left: 4px;
    top: 7px;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: #adb5bd;
  }`
      : null}
`;
