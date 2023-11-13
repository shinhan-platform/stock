import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Chart from '../components/Chart';
import StockItem from '../components/StockItem';
import BottomNav from '../components/BottomNav';

import { mainStyles } from '../styles/mainStyles';

const HomeScreen = () => {
  return (
    <ScrollView style={mainStyles.container}>
    <Header />
      <Chart />
      {/* 하드코딩된 데이터  */}
      <StockItem name="삼성전자" price="82000" rate="+0.5%" />
      <StockItem name="SK하이닉스" price="110000" rate="+1.2%" />
      <StockItem name="삼성전자" price="82000" rate="+0.5%" />
      <StockItem name="SK하이닉스" price="110000" rate="+1.2%" />
      <StockItem name="삼성전자" price="82000" rate="+0.5%" />
      <StockItem name="SK하이닉스" price="110000" rate="+1.2%" />
      {/* 추가 종목 */}
      <BottomNav />

    </ScrollView>

  );
}

export default HomeScreen;
