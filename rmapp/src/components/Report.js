import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import ReportStyle from '../styles/ReportStyle';

const reports = [
  
  {
    id: 1,
    subtitle: '해외',
    title: 'Global Daily',
    date: '(2023-11-17)',
  },
  {
    id: 2,
    subtitle: 'daily',
    title: '+ github',
    date: '(go to github)',
  },
  {
    id: 3,
    subtitle: '해외',
    title: 'Global Daily',
    date: '(2023-11-15)',
  },
  {
    id: 4,
    subtitle: '해외',
    title: 'Global Daily',
    date: '(2023-11-14)',
  },
  {
    id: 5,
    subtitle: 'daily',
    title: '신한 생각',
    date: '(2023-11-14)',
  },
  {
    id: 6,
    subtitle: '해외',
    title: 'Global Daily',
    date: '(2023-11-13)',
  },
];

const Report = () => {
  const handlePress = () => {
    const url = 'https://github.com/shinhan-platform/stock.git';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };


  return (
    <ScrollView horizontal={true} style={ReportStyle.container}>
      {reports.map((report) => (
        <TouchableOpacity key={report.id} onPress={handlePress}>

          <View key={report.id} style={ReportStyle.square}>
            <Text style={ReportStyle.subtitle}>{report.subtitle}</Text>
            <Text style={ReportStyle.title}>{report.title}</Text>
            <Text style={ReportStyle.date}>{report.date}</Text>
          </View>
        </TouchableOpacity>

      ))}
    </ScrollView>
  );
};

export default Report;
