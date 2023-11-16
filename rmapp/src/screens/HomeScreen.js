import React from 'react';
import { ScrollView, View, SafeAreaView, FlatList } from 'react-native';

import Header from '../components/Header';
import Chart from '../components/Chart';
import StockItem from '../components/StockItem';
import { mainStyles } from '../styles/mainStyles';
import SectionTitle from '../components/SectionTitle';
import MoreButton from '../components/MoreButton'; 
import SectionNav from '../components/SectionNav';
import Genius from '../components/Genius';
import Report from '../components/Report'
import BottomNav from '../components/BottomNav';



const HomeScreen = () => {
  const stockData1 = [
    { no : 1, name: '삼성전자', price: '82,000', rate: '+0.5%' },
    { no : 2, name: 'SK하이닉스', price: '110,000', rate: '+1.2%' },
    { no : 3, name: 'LG전자', price: '150,000', rate: '-0.8%' },
    { no : 4, name: '넥스트아이', price: '82,000', rate: '+0.5%' },
    { no : 5, name: '테고사이언스', price: '110,000', rate: '+1.2%' },
    { no : 6, name: '현대비앤지스틸', price: '15,000', rate: '-0.8%' },
    { no : 8, name: '해성옵틱스', price: '5,250', rate: '+0.5%' },
    { no : 9, name: '에스와이스틸텍', price: '295', rate: '+1.2%' },
  ];

  const stockData2 = [
    { no : 1, name: '셀릭틱스', price: '82,000', rate: '+0.5%' },
    { no : 2, name: '아메리칸 라소시스', price: '110,000', rate: '+1.2%' },
    { no : 3, name: '압사이', price: '150,000', rate: '-0.8%' },
    { no : 4, name: '닉스', price: '82,000', rate: '+0.5%' },
    { no : 5, name: '테고사이언스', price: '110,000', rate: '+1.2%' },
    { no : 6, name: '현대비앤지스틸', price: '15,000', rate: '-0.8%' },
    { no : 8, name: '해성옵틱스', price: '5,250', rate: '+0.5%' },
    { no : 9, name: '에스와이스틸텍', price: '295', rate: '+1.2%' },
  ];

  const sectionMenusItem = ['거래량', '인기', '급상승', '급하락'];
  const sectionMenusItem2 = ['국내', '해외'];

  const images = [
    { uri: require('../../assets/chat01.png'), name: '워렌버핏' },
    { uri: require('../../assets/rino01.png'), name: '켄 그리핀' },
    { uri: require('../../assets/sol02.png'), name: '희빈 정' },
    { uri: require('../../assets/chat01.png'), name: '캐시우드' },
    { uri: require('../../assets/rino01.png'), name: '영현 나' },
    { uri: require('../../assets/sol02.png'), name: '하린 김' },

  
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <ScrollView style={mainStyles.container}>
      <Header />

      <SectionTitle title="오늘의 지수" />
      <Chart />

      <SectionTitle title="실시간 랭킹" />
      <SectionNav menus={sectionMenusItem} /> 
      <FlatList
        data={stockData1}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <StockItem {...item} />}
      />
      <MoreButton  />

      <SectionTitle title="거래가 활발한 주식" />
      <SectionNav menus={sectionMenusItem2} /> 
      <FlatList
        data={stockData2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <StockItem {...item} />}
      />
      <MoreButton  />



      <SectionTitle title="주식의 신 따라하기 " />
      <Genius images={images} />

      <SectionTitle title="따끈따끈 신한 리포트" />
      <Report />
      </ScrollView>



      <View style={mainStyles.bottomNav}>
        <BottomNav />
      </View>

      </SafeAreaView>

  );
}

export default HomeScreen;
