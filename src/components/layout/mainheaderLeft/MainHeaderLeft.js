import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';

export default MainHeaderLeft = ({navigation}) => {
  return (
    <View flexDirection="row" alignItems="center">
      <Icon.Button
        name="menu"
        size={25}
        backgroundColor={AppColors.primaryGreen}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Image
        style={{width: 80, height: 24}}
        source={require('./../../../assets/images/keells_logo.jpg')}
      />
    </View>
  );
};
