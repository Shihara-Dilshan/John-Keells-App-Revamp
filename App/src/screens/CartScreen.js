import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import AppColors from '../config/colors';
import {ScrollView} from 'react-native-gesture-handler';
import CommonButton from '../components/common/CommonButton';
import LineDivider from '../components/common/LineDivider';
import ShoppingCartItem from '../components/shoppingCart/ShoppingCartItem';

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

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyTop}></View>
      <Animatable.View animation="slideInUp">
        <View style={styles.cartBottomContainer}>
          <View style={styles.topRowContainer}>
            <View style={styles.topRow}>
              <Text>4 items</Text>
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
          <LineDivider color={AppColors.lightergrey} />
          {/*TODO:: Replace ScrollView with List View*/}
          <ScrollView>
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
          </ScrollView>
        </View>
      </Animatable.View>
    </View>
  );
};

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
});
