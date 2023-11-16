import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor :"#40404042",
    paddingVertical: 15, // 패딩 간격 조정
    
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    

  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  no: {
    fontSize: 13,
    color: 'skyblue',
    paddingRight: 10,
  },
   name: {
    fontSize: 17,
    color: 'white',
  },
  price: {
    fontSize: 18,
    color: 'white',
    paddingRight: 15,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 10,
    
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: '#007bff',
  },
  number: {
    fontWeight: 'bold',
    marginRight: 10, 
    color: '#333', 
  },
});
