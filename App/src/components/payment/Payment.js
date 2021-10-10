import * as React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import AppImages from '../../config/images';
import PaymentCard from "./PaymentCard";

export default function Payment() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Select a payment method</Text>
      <PaymentCard image='master' description="Pay with master card"/>
      <PaymentCard image='Visa' description="Pay with visa card"/>
      <PaymentCard image='Paypal' description="Pay with paypal"/>
    </View>
  );
}
