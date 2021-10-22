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
import Icon from 'react-native-vector-icons/AntDesign';
import AppColors from '../../config/colors';
import LocationChangeBar from '../../components/homeTab/LocationChangeBar';
import {CategoryContext} from './../../contexts/homeTab/HomeTabContext';


export default AdBanner = () => {
  const [CategoryData, setCategoryData, actions] = useContext(CategoryContext);
  return (
    <View style={classes.searchInputContainer}>
        <TextInput
          style={classes.searchInput}
          placeholder="What are you looking for ?"
          onChangeText={(input) => {
            if(input == "" || input == " "){
            actions.resetSearch();
            }else{
              actions.search(input);
            }
          }}
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