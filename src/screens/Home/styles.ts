import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { normalize } from '../../utils';
import { RectButton } from 'react-native-gesture-handler';

/* import { DataListPokemonProps } from '.'; */

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0 ${normalize(15)}px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + 12}px;
`;

export const SpanTitleUnderline = styled.Text`
  color: #e84118;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(17)}px;
`;

export const DivSpan = styled.View`
  margin-right: 5px;
  border-bottom-color: #e84118;
  border-bottom-width: 2px;
`;

export const SpanTitle = styled.Text`
  color: #e84118;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(17)}px;
`;

export const Title = styled.Text`
  margin-left: 5px;
  color: #e84118;
  font-family: ${({ theme }) => theme.fonts.ligth};
  font-size: ${normalize(17)}px;
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

export const HeaderTable = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #e84118;
  padding: 10px 0;
`;

export const TitleHeaderTable = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${normalize(14)}px;
  color: #fff;
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

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
