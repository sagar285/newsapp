import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
      
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 30, fontWeight: '700', color: 'rgb(141, 135, 135)'}}>
        MyNews
      </Text>
      <Text style={{fontSize: 30, fontWeight: '700', color: '#40051a'}}> App</Text>
    </View>
  );
};

export default Splash;
