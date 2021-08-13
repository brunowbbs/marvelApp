import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

interface Props {
  page: number;
  numberPage: number | null;
}

export const Container = styled.View`
  height: 70px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 18px;
`;

export const ContainerCircle = styled.View`
  flex-direction: row;
  margin: 0 60px;
`;

export const Circle = styled(RectButton) <Props>`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  background-color: ${(props) => props.page === props.numberPage ? '#F00' : '#FFF'};
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.page === props.numberPage ? '#FFF' : '#F00'};
  margin:0 8px;
`;

export const CustomIcon = styled(Icon)``;

export const Text = styled.Text<Props>`
  font-size: 18px;
  color: ${(props) => props.page === props.numberPage ? '#FFF' : '#F00'};
  font-family: ${({ theme }) => theme.fonts.medium};
`;