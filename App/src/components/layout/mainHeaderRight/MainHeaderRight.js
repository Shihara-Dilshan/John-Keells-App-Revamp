import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';
import CartIconWithBadge from '../../customIcons/CartIconWithBadge';

export default MainHeaderRight = ({navigation}) => {
  return (
    <View flexDirection="row" alignItems="center">
      <Text style={styles.titleStyle}>Rs. 1,916.00</Text>
      <CartIconWithBadge navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: AppColors.white,
  },
});
