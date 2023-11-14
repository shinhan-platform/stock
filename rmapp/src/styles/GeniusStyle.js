import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor :"#40404042",
    padding : 20

  },
  imageRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 50, // 원형 모양으로 만들기 위한 속성
    padding: 25, // 아이콘 주변의 간격 조절
  },
  name: {
    marginTop: 5,
  },
});

export default styles;
