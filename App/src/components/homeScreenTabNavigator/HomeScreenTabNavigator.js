import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import HomeTab from './../../screens/homeTabScreens/HomeTab';
import CategoriesTab from './../../screens/homeTabScreens/CategoriesTab';
import OrdersTab from './../../screens/homeTabScreens/OrdersTab';
import SettingsTab from './../../screens/homeTabScreens/SettingsTab';

import AppColors from '../../config/colors';
import MainHeaderLeft from './../layout/mainheaderLeft/MainHeaderLeft';
import MainHeaderRight from './../layout/mainHeaderRight/MainHeaderRight';

const Tab = createBottomTabNavigator();

export default function HomeScreenTabNavigator({navigation}) {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <Tab.Navigator
      options={{headerShown: true}}
      screenOptions={() => ({
        tabBarActiveTintColor: AppColors.primaryGreen,
        tabBarInactiveTintColor: AppColors.primarygrey,
        headerTitle: '',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        listeners={{
          tabPress: () => {
            setCurrentRoute('Home');
          },
        }}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              name="home"
              color={
                currentRoute === 'Home'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: AppColors.primaryGreen,
          },
          headerLeft: () => <MainHeaderLeft navigation={navigation} />,
          headerRight: () => <MainHeaderRight navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersTab}
        listeners={{
          tabPress: () => {
            setCurrentRoute('Orders');
          },
        }}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              name="menu"
              color={
                currentRoute === 'Orders'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: AppColors.primaryGreen,
          },
          headerLeft: () => <MainHeaderLeft navigation={navigation} />,
          headerRight: () => <MainHeaderRight navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesTab}
        listeners={{
          tabPress: () => {
            setCurrentRoute('Categories');
          },
        }}
        options={{
          tabBarIcon: () => (
            <MaterialIcon
              name="category"
              color={
                currentRoute === 'Categories'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: AppColors.primaryGreen,
          },
          headerLeft: () => <MainHeaderLeft navigation={navigation} />,
          headerRight: () => <MainHeaderRight navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTab}
        listeners={{
          tabPress: () => {
            setCurrentRoute('Settings');
          },
        }}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              name="person"
              color={
                currentRoute === 'Settings'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: AppColors.primaryGreen,
          },
          headerLeft: () => <MainHeaderLeft navigation={navigation} />,
          headerRight: () => <MainHeaderRight navigation={navigation} />,
        }}
      />
    </Tab.Navigator>
  );
}
