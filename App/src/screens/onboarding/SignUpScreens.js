import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';
import {AppAuthContext} from '../../contexts/app/AppAuthContext';
import SignUpOrLoginScreen from './SignUpOrLoginScreen';
import SignUpUserInfoScreen from './SignUpUserInfoScreen';
import SignUpDeliveryInfo from './SignUpDeliveryInfo';
import ContinueToHome from './ContinueToHome';

const Stack = createStackNavigator();

export default function SignUpScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="First" component={SignUpOrLoginScreen} />
      <Stack.Screen name="UserInfo" component={SignUpUserInfoScreen} />
      <Stack.Screen name="DeliveryInfo" component={SignUpDeliveryInfo} />
      <Stack.Screen name="ContinueToHome" component={ContinueToHome} />
    </Stack.Navigator>
  );
}

const signUpFirstScreen = ({navigation}) => {
  return (
    //TODO : do not use inline styles. use StyleSheet
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>sign up Screen 1</Text>
      <Button
        title="Already have account"
        onPress={() => {
          navigation.navigate('login');
        }}
      />
      <Button
        title="Next screen"
        onPress={() => {
          navigation.navigate('second');
        }}
      />
    </View>
  );
};

const signUpSecondScreen = ({navigation}) => {
  const [AppAuthState, setAppAuthState] = useContext(AppAuthContext);

  return (
    //TODO : do not use inline styles. use StyleSheet
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>sign up Screen 2</Text>
      <Button
        title="login"
        onPress={() => {
          setAppAuthState({isLoggedIn: true});
        }}
      />
    </View>
  );
};

const loginScreen = ({navigation}) => {
  const [AppAuthState, setAppAuthState] = useContext(AppAuthContext);

  return (
    //TODO : do not use inline styles. use StyleSheet
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>Login screen</Text>
      <Button
        title="goaback"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};
