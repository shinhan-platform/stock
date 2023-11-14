import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/StockItemStyle';

const StockItem = ({no, name, price, rate }) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.no}>{no}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={[styles.text, rate.startsWith('+') ? styles.redText : styles.blueText]}>
          {rate}
        </Text>
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Icon
            name={selected ? 'heart' : 'heart-o'}
            size={20}
            color={selected ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StockItem;