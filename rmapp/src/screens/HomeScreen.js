import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Chart from '../components/Chart';
import StockItem from '../components/StockItem';
import { mainStyles } from '../styles/mainStyles';
import SectionTitle from '../components/SectionTitle';
import MoreButton from '../components/MoreButton'; 
import SectionNav from '../components/SectionNav';
import Genius from '../components/Genius';
import BottomNav from '../components/BottomNav';



const HomeScreen = () => {
  const stockData = [
    { no : 1, name: '삼성전자', price: '82,000', rate: '+0.5%' },
    { no : 2, name: 'SK하이닉스', price: '110,000', rate: '+1.2%' },
    { no : 3, name: 'LG전자', price: '150,000', rate: '-0.8%' },
    { no : 4, name: '넥스트아이', price: '82,000', rate: '+0.5%' },
    { no : 5, name: '테고사이언스', price: '110,000', rate: '+1.2%' },
    { no : 6, name: '현대비앤지스틸', price: '15,000', rate: '-0.8%' },
    { no : 8, name: '해성옵틱스', price: '5,250', rate: '+0.5%' },
    { no : 9, name: '에스와이스틸텍', price: '295', rate: '+1.2%' },
  ];

  const sectionMenusItem = ['거래량', '인기', '급상승', '급하락'];

  return (
    <ScrollView style={mainStyles.container}>
      <Header />
      <Chart />
      <SectionTitle title="실시간 랭킹" />
      <SectionNav menus={sectionMenusItem} /> 

      <FlatList
        data={stockData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <StockItem {...item} />}
      />
      <MoreButton  />

      <SectionTitle title="주식의 신 따라하기 " />

      <Genius />



      <View style={mainStyles.contentContainer}>
        <BottomNav />

      </View>

    </ScrollView>
  );
}

export default HomeScreen;
