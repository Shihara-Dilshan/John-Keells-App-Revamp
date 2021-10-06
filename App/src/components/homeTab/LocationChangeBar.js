import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';

const LocationChangeBar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: AppColors.primaryGreen,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: AppColors.primaryGreen,
          alignContent: 'center'
        }}>
        <Text style={{color: AppColors.white}}>Current Plan: Delivery to home</Text>
        <Icon
          name="location"
          size={20}
          color={AppColors.white}
          backgroundColor={AppColors.primaryGreen}
          onPress={() => {}}
        />
      </View>
      <Text style={{color: AppColors.white}}>Change</Text>
    </View>
  );
};

export default LocationChangeBar;
