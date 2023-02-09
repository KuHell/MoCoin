import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {coins} from '../api/Coin';

const Home = () => {
  const {isLoading, data} = useQuery('coins', coins);
  const [cleanData, setCleanData] = useState([]);
  console.log('data: ', data);

  // data 필터 후 cleanData에 넣는다
  useEffect(() => {
    setCleanData(
      data.filter(
        (coin: any) => coin.rank !== 0 && coin.is_active && !coin.is_new,
      ),
    );
  }, [data]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={cleanData}
        renderItem={({item}: any) => (
          <View>
            <Text>
              {item.name} <Text>{item.symbol}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
