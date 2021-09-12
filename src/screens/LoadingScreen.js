import React from 'react';
import {Text, View, Image} from 'react-native';
import AppColors from '../config/colors';
import * as Animatable from 'react-native-animatable';

export default LoadingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 9,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animatable.View animation="zoomIn">
          <Image
            style={{width: 200, height: 100}}
            source={require('./../../src/assets/images/keellslogo2.png')}
          />
        </Animatable.View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom:10}}>
        <Text style={{color: AppColors.primarygrey}}>
          Developed by SLIIT 2021 SE
        </Text>
      </View>
    </View>
  );
};
