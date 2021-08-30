import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: dimgrey;
`;

export const Wrapper = styled(LinearGradient)`
  flex: 0.5;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Comic Sans MS';
  font-weight: bold;
  font-size: 26px;
  margin: 50px 0;
  color: whitesmoke;
`;
