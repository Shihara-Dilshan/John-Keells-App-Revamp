import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import AppColors from '../config/colors';
import * as Animatable from 'react-native-animatable';

export default LoadingScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Animatable.View animation="zoomIn">
          <Image
            style={styles.imageLogo}
            source={require('./../../src/assets/images/keellslogo2.png')}
          />
        </Animatable.View>
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Developed by SLIIT 2021 SE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 100,
  },
  bottomTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  bottomText: {
    color: AppColors.primarygrey,
  },
});
