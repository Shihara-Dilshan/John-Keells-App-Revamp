import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  View,
  Text,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AppColors from './src/config/colors';

//custom components
import HomeScreen from './src/screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppColors.primaryGreen} />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'My App',
          headerTintColor: AppColors.white,
          headerStyle: {
            backgroundColor: AppColors.primaryGreen,
          },
        }}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default App;