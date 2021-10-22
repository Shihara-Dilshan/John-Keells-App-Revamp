import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppColors from '../../config/colors';
import {AppAuthContext} from '../../contexts/app/AppAuthContext';

const data = [
  {
    title: 'Welcome to keels super',
    text: "Hello,Log into your account for a quick and easy \nshopping experience Happy shopping!",

    bg: AppColors.primaryGreen,
  },
  {
    title: 'Touch any item in cart',
    text: 'Will display an icon to remove the item from the cart.\nYou can click on this icon to remove any item.',
    image: require('../../assets/images/cart/cart_intro_1.png'),
    bg: AppColors.primaryGreen,
  },
  {
    title: 'Tap on the remove icon',
    text: 'We will ask your confirmation to remove the item.',
    image: require('../../assets/images/cart/cart_intro_2.png'),
    bg: AppColors.primaryGreen,
  },
  {
    title: 'Altanative way to remove item',
    text: 'You can reduce item quantity by clicking \non the minus button. When you only have 1 itme left, \nit will ask you to remove the item fromthe cart',
    image: require('../../assets/images/cart/cart_intro_3.png'),
    bg: AppColors.primaryGreen,
  },
  {
    title: 'You are all set to go',
    text: "",
    //image: require('../../assets/images/cart/cart_intro_1.png'),

    bg: AppColors.primaryGreen,
  },
];

const _renderItem = ({item}) => {
  return (
    <View
      style={[
        styles.slide,
        {
          backgroundColor: item.bg,
        },
      ]}>
      <Text style={styles.title}>{item.title}</Text>
      {item.image === undefined || item.image === null ? null : (
        <Image source={item.image} style={styles.image} />
      )}
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default function Intro({item}) {
  const [AppAuthState, setAppAuthState] = useContext(AppAuthContext);
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={item => item.text}
        renderItem={_renderItem}
        data={data}
        onDone={() => {
          setAppAuthState({
            isFirstTime: false,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  image: {
    marginVertical: 32,
    
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
  },
});
