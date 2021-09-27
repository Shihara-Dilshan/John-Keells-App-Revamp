import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import AppColors from '../config/colors';
import ShoppingCartItem from '../components/shoppingCart/ShoppingCartItem';
import Snackbar from 'react-native-snackbar';

import React, {useState, useContext} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CommonButton from '../components/common/CommonButton';
import LineDividers from '../components/common/LineDivider';
import EmptyCart from '../components/shoppingCart/EmptyCart';
import {IconButton} from 'react-native-paper';
import {CartContext} from '../contexts/cart/CartContext';

const Stack = createStackNavigator();

export default function CartScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: AppColors.white,
        headerShown: true,
        headerTitleAlign: 'center',
        title: 'Shopping Cart',
        headerStyle: {
          backgroundColor: AppColors.primaryGreen,
          elevation: 0,
        },
        headerLeft: () => (
          <View flexDirection="row" alignItems="center">
            <Icon.Button
              name="arrow-back"
              size={25}
              backgroundColor={AppColors.primaryGreen}
              color={AppColors.white}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        ),
      }}>
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}

function Cart() {
  const [cartItems, setCartItems, actions] = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total = total + item._quatity * item._unitPrice;
    });
    return total.toString();
  };

  function clearCart() {
    Alert.alert(
      'Confirm',
      'Are you sure want to remove all items from the cart?',
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
            actions.clearFullCart();
            Snackbar.show({
              text: 'Cart has been cleared',
              duration: Snackbar.LENGTH_LONG,
              action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => {
                  actions.undoClearFullCart(tempCart);
                },
              },
            });
          },
        },
      ],
    );
  }

  const renderLeftActions = id => {
    return (
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 25,
        }}>
        <IconButton
          icon="delete-forever"
          color={'red'}
          size={25}
          onPress={() => {
            actions.removeItem(id);
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.emptyTop}></View>
      <Animatable.View animation="slideInUp">
        <View style={styles.cartBottomContainer}>
          <View style={styles.topRowContainer}>
            <View style={styles.topRow}>
              <View style={styles.cartTopDataLeft}>
                <Icon name="cart" size={20} color="black" />
                <Text style={styles.cartTopDataLeftText}>
                  {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}
                </Text>
              </View>
              <Text>Total - Rs {calculateTotal()}</Text>
            </View>
            <View style={styles.topRow}>
              <CommonButton
                title="Clear"
                onPress={clearCart}
                color={AppColors.white}
              />
              <CommonButton
                title="Check Out"
                onPress={() => {}}
                color={AppColors.primaryGreen}
              />
            </View>
          </View>
          <LineDividers color={AppColors.lightergrey} />
          {cartItems.length >= 1 ? (
            <FlatList
              keyExtractor={data => data._id}
              data={cartItems}
              renderItem={item => {
                return (
                  // <Swipeable
                  //   renderRightActions={() => renderLeftActions(item.item._id)}
                  //   onSwipeableWillOpen={() => {}}>
                    <ShoppingCartItem
                      image={item.item._imageUrl}
                      name={item.item._title}
                      quantity={item.item._quatity}
                      id={item.item._id}
                      unitPrice={item.item._unitPrice}
                    />
                  // </Swipeable>
                );
              }}
            />
          ) : (
            <EmptyCart />
          )}
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.primaryGreen,
    display: 'flex',
  },
  cartBottomContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 40,
    backgroundColor: AppColors.white,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    width: Dimensions.get('window').width,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  topRowContainer: {
    display: 'flex',
    marginBottom: 10,
  },
  emptyTop: {
    flex: 1,
  },
  cartTopDataLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  cartTopDataLeftText: {
    marginLeft: 5,
  },
});
