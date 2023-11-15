
 import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
    titleContainer: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Center items vertically
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 20, // Set the width of the logo image
        height: 20, // Set the height of the logo image
        marginLeft: 5, // Add some space between text and logo
    },
});
