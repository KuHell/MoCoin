import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator color="black" size="large" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.View``;

export default Loading;
