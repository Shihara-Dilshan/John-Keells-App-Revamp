import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../config/colors';
import MainHeaderLeft from '../components/layout/mainheaderLeft/MainHeaderLeft';

const Stack = createStackNavigator();

export default function UtilityPaymentScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: AppColors.white,
        headerShown: true,
        headerTitleAlign: 'center',
        title: '',
        headerStyle: {
          backgroundColor: AppColors.primaryGreen,
          elevation: 0,
        },
        headerLeft: () => <MainHeaderLeft navigation={navigation} />,
        headerRight: () => (
          <View flexDirection="row" alignItems="center">
            <Icon.Button
              name="reader-sharp"
              size={25}
              backgroundColor={AppColors.primaryGreen}
              color={AppColors.white}
              onPress={() => {
              }}
            />
          </View>
        ),
      }}>
      <Stack.Screen name="First" component={UtilityScreenFirst} />
      <Stack.Screen name="second" component={UtilityScreenSecond} />
    </Stack.Navigator>
  );
}

const UtilityScreenFirst = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>Utility payment Information Screen 1</Text>
    </View>
  );
};

const UtilityScreenSecond = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
      }}>
      <Text>Utility payment Information Screen 2</Text>
    </View>
  );
};
