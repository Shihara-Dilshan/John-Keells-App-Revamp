import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../config/colors';

const Stack = createStackNavigator();

export default function ProfileInformationScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: AppColors.black,
        headerShown: true,
        headerTitleAlign: 'center',
        title: 'Profile Information',
        headerStyle: {
          backgroundColor: AppColors.white,
          elevation: 0,
        },
        headerLeft: () => (
          <View flexDirection="row" alignItems="center">
            <Icon.Button
              name="arrow-back"
              size={25}
              backgroundColor={AppColors.white}
              color={AppColors.black}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        ),
      }}>
      <Stack.Screen name="profile" component={ProfileInformation} />
    </Stack.Navigator>
  );
}

const ProfileInformation = () => {
  return (
    //TODO : do not use inline styles. use StyleSheet
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>Profile Information Screen</Text>
    </View>
  );
};
