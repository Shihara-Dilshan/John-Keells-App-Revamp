import * as React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppImages from '../../config/images';

export default function PaymentCard({image, description}) {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: 10,
          width: Dimensions.get('screen').width - 24,
          justifyContent: 'flex-start',
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <PaymentImage image={image}/>
        <Text style={{marginLeft: 20}}>{description}</Text>
      </View>
    </ScrollView>
  );
}

const PaymentImage = ({image}) => {
  switch (image) {
    case 'master':
      return (
        <Image source={require('./../../assets/images/payment/master.png')} style={{height:60,borderRadius: 5}}/>
      );
    case 'Paypal':
      return (
        <Image source={require('./../../assets/images/payment/paypal.png')} style={{height:60,borderRadius: 5}}/>
      );
    case 'visa':
      return (
        <Image source={require('./../../assets/images/payment/visa.png')} style={{height:60,borderRadius: 5}}/>
      );
    default:
      return (
        <Image source={require('./../../assets/images/payment/visa.png')} style={{height:60,borderRadius: 5}}/>
      );
  }
};
