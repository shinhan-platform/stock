import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#2c3e50',  // 다크 배경 색상
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1',  // 밝은 텍스트 색상
  },
});

export default SectionTitle;
