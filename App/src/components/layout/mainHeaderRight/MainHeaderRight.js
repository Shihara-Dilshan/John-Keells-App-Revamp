import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';
import CartIconWithBadge from '../../customIcons/CartIconWithBadge';
import {CartContext} from '../../../contexts/cart/CartContext';

export default MainHeaderRight = ({navigation}) => {
  const [cartItems, setCartItems, actions] = useContext(CartContext);
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total = total + item._quatity * item._unitPrice;
    });
    return total.toString();
  };

  return (
    <View flexDirection="row" alignItems="center">
      <Text style={styles.titleStyle}>
        Rs. {calculateTotal().toString()}{' '}
        {calculateTotal().toString().includes('.') ? '' : '.00'}
      </Text>
      <CartIconWithBadge navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: AppColors.white,
  },
});
