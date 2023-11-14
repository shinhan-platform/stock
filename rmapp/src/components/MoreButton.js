import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MoreButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>더보기 ▼</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    //backgroundColor: '#007bff',
    //borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default MoreButton;
