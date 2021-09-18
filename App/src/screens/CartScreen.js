import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import AppColors from '../config/colors';
import ShoppingCartItem from '../components/shoppingCart/ShoppingCartItem';

import React, {useState} from 'react';
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
import {IconButton} from 'react-native-paper';

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
  const [data, setData] = useState([1, 2, 3, 4, 5, 67, 8, 9]);
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
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
          onPress={() => console.log('Pressed')}
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
                <Text style={styles.cartTopDataLeftText}>4 items</Text>
              </View>
              <Text>Total - Rs 2300</Text>
            </View>
            <View style={styles.topRow}>
              <CommonButton
                title="Clear"
                onPress={() => {}}
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
          <FlatList
            keyExtractor={data => data}
            data={data}
            renderItem={item => (
              <Swipeable
                renderRightActions={renderLeftActions}
                onSwipeableWillOpen={() => {}}>
                <ShoppingCartItem image="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Swipeable>
            )}
          />
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
