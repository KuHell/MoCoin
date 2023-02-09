import React, {useEffect} from 'react';
import styled from 'styled-components/native';

interface IProps {
  route: object;
  params: object;
  symbol: string;
}

const CoinDetail = ({
  navigation,
  route: {
    params: {symbol},
  },
}: IProps | any) => {
  useEffect(() => {
    navigation.setOptions({
      title: symbol,
      headerLargeTitle: true, // ios에서만 적영되는 스크롤시 header 작게 출력
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Container />;
};

const Container = styled.ScrollView``;

export default CoinDetail;
