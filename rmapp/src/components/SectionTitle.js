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
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',  // 밝은 텍스트 색상
    marginTop : 13
  },
});

export default SectionTitle;
