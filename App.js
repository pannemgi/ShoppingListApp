
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';



const Tab = createBottomTabNavigator();


const TabNavigationApp = () => {
 
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1}  />
        <Tab.Screen style={{fontWeight: 'bold', color:'black'}} name="Shopping List" component={Screen2} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default TabNavigationApp;