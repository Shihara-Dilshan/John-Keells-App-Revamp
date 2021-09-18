import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import ItemCountController from './ItemCountController';

export default function ShoppingCartItem({image}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftPartContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.leftDetails}>
          <Text>Milk Mole</Text>
          <Text>2 units</Text>
          <Text style={{color: AppColors.primaryGreen}}>Rs. 500</Text>
        </View>
      </View>
      <View style={styles.rightPartContainer}>
        <ItemCountController
          icon="remove-circle-sharp"
          color={AppColors.primaryRed}
        />
        <Text style={{fontSize: 25}}> 5 </Text>
        <ItemCountController
          icon="add-circle-sharp"
          color={AppColors.primaryGreen}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  leftPartContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftDetails: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightPartContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
