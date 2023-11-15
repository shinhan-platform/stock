import { StyleSheet } from 'react-native';

const ReportStyle = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로 배치
    overflow: 'scroll', // 스크롤 가능하도록
    marginBottom: 20, // 각 정사각형 간의 간격
    backgroundColor :"#40404042",


  },
  square: {
    width: 110, // 정사각형 너비
    height: 120, // 정사각형 높이
    backgroundColor: 'white', // 배경색
    margin: 15, // 각 정사각형 간의 간격
    padding: 10, // 내부 여백
    borderRadius :15
  },
  subtitle: {
    fontSize: 16, // 소제목 글자 크기
    marginBottom: 5, // 제목과의 간격
    marginBottom : 10,
    color : '#4834d4',
    fontWeight: 'bold', // 소제목 굵기

  },
  title: {
    fontSize: 20, // 메인 제목 글자 크기
    marginBottom: 5, // 날짜와의 간격
    fontWeight: 'bold', // 소제목 굵기

  },
  date: {
    fontSize: 14, // 날짜 글자 크기
    color: 'gray', // 회색

  },
});

export default ReportStyle;
