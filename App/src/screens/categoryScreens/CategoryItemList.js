import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import AppColors from '../../config/colors';
import CategoryItem from './CategoryItem';
import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LineDividers from '../../components/common/LineDivider';
import EmptyCart from '../../components/shoppingCart/EmptyCart';
import {CartContext} from '../../contexts/cart/CartContext';

const Stack = createStackNavigator();

export default function CategoryItemList({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: AppColors.white,
        headerShown: true,
        headerTitleAlign: 'center',
        title: 'Select Product',
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
  const [search, setsearch] = useState('');
  const [filteredDate, setfilteredDate] = useState('');

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total = total + item._quatity * item._unitPrice;
    });
    return total.toString();
  };

  const searchFilter = text => {
    if (text) {
      const newData = cartItems.filter(item => {
        const itemData = item._title
          ? item._title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredDate(newData);
      setsearch(text);
    } else {
      setfilteredDate(cartItems);
      setsearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.emptyTop}></View>
      <Animatable.View animation="slideInUp">
        <View style={styles.cartBottomContainer}>
          <View style={styles.topRowContainer}>
            <TextInput
              style={styles.textInput}
              value={search}
              placeholder="Filter by product name"
              underlineColorAndroid="transparent"
              onChangeText={text => searchFilter(text)}
            />
          </View>
          <LineDividers color={AppColors.lightergrey} />
          {cartItems.length >= 1 ? (
            <FlatList
              keyExtractor={data => data._id}
              data={filteredDate}
              renderItem={item => {
                return (
                  <CategoryItem
                    image={item.item._imageUrl}
                    name={item.item._title}
                    quantity={item.item._quatity}
                    id={item.item._id}
                    unitPrice={item.item._unitPrice}
                  />
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
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 20,
  },
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
