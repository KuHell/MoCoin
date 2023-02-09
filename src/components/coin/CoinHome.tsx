import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface propsType {
  index: number;
  symbol: string;
  id: string;
}

const CoinHome = ({index, symbol, id}: propsType) => {
  const navigation: any = useNavigation();
  const opacity = useRef(new Animated.Value(0)).current;

  //애니메이션 효과 차례대로 나오게 하기
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 30,
    }).start();
  }, []);

  // const scale = opacity.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0.7, 1],
  // });

  return (
    <CoinContainer
      // style={{opacity, transform: [{scale}]}}
      style={{opacity}}
      // onPress={() => navigation.navigate()}>
      onPress={() => navigation.navigate('CoinDetail', {symbol, id})}>
      <CoinIcon
        source={{
          uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
        }}
      />
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinContainer>
  );
};

// 코인 정보 출력 부분 애니메이션을 넣어줄 수 있는 component
const CoinContainer = styled(
  Animated.createAnimatedComponent(TouchableOpacity),
)`
  flex: 0.31;
  align-items: center;
  padding: 20px;
  background-color: #292929;
  border-radius: 5px;
`;

// 코인 Symbol
const CoinSymbol = styled.Text`
  color: white;
`;

// 코인 이미지
const CoinIcon = styled.Image`
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export default CoinHome;
