import { BaseButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { normalize } from '../../utils';
import { FlatList } from 'react-native';

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const TextInput = styled.Text`
  margin: 12px 0 0;
  color: #e84118;
  font-family: ${({ theme }) => theme.fonts.ligth};
  font-size: ${normalize(17)}px;
`;

export const Input = styled.TextInput`
  border: 1px solid #3a3a3a;
  border-radius: 5px;
  height: 50px;
  padding: 0 10px;
  font-size: ${normalize(17)}px;
  margin-bottom: 12px;
`;

export const ContainerList = styled.View`
  flex: 1;
/*   background: green; */
`;

export const Button = styled(RectButton)`
  background: #e84118;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(17)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButton = styled(BaseButton)`
`;

export const IconButton = styled(Icon).attrs({
  name: 'arrow-left',
  color: '#000',
  size: 30,
})``;

export const TextHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(17)}px;
`;

export const PersonageList = styled(
  FlatList as new () => FlatList,
).attrs({
  onEndReachedThreshold: 0.5,
})``;

export const ContainerItemList = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 18px 15px;
`;

export const ImageList = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const TextList = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${normalize(16)}px;
  margin-left: 10%;
`;

export const Separator = styled.View`
  height: 1.5px;
  background-color: #e84118;
`;