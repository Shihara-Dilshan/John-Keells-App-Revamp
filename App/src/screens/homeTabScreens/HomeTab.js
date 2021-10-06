import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import AppColors from '../../config/colors';
import Carousel from './../../components/common/Carousel';
import ItemCategoryRow from '../../components/homeTab/ItemCategoryRow';
import AdBanner from '../../components/homeTab/AdBanner';
import Header from '../../components/homeTab/Header';

export default function HomeTab() {
  return (
    <ScrollView style={classes.container}>
      <Header />
      <Carousel />
      <ItemCategoryRow />
    </ScrollView>
  );
}

const classes = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  }
});
