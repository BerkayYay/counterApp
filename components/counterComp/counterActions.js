import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  clear,
} from '../redux/reducers/reducer';

function CounterActions() {
  const dispatch = useDispatch();
  const handleInputChange = text => {
    dispatch(incrementByAmount(Number(text)));
  };
  const textInput = useRef();
  return (
    <View style={styles.body}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(clear());
            textInput.current.clear();
          }}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={handleInputChange}
        ref={textInput}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    width: 70,
    height: 70,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  textInput: {
    width: '75%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#ddd',
  },
});

export default CounterActions;
