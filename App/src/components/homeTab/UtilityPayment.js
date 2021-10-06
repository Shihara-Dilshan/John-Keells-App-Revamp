import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import AppColors from '../../config/colors';

export default AdBanner = () => {
  const bannerImages = [1, 2, 3, 4, 5, 6];
  return (
    <View
      style={{
        zIndex: 0,
        alignItems: 'center',
        backgroundColor: AppColors.secondaryGreen,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 180,
        width: '100%',
        marginTop: 30,
      }}>
      <Text style={{fontSize: 18, color: AppColors.white, marginTop: 10}}>
        Utility Payments
      </Text>
      <FlatList
        data={bannerImages}
        style={{marginTop: 10, marginBottom: 10}}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 20,
              height: 100,
              width: 100,
              backgroundColor: AppColors.white,
              margin: 10,
            }}>
            <Image
              source={item.img}
              style={{width: 60, height: 60, marginTop: 10}}
            />
            <Text style={{marginTop: 5, fontSize: 12, fontWeight: '600'}}>
              {item.title}
            </Text>
          </View>
        )}
        horizontal
      />
    </View>
  );
};

const classes = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  banner: {
    borderRadius: 20,
  },
  bannerImage: {
    width: Dimensions.get('screen').width - 20,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
