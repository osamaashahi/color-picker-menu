import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: -10000px;
  left: -10000px;
  opacity: 0;
  z-index: 9999;
  padding: 4px 0px;
  line-height: 1;
  background-color: #fff;
  border: 1px solid rgb(223, 225, 230);
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

export const ColorButtonContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  outline: 1px solid transparent;
  margin-right: ${(props) => (props.isLast ? null : '6px')};
  background-color: ${(props) => props.color};
`;

export const ColorButton = styled(ColorButtonContainer).attrs(() => ({
  tabIndex: 0,
}))`
  &:hover {
    outline-color: #2d3142;
  }
`;

export const RemoveButton = styled(ColorButton)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddNewButton = styled(RemoveButton)`
  margin-left: 6px;
  margin-right: 0px; ;
`;

export const AddNewColorSection = styled.div`
  border-top: 1px solid rgb(223, 225, 230);
  margin-top: 4px;
  padding-top: 4px;
  padding-inline: 8px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddNewColorTitle = styled.div`
  font-size: 10px;
  color: #adb5bd;
  letter-spacing: 1.5px;
`;

export const AddNewColorInput = styled.input`
  margin: 0 6px;
  width: 65px;
  height: 100%;
  font-size: 10px;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${(props) => (props.hasError ? '#FFB3B3' : '#e9ecef')};
  padding-left: 14px;
  padding-right: 6px;
  &::-webkit-input-placeholder {
    color: #ced4da;
  }
  &:focus-visible {
    outline: 1px solid #adb5bd;
  }
`;

export const AddNewColorButton = styled.button`
  width: 46px;
  height: 100%;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  cursor: pointer;
  border: none;
  padding: 2px;
  border-radius: 3px;
  border: 1px solid #e9ecef;
  background-color: #e9ecef;
  color: #adb5bd;
  &:hover {
    background-color: #dee2e6;
  }
  &:focus {
    background-color: #ced4da;
  }
`;
