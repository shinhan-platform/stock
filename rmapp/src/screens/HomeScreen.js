import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Chart from '../components/Chart';
import StockItem from '../components/StockItem';
import BottomNav from '../components/BottomNav';
import { mainStyles } from '../styles/mainStyles';
import SectionTitle from '../components/SectionTitle';
import MoreButton from '../components/MoreButton'; 


const HomeScreen = () => {
  const stockData = [
    { no : 1, name: '삼성전자', price: '82000', rate: '+0.5%' },
    { no : 2, name: 'SK하이닉스', price: '110000', rate: '+1.2%' },
    { no : 3, name: 'LG전자', price: '150000', rate: '-0.8%' },
    { no : 4, name: '삼성전자', price: '82000', rate: '+0.5%' },
    { no : 5, name: 'SK하이닉스', price: '110000', rate: '+1.2%' },
    { no : 6, name: 'LG전자', price: '150000', rate: '-0.8%' },
    { no : 8, name: '삼성전자', price: '82000', rate: '+0.5%' },
    { no : 9, name: 'SK하이닉스', price: '110000', rate: '+1.2%' },
  ];

  return (
    <ScrollView style={mainStyles.container}>
      <Header />
      <Chart />
      <SectionTitle title="실시간 랭킹" />
      <FlatList
        data={stockData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <StockItem {...item} />}
      />
      <MoreButton  />

      <BottomNav />
    </ScrollView>
  );
}

export default HomeScreen;
