import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/HeaderStyle';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Image
                    source={require('../img/shinhan.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>{title} SHINHAN BETA +</Text>
            </View>
        </View>
    );
}


export default Header;
