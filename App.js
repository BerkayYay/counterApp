import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Counter from './components/counterComp/counter';
import CounterActions from './components/counterComp/counterActions';
import store from './store';
import {Provider} from 'react-redux';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#999',
    flex: 1,
    justifyContent: 'center',
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Counter />
        <CounterActions />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
