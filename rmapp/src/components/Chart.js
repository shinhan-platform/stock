import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from '../styles/ChartStyle';

const indexData = [
    { name: '나스닥', price: 14130.29, volatility: 5.44, chartData: [14147.13, 14128.68, 14153.53, 14160.48, 14184.04, 14177.21, 14174.74, 14121.44, 14130.29] },
    { name: 'S&P 500', price: 4509.61, volatility: 6.01, chartData: [4505.3, 4514.66, 4515.49, 4518.55, 4514.11, 4515.61, 4504.81, 4508.5, 4509.61] },
    { name: '환율', price: 1305.31, volatility: -19.11, chartData: [1305.05, 1304.55, 1298.95, 1300.55, 1303.92, 1305.00, 1302.75, 1306.71, 1305.31] },
    { name: '코스피', price: 2486.67, volatility: 53.42, chartData: [2482.21, 2468.71, 2474.77, 2480.96, 2485.93, 2481.89, 2483.97, 2481.37, 2486.67] },
    { name: '코스닥', price: 809.36, volatility: 15.17, chartData: [808.68, 807, 809.99, 807.44, 807.61, 810.2, 811.75, 805.39, 809.36] },
];

const IndexItem = ({ name, price, volatility, chartData }) => {
    const lineColor = volatility >= 0 ? 'red' : 'blue';

    return (
    <View style={styles.indexBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={volatility >= 0 ? styles.positiveVolatility : styles.negativeVolatility}>
            {`${volatility >= 0 ? `+${volatility}` : volatility}`}
        </Text>
        <LineChart
            data={{
                datasets: [
                    {
                        data: chartData,
                    },
                ],
            }}
            width={styles.chart.width}
            height={styles.chart.height}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
                color: (opacity = 1) => lineColor,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 10,
                },
                propsForDots: {
                    r: '0',
                },
                propsForBackgroundLines: {
                    display: 'none',
                },
            }}
            bezier
            withVerticalLabels={false}
            withHorizontalLabels={false}
            decorator={() => (
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: '#333',
                        width: '100%',
                        top: '50%',
                        left: 0,
                    }}
                />
            )}
        />
    </View>
  );
};

const Chart = () => (
    <View>
    <ScrollView>
        <FlatList
            data={indexData}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <IndexItem {...item} />}
            horizontal
        />
    </ScrollView>
    </View>
);


export default Chart;

