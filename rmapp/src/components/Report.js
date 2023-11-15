import React from 'react';
import { ScrollView, View, Text } from 'react-native';
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
    title: '신한 생각',
    date: '(2023-11-16)',
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
  return (
    <ScrollView horizontal={true} style={ReportStyle.container}>
      {reports.map((report) => (
        <View key={report.id} style={ReportStyle.square}>
          <Text style={ReportStyle.subtitle}>{report.subtitle}</Text>
          <Text style={ReportStyle.title}>{report.title}</Text>
          <Text style={ReportStyle.date}>{report.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Report;
