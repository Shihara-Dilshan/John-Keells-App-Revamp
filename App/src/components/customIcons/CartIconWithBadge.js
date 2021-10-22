import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';
import {CartContext} from '../../contexts/cart/CartContext';

export default CartIconWithBadge = ({navigation}) => {
  const [cartItems, setCartItems] = useContext(CartContext);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('cartScreen');
      }}>
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {cartItems.length > 9 ? '9+' : cartItems.length}
          </Text>
        </View>
        <View>
          <Icon.Button
            name="cart"
            size={25}
            backgroundColor={AppColors.primaryGreen}
            onPress={() => {
              navigation.navigate('cartScreen');
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 18,
    height: 18,
    position: 'absolute',
    top: 5,
    right: 12,
    zIndex: 1,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  badgeText: {
    color: 'white',
    textAlign: 'center',
    top: -1.2,
  },
});
