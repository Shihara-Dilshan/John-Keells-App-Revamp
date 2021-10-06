import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AppColors from '../../config/colors';

const TopTabNav = ({navigation, currentOrder}) => {
  const route = useRoute();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    setRouteColor();
  }, []);

  const setRouteColor = () => {
    return route.name == 'Order'
      ? setCurrentRoute(true)
      : setCurrentRoute(false);
  };

  const navigateToOrders = () => {
    navigation.navigate('Order', {id: currentOrder});
  };

  const navigateToItems = () => {
    navigation.navigate('ProductsInOrder', {id: currentOrder});
  };

  return (
    <View style={styles.headerContainer}>
      {currentRoute ? (
        <TouchableOpacity
          style={styles.selectedHeaderView}
          onPress={navigateToOrders}>
          <Text style={styles.selectedHeaderText}>Order Details</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.navItem} onPress={navigateToOrders}>
          <Text style={styles.headerText}>Order Details</Text>
        </TouchableOpacity>
      )}
      {currentRoute ? (
        <TouchableOpacity style={styles.navItem} onPress={navigateToItems}>
          <Text style={styles.headerText}>Item List</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.selectedHeaderView}
          onPress={navigateToItems}>
          <Text style={styles.selectedHeaderText}>Item List</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopTabNav;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: AppColors.headerGrey,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: AppColors.primarygrey,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginVertical: 8,
  },
  selectedHeaderText: {
    textAlign: 'center',
    color: AppColors.primaryGreen,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginVertical: 8,
  },
  selectedHeaderView: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: AppColors.primaryGreen,
  },
});
