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

export default ItemCategoryRow = () => {
    const bannerImages = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <View style={classes.subHeaderContainer}>
          <Text style={classes.subHeader}>Recommended</Text>
          <Icon style={classes.subHeaderIcon} name="right" width={20} />
        </View>
        <View style={classes.itemContainer}>
          <FlatList
            data={bannerImages}
            renderItem={({item}) => (
              <TouchableOpacity style={classes.recItem}>
                <View style={{alignItems: 'flex-end', margin: 10}}>
                  <Icon name="staro" size={18} />
                </View>
                <View style={{height: 100, alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/images/avacado.jpg')}
                    style={[classes.recItemImg]}
                  />
                </View>
                <Text style={{marginTop: 15, fontWeight: '600'}}>Avacado</Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    Rs.100 / 1kg
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 1,
                    margin: 10,
                    width: '100%',
                  }}>
                  <Text style={{fontSize: 12}}>Add to Cart</Text>
                  <Icon name="shoppingcart" size={18} />
                </View>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

const classes = StyleSheet.create({
    subHeaderContainer: {
      flexDirection: 'row',
      paddingHorizontal: 12,
      marginTop: 12,
    },
    subHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      margin: 0,
    },
    subHeaderIcon: {
      margin: 5,
      color: AppColors.black,
    },
    itemContainer: {
      flexDirection: 'column',
    },
    recItemImg: {
      width: 100,
      height: 100,
      margin: 10,
    },
    recItem: {
      padding: 0,
      width: 150,
      height: 230,
      margin: 10,
      borderRadius: 10,
      shadowColor: AppColors.black,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      backgroundColor: AppColors.white,
      borderWidth: 0.5,
      paddingHorizontal: 10,
    },
  });
  

