import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import ItemCountController from './ItemCountController';

export default function ShoppingCartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.leftPartContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={styles.leftDetails}>
          <Text>Milk Mole</Text>
          <Text>2 units</Text>
          <Text>Rs. 500</Text>
        </View>
      </View>
      <View style={styles.rightPartContainer}>
        <ItemCountController
          icon="remove-circle-sharp"
          color={AppColors.lightergrey}
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
    paddingTop: 15,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
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
