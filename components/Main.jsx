import {View, Text, FlatList, Image, TouchableOpacity, Button, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { meraapnaarray } from './pack';

const Main = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState(meraapnaarray);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#d0cdcd',
        }}>
      <Text
        style={{
          color: '#21020d',
          fontSize: 25,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Categories
      </Text>
      <View style={{marginTop: 20, height: 170}}>
        <FlatList
          data={[
            {title: 'technology', image: require('./images/image_technology.jpeg')},
            {title: 'health', image: require('./images/image_health.jpeg')},

            {title: 'business', image: require('./images/image_buss.jpg')},
          ]}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 150,
                  // borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  // borderWidth: 1.5,
                  // borderColor: '#6c6a6a',
                }}
                onPress={() => {
                  navigation.navigate('CategoryNews', {
                    category: item.title,
                  });
                }}>
                <View style={{width: '80%', height: '100%', borderRadius: 20}}>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: '80%', borderRadius: 20}}
                  />
                  <View
                    style={{
                      // width: '100%',
                      // height: '100%',
                      borderRadius: 20,
          
                      // backgroundColor: 'rgba(254, 252, 252, 0.5)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: '#1a1818', fontSize: 20, fontWeight: '700'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          color: '#21020d',
          fontSize: 25,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,

        }}>
        Headlines
      </Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  borderColor: '#666565',
                  borderWidth: 1,
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage ? item.urlToImage :"https://www.springwise.com/wp-content/uploads/2023/11/innovationmobility-transportall-electric-last-mile-deliveries-mobility-and-infrastructure.png" }}
                  style={{
                    width: 100,
                    height: 95,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={{
                  padding: 10,
                 height: 'auto',
                 width: '90%',
                flex:2,
                }}>
                  <Text
                    style={{
                      color: '#020000',
                      width: '90%',
                      fontSize: 15,
                      fontWeight: '700',
                    }}>
                    { item && item.title ?  item.title.substring(0,30) + '...':"title"}
                  </Text>
                  <Text
                    style={{
                      color: '#464444',
                      width: '70%',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                   { item && item.description ?  item.description.substring(0,30) + '...' :"Description"}
                  </Text>
                </View>
                <View style={{flex: 1, marginRight: 10, }}>
                  <Button 
                  color= 'black'
                    title="Read More"
                    onPress={() => {
                      Linking.openURL( item.url ? item.url : "https://www.google.com/");
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;
