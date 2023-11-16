import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({
    indexBox: {
        backgroundColor: '#333',
        width: 150,
        height: 150,
        padding: 16,
        margin: 8,
        borderRadius: 10,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 1.5,
    },
    price: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 1.5,
    },
    positiveVolatility: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 1.5,
    },
    negativeVolatility: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 14,
        padding: 1.5,
    },
    chart: {
        marginHorizontal: 10,
        width: 100,
        height: 60,
    },
});