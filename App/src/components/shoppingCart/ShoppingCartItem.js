import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, Alert} from 'react-native';
import AppColors from '../../config/colors';
import {CartContext} from '../../contexts/cart/CartContext';
import ItemCountController from './ItemCountController';
import Snackbar from 'react-native-snackbar';

export default function ShoppingCartItem({
  image,
  name,
  quantity,
  id,
  unitPrice,
}) {
  const [cartItems, setCartItems] = useContext(CartContext);

  function removeFromCart(id) {
    Alert.alert(
      'Confirm',
      'Are you sure want to remove this item from the cart?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const tempCart = cartItems;
            setCartItems([...cartItems.filter(item => item._id != id)]);
            Snackbar.show({
              text: 'Item removed from cart',
              duration: Snackbar.LENGTH_LONG,
              action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => {
                  setCartItems(tempCart);
                },
              },
            });
          },
        },
      ],
    );
  }
  const increaseItem = () => {
    const increadList = cartItems.map(item => {
      if (item._id == id) {
        item._quatity++;
        return item;
      }
      return item;
    });
    setCartItems(increadList);
  };

  const decreaseItem = () => {
    const increadList = cartItems.map(item => {
      if (item._id == id) {
        if (item._quatity > 1) {
          item._quatity--;
        } else {
          removeFromCart(id);
        }
        return item;
      }
      return item;
    });
    setCartItems(increadList);
  };

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
          <Text>{name}</Text>
          <Text>
            Rs {quantity} x {unitPrice}
          </Text>
          <Text style={{color: AppColors.primaryGreen}}>
            Rs. {quantity * unitPrice}
          </Text>
        </View>
      </View>
      <View style={styles.rightPartContainer}>
        <ItemCountController
          icon="remove-circle-sharp"
          color={AppColors.primarygrey}
          onPress={decreaseItem}
        />
        <Text style={{fontSize: 20}}> {quantity} </Text>
        <ItemCountController
          icon="add-circle-sharp"
          color={AppColors.primaryGreen}
          onPress={increaseItem}
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
