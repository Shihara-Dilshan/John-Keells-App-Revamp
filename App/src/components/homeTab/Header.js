import React, {useContext} from 'react';
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
  ScrollView
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';
import LocationChangeBar from '../../components/homeTab/LocationChangeBar';
import Icon from 'react-native-vector-icons/Ionicons';


export default Header = ({navigation}) => {
  const bannerImages = [1, 2, 3, 4, 5, 6];
  return (
    <View style={classes.searchInputContainer}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('searchSuggesion')
      }} >
        <View
            style={classes.searchInput}
          >
            <Icon name="search"  />
            <Text style={classes.searchText}>Search here</Text>
          </View>
      </TouchableOpacity>
        <LocationChangeBar navigation={navigation} />
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
      flexDirection: 'row',
      alignItems: 'center'
    },
    searchText: {
      marginLeft: 10
    }
  });