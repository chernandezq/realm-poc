import {AppProvider, useApp, UserProvider} from '@realm/react';
import React from 'react';
import RealmContext from './src/database';
import Router from './src/router';
import {Provider as PaperProvider} from 'react-native-paper';
import Login from './src/screens/Login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const {RealmProvider} = RealmContext;
  const queryClient = new QueryClient();

  return (
    <AppProvider id={'test-realtime-0-iruyh'}>
      <UserProvider fallback={Login}>
        <RealmProvider sync={{partitionValue: 'partition1'}}>
          <PaperProvider>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </PaperProvider>
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default App;
