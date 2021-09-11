import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';

export default MainHeaderRight = ({navigation}) => {
  return (
    <View flexDirection="row" alignItems="center">
      <Text style={{color: AppColors.white}}>Rs. 1,916.00</Text>

      <Icon.Button
        name="cart"
        size={25}
        backgroundColor={AppColors.primaryGreen}
        onPress={() => {}}
      />
    </View>
  );
};
