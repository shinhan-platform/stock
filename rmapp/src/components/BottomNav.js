// BottomNav.js

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import styles from '../styles/BottomNavStyle';
function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <AntDesign name="home" size={24} color="white" />
        <Text style={styles.tabItem}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <AntDesign name="hearto" size={24} color="gray" />
        <Text style={styles.text}>관심</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <FontAwesome name="line-chart" size={24} color="gray" />
        <Text style={styles.text}>주식</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <AntDesign name="menuunfold" size={24} color="gray" />
        <Text style={styles.text}>전체</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomNav;
