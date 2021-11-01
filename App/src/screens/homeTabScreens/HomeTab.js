import React, {useContext} from 'react';
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';
import AppColors from '../../config/colors';
import Carousel from './../../components/common/Carousel';
import ItemCategoryRow from '../../components/homeTab/ItemCategoryRow';
import Header from '../../components/homeTab/Header';
import AdBanner from '../../components/homeTab/AdBanner';
import {CategoryContext} from '../../contexts/homeTab/HomeTabContext';

export default function HomeTab({navigation}) {
  const [CategoryData, setCategoryData] = useContext(CategoryContext);
  return (
    <View style={classes.container}>
      <Header navigation={navigation} />
      <FlatList
        data={[null, ...CategoryData]}
        keyExtractor={category => (category === null ? Math.random() : category._id)}
        renderItem={category => {
          if (category.item == null) {
            return <Carousel />;
          } else {
            return <ItemCategoryRow data={category.item}/>;
          }
        }}
      />
      
    </View>
  );
}

const classes = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
});
