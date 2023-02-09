import React from 'react';
import styled from 'styled-components/native';

interface propsType {
  symbol: string;
}

const CoinHome = ({symbol}: propsType) => {
  return (
    <CoinContainer>
      <CoinIcon
        source={{
          uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
        }}
      />
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinContainer>
  );
};

// 코인 정보 출력 부분
const CoinContainer = styled.View`
  flex: 0.31;
  align-items: center;
  width: 100%;
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
