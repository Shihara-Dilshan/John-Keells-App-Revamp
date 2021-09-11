import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeTab from './../../screens/homeTabScreens/HomeTab';
import CategoriesTab from './../../screens/homeTabScreens/CategoriesTab';
import OrdersTab from './../../screens/homeTabScreens/OrdersTab';
import SettingsTab from './../../screens/homeTabScreens/SettingsTab';

import AppColors from '../../config/colors';

const Tab = createBottomTabNavigator();

export default function HomeScreenTabNavigator() {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <Tab.Navigator
      options={{headerShown: false}}
      screenOptions={() => ({
        tabBarActiveTintColor: AppColors.primaryGreen,
        tabBarInactiveTintColor: AppColors.primarygrey,
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
            <Icon
              name="home"
              color={
                currentRoute === 'Home'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          header: () => {
            null;
          },
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
            <Icon
              name="align-justify"
              color={
                currentRoute === 'Orders'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          header: () => {
            null;
          },
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
            <Icon
              name="gears"
              color={
                currentRoute === 'Categories'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          header: () => {
            null;
          },
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
            <Icon
              name="user"
              color={
                currentRoute === 'Settings'
                  ? AppColors.primaryGreen
                  : AppColors.primarygrey
              }
              size={26}
            />
          ),
          header: () => {
            null;
          },
        }}
      />
    </Tab.Navigator>
  );
}
