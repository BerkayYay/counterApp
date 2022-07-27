import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Counter() {
  const count = useSelector(state => state.counter.value);
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Count</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Counter;
