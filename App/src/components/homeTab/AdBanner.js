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
    <FlatList
      data={bannerImages}
      renderItem={({item}) => (
        <View style={classes.banner}>
          <Image
            style={classes.bannerImage}
            source={require('../../assets/images/banner1.png')}
          />
        </View>
      )}
      horizontal
      style={{
        width: 380,
        borderRadius: 20,
      }}
    />
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
