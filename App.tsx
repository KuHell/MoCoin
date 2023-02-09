import React from 'react';
import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import InNav from './src/navigation/InNav';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <InNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
