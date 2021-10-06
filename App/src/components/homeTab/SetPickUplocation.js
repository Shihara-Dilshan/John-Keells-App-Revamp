import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import AppColors from '../../config/colors';

export default SetPickUplocation = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          backgroundColor: AppColors.primaryGreen,
          borderTopLeftRadius: 20,
          justifyContent: 'center',
          borderBottomRightRadius: 20,
          height: 40,
          marginTop: 10,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text style={{color: AppColors.white}}>Set pickup location</Text>
      </View>
    </View>
  );
};
