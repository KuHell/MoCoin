import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {coins} from '../api/Coin';
import styled from 'styled-components/native';
import CoinHome from '../components/coin/CoinHome';
import Loading from '../components/Loading';

interface CoinDataType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Home = () => {
  const {isLoading, data} = useQuery('coins', coins);
  const [cleanData, setCleanData] = useState([]);

  // data 필터 후 cleanData에 넣는다
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter(
          (coin: any) => coin.rank !== 0 && coin.is_active && !coin.is_new,
        ),
      );
    }
  }, [data]);

  return !isLoading ? (
    <Cointainer>
      <FlatList
        numColumns={3} // 열을 5개로 설정
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: '5%',
        }} // numColumns가 있어야 쓸 수 있음 {n}개를 한번에 묶어서 style 지정
        // keyExtractor={({item}: any) => item.id} // 고유값
        data={cleanData} // List에서 사용할 Data
        renderItem={({item, index}: CoinDataType | any) => (
          <CoinHome index={index} id={item.id} symbol={item.symbol} />
        )}
      />
    </Cointainer>
  ) : (
    <Loading />
  );
};

// 메인 View
const Cointainer = styled.View`
  padding: 10px 10px;
  flex: 1;
  background-color: #111;
`;

export default Home;
