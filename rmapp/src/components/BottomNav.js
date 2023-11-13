import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/BottomNav';

const BottomNav = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}여기는 아래 navi 자리 </Text>
      {/* 필요한 경우 여기에 추가 버튼이나 로고 포함 */}
    </View>
  );
}



export default BottomNav;
