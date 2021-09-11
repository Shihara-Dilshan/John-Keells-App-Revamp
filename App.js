import React from 'react';
import {
  StatusBar,
  Button,
  View,
  Text,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AppColors from './src/config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

//custom components
import HomeScreen from './src/screens/HomeScreen';
import { CustomDrawer } from './src/components/layout/customDrawer/CustomDrawer';
import ProfileInformationScreen from "./src/screens/ProfileInformationScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppColors.black} />
      <Drawer.Navigator
      
         drawerContent={(props) => <CustomDrawer {...props} />}
        
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: AppColors.white,
          headerShown: false,
          headerStyle: {
            backgroundColor: AppColors.primaryGreen,
          },
          headerRight: () => (
            <View flexDirection="row" alignItems="center">
              <Text style={{color: AppColors.white}}>Rs. 1,916.00</Text>
             
              <Icon.Button
                name="cart"
                size={25}
                backgroundColor={AppColors.primaryGreen}
                onPress={() => {}}
              />
            </View>
          ),
        }}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="ProfileInformation" component={ProfileInformationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;


