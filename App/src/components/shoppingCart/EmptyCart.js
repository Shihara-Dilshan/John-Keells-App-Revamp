import * as React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import AppImages from '../../config/images';

export default function EmptyCart() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={AppImages.emptyCart} />
      <Text>Cart is empty</Text>
    </View>
  );
}
