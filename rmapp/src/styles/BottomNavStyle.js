import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3030303',
    height: 80,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center', // 아이콘과 텍스트를 세로 중앙 정렬
    color: 'white',
  },

  text: {
    color: 'grey', // 텍스트의 색상을 흰색으로 설정
  },
});

export default styles;
