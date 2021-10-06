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
import LocationChangeBar from '../../components/homeTab/LocationChangeBar';


export default AdBanner = () => {
  const bannerImages = [1, 2, 3, 4, 5, 6];
  return (
    <View style={classes.searchInputContainer}>
        <TextInput
          style={classes.searchInput}
          placeholder="What are you looking for ?"
        />
        <LocationChangeBar />
      </View>
  );
};


const classes = StyleSheet.create({
    container: {
      backgroundColor: AppColors.white,
      flex: 1,
    },
    searchInputContainer: {
      display: 'flex',
      justifyContent: 'center',
      height: 80,
      backgroundColor: AppColors.primaryGreen,
    },
    searchInput: {
      height: 40,
      backgroundColor: AppColors.white,
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 8,
    },
  });