import React, { useRef, useEffect } from 'react';
import { View, Text, PanResponder, Animated, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/GeniusStyle';

const images = [
  { name: '워렌 버핏' },
  { name: '빌 게이츠' },
  { name: '캐시 우드' },
];

const screenWidth = Dimensions.get('window').width;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Genius = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: scrollXAnimated }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.vx >= 0.5) {
          Animated.timing(scrollXAnimated, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.vx <= -0.5) {
          Animated.timing(scrollXAnimated, {
            toValue: -screenWidth,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -screenWidth,
        duration: 10000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const renderImage = (item, index) => {
    const iconBackgroundColor = getRandomColor(); // 무작위 색상 생성
    return (
      <Animated.View
        key={index}
        style={[
          styles.imageContainer,
          {
            transform: [
              {
                translateX: Animated.multiply(
                  scrollXAnimated.interpolate({
                    inputRange: [-screenWidth, 0],
                    outputRange: [screenWidth, 0],
                  }),
                  -1
                ),
              },
            ],
            backgroundColor: iconBackgroundColor, // 무작위 색상 적용
          },
        ]}
      >
        <Icon name="user" size={30} color="black" style={styles.icon} />
        <Text style={styles.name}>{item.name}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            transform: [{ translateX: scrollXAnimated }],
          }}
          {...panResponder.panHandlers}
        >
          {images.map((item, index) => renderImage(item, index))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Genius;

