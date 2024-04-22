import React, {useState} from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';
import { Image } from 'react-native';

const Screen1 = ({ navigation }) => {
const [titleText, setTitleText] = useState("Welcome to Shopping List App");
const bodyText = 'Your ultimate shopping companion! Our app makes grocery shopping a breeze,helping you stay organized and save time. With intuitive features and seamless functionality, managing your shopping list has never been easier. From weekly groceries to special occasions, create, customize, and share your lists effortlessly. Say goodbye to forgotten items and hello to stress-free shopping experiences. Download now and simplify your trips to the store!"';


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#a6e4d0' }}>
 <Text style={styles.baseText}>
      <Text style={styles.titleText} >
      {titleText}
        {'\n'}
        {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
        {'\n'}
        {'\n'}
        <Text style={{color:'red'}}>Click on Shopping List icon below to see Your List</Text>
        {'\n'}
        </Text>
        <Image source={require('./Image1.png')} style = {{ width: 200, height: 200 }}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
   
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: 19,
  },
  titleText: {
    fontSize: 29,
    fontWeight: 'bold',
    justifyContent: 'center', alignItems: 'center',
  },
});

export default Screen1;