// GeniusStyle.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // ScrollView 스타일
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor :"#40404042",

  },
  imageContainer: {
    // 이미지와 텍스트 컨테이너 스타일
    alignItems: 'center',
    marginRight: 30,

  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50, // 원형 이미지
    marginBottom: 8,
  },
  text: {
    // 텍스트 스타일
    fontSize: 16,
    color: 'white',
  },
});
