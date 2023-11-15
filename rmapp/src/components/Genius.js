import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import styles from '../styles/GeniusStyle';



const Genius = ({ images }) => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image.uri} style={styles.image} />
          <Text style={styles.text}>{image.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default Genius;
