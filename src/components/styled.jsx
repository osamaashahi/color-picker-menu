import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: -10000px;
  left: -10000px;
  opacity: 0;
  z-index: 9999;
  padding: 4px 8px;
  line-height: 1;
  background-color: #fff;
  border: 1px solid rgb(223, 225, 230);
  box-shadow: rgb(9 30 66 / 31%) 0px 0px 1px,
    rgb(9 30 66 / 25%) 0px 4px 8px -2px;
  border-radius: 3px;
  transition: opacity 0.2s;
`;

export const Container = styled.div`
  display: flex;
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
