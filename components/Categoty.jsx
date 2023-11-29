import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Category = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState(route.params.category);


  
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // backgroundColor: '#fff',
    //     backgroundColor: '#d0cdcd',
    //   }}>
    //   <Text
    //     style={{
    //       color: '#21020d',
    //       fontSize: 25,
    //       fontWeight: '800',
    //       marginLeft: 20,
    //       marginTop: 20,
    //     }}>
    //     Headlines
    //   </Text>
    //   <View>
    //     <FlatList
    //       data={news}
    //       renderItem={({item}) => {
    //         return (
    //           <TouchableOpacity
    //             style={{
    //               // borderColor: '#515151',
    //               flex: 1,
    //               borderWidth: 1.5,
    //               width: '90%',
    //               height: 100,
    //               alignSelf: 'center',
    //               marginTop: 10,
    //               marginBottom: 10,
    //               borderRadius: 10,
    //               flexDirection: 'row',
    //               alignItems: 'center',
    //             }}
    //             onPress={() => {
    //               navigation.navigate('NewsDetails', {
    //                 data: item,
    //               });
    //             }}>
    //             <Image
    //               style={{
    //                 width: 100,
    //                 height: 95,
    //                 borderTopLeftRadius: 10,
    //                 borderBottomLeftRadius: 10,
    //               }}
    //               source={require('./images/background_img.jpeg')}
    //             />
    //             <View style={{padding: 10, flex: 2, flexDirection: 'column',  height: 'auto',
    //              width: '90%',}}>
    //               <Text
    //                 style={{
    //                   color: '#020000',
    //                   width: '90%',
    //                   fontSize: 15,
    //                   fontWeight: '600',
    //                 }}>
    //                 {item.name ? item.name.substring(0, 30) + '...' : '...'}
    //               </Text>
    //               <Text
    //                 style={{
    //                   color: '#464444',
    //                   width: '70%',
    //                   fontSize: 12,
    //                   marginTop: 5,
    //                 }}>
    //                 {item.description
    //                   ? item.description.substring(0, 30) + '...'
    //                   : '...'}
    //               </Text>
    //             </View>
    //             <View style={{flex: 1, marginRight: 10, }}>
    //               <Button 
    //               color= 'black'
    //                 title="Read More"
    //                 onPress={() => {
    //                   Linking.openURL(item.url);
    //                 }}
    //               />
    //             </View>
    //           </TouchableOpacity>
    //         );
    //       }}
    //     />
    //   </View>
    // </View>
    <View>
      <Text>{news}</Text>
    </View>
  );
};

export default Category;
