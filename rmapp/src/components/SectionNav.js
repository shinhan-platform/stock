import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SectionNav = ({ menus }) => {
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  return (
    <View style={styles.navContainer}>
      {menus.map((menu, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.menuItem, menu === selectedMenu && styles.selectedMenuItem]}
          onPress={() => setSelectedMenu(menu)}
        >
          <Text style={[styles.menuText, menu === selectedMenu && styles.selectedMenuText]}>
            {menu}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SectionNav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menuItem: {
    padding: 10,
  },
  selectedMenuItem: {
    borderBottomColor : "white",
    borderBottomWidth: 3
  },
  menuText: {
    color: 'gray',
  },
  selectedMenuText: {
    fontSize: 18,
    color: 'white', 
  },
});
