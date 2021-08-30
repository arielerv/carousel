import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: black;
`;

export const Dots = styled.View`
  position: absolute;
  height: 20px;
  z-index: 2;
  bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const WrapperDot = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  height: 10px;
  border-radius: 5px;
  width: ${({width}) => (width ? `${width}px` : 0)};
  margin-left: ${({marginLeft}) => (marginLeft ? `${marginLeft}px` : 0)};
`;

export const Dot = styled(Animated.View)`
  background-color: rgba(80, 80, 80, 0.8);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: ${({width}) => (width ? `${width}px` : 0)};
`;

export const Image = styled.Image`
  display: flex;
  flex: 1;
  resize-mode: stretch;
`;

export const Wrapper = styled.View`
  width: ${({width}) => (width ? `${width}px` : 0)};
  border: 3px whitesmoke solid;
  border-radius: 20px;
  margin: 10px;
  overflow: hidden;
`;
