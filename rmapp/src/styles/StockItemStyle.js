import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,

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
    fontSize: 25,
    color: 'skyblue',
    paddingRight: 10,
  },
   name: {
    fontSize: 20,
    color: 'white',
  },
  price: {
    fontSize: 20,
    color: 'white',
    paddingRight: 10,
  },
  text: {
    fontSize: 16,
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
    marginRight: 10, // Add some spacing between the number and the name
    color: '#333', // Adjust color as needed
  },
});
