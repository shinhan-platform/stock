import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const Chart = () => {
  // 차트에 사용할 데이터
  const data = {
    labels: ["1월", "3월", "6월", "9월", "12월"],
    datasets: [
      {
        data: [50, 45, 28, 80, 99],
        strokeWidth: 2, // 라인 두께
      },
    ],
  };

  // 화면 크기에 따라 차트 크기를 조정
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // 소수점 자리
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
        }}
        bezier // 부드러운 곡선
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default Chart;
