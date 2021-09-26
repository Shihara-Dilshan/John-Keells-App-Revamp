import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../config/colors';
import {CartContext} from '../../contexts/cart/CartContext';
import ItemCountController from './ItemCountController';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ShoppingCartItem({
  image,
  name,
  quantity,
  id,
  unitPrice,
}) {
  const [cartItems, setCartItems, actions] = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.leftPartContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <View style={{position: "absolute", top: -15,left: 53}}>
          <TouchableOpacity onPress={() => actions.removeItem(id)}>
            <Icon
              name="close-circle-sharp"
              size={30}
              color={AppColors.primaryRed}
            />
          </TouchableOpacity>
          </View>
        </View>

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
          onPress={() => actions.decrementCartItemQuanity(id)}
        />
        <Text style={{fontSize: 20}}> {quantity} </Text>
        <ItemCountController
          icon="add-circle-sharp"
          color={AppColors.primaryGreen}
          onPress={() => actions.incrementCartItemQuanity(id)}
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
