import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/StockItemStyle';

const StockItem = ({ name, price, rate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{price}</Text>
      <Text style={styles.text}>{rate}</Text>
    </View>
  );
}

export default StockItem;
