import { BaseButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import { normalize } from '../../utils';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Image = styled.Image``;

export const GoBackButton = styled(BaseButton)`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: ${normalize(25)}px;
  left: 10px;
  top: ${getStatusBarHeight() + 15}px;
  z-index: 99;
  background: #fff;
  padding: 10px;
`;

export const IconButton = styled(Icon).attrs({
  name: 'arrow-left',
  color: '#000',
  size: 30,
})``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(25)}px;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ligth};
  font-size: ${normalize(15)}px;
  margin-top: 10px;
  text-align: justify;
`;

export const ContainerContent = styled.View`
  padding: 10px;
`;

export const DetailsList = styled(FlatList as new () => FlatList).attrs({
  onEndReachedThreshold: 0.5,
})`
  margin-bottom:20px;
`;

export const ContainerItemList = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 18px 15px;
`;

export const ImageList = styled.Image`
  width: 150px;
  height: 220px;

`;

export const ContainerList = styled.View`
  flex-direction: column;
  width: 150px;
  align-items: center;
    margin-left: 10px;
`;

export const TitleList = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${normalize(19)}px;
  margin: 10px 0 10px 10px;
`;

export const TextList = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ligth};
  font-size: ${normalize(13)}px;
  margin: 10px 0 10px 10px;
  text-align: center;
`;

export const SpaceFinal = styled.View`
  width: 10px;
`;

export const TextEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ligth};
  font-size: ${normalize(15)}px;
  margin: 10px 0 10px 10px;
`;