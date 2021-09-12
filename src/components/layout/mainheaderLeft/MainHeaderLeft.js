import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
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
        style={styles.imageLogo}
        //TODO : remove hard coded images and use AppImages folder
        source={require('./../../../assets/images/keells_logo.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    width: 80,
    height: 24,
  },
});
