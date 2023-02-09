import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';
import {VictoryChart, VictoryLine, VictoryScatter} from 'victory-native';
import {history, info} from '../../api/Coin';

interface IProps {
  route: object;
  params: object;
  symbol: string;
  id: string;
}

const CoinDetail = ({
  navigation,
  route: {
    params: {symbol, id},
  },
}: IProps | any) => {
  const {isLoading: infoLoading, data: infoData} = useQuery(
    ['coinInfo', id],
    info,
  );

  const {isLoading: historyLoading, data: historyData} = useQuery(
    ['coinHistory', id],
    history,
  );
  const [victoryData, setVictoryData] = useState(null);

  // console.log('historyData:', historyData);
  // console.log('id: ', id);
  //api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2023-02-09&interval=2h

  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map(price => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price,
        })),
      );
    }
  }, [historyData]);

  useEffect(() => {
    navigation.setOptions({
      title: symbol,
      headerLargeTitle: true, // ios에서만 적영되는 스크롤시 header 작게 출력
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return victoryData ? (
    <Container>
      <VictoryChart height={360}>
        <VictoryLine
          animate
          interpolation="monotoneX"
          data={victoryData}
          style={{data: {stroke: '#1abc9c'}}}
        />
        <VictoryScatter data={victoryData} style={{data: {fill: '#1abc9c'}}} />
      </VictoryChart>
    </Container>
  ) : null;
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: #111;
`;

export default CoinDetail;
