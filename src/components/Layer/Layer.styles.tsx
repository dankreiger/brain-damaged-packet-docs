import styled from 'styled-components';

export const LayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 50px;
  font-size: 1.2em;
  transition: 250ms color, 250ms filter;
  user-select: none;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    transition: 250ms transform 250ms, 250ms opacity 250ms;
    opacity: 0;
    transform: translateX(300px);
  }
  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
  &:hover {
    filter: contrast(70%);
  }
  ${({ activeLayer }: { activeLayer: boolean }) =>
    `
    color: ${activeLayer ? 'red' : ''}
    span {
      opacity: 1;
    }
    `}
`;
