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
import ItemCard from './itemCard';

export default ItemCategoryRow = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <View style={classes.subHeaderContainer}>
          <Text style={classes.subHeader}>{data._title}</Text>
          <Icon style={classes.subHeaderIcon} name="right" width={20} />
        </View>
        <View style={classes.itemContainer}>
          <FlatList
            data={data._item}
            keyExtractor={item => item._id}
            renderItem={(item) => {
              return <ItemCard data={item.item}/>;
            }}
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
});
