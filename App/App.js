import React, {useEffect, useState, useContext} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AppColors from './src/config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

//TODO:: FIXME
console.disableYellowBox = true;

//custom components
import HomeScreen from './src/screens/HomeScreen';
import {CustomDrawer} from './src/components/layout/customDrawer/CustomDrawer';
import ProfileInformationScreen from './src/screens/ProfileInformationScreen';
import UtilityPaymentScreen from './src/screens/UtilityPaymentScreen';
import CheckProductAvailabilityScreen from './src/screens/CheckProductAvailabilityScreen';
import DeliverGridScreen from './src/screens/DeliverGridScreen';
import StoreLocatorScreen from './src/screens/StoreLocatorScreen';
import NexusRegistrationScreen from './src/screens/NexusRegistrationScreen';
import CatelogAndDealsScreen from './src/screens/CatelogAndDealsScreen';
import FAQScreen from './src/screens/FAQScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import TermsAndConditionsScreen from './src/screens/TermsAndConditionsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import HelpMeNevigateScreen from './src/screens/HelpMeNevigateScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import CartScreen from './src/screens/CartScreen';
import SignUpScreens from './src/screens/onboarding/SignUpScreens';
import Intro from './src/components/intro/intro';

import {AppAuthContext} from './src/contexts/app/AppAuthContext';

const Drawer = createDrawerNavigator();

const App = () => {
  const [splashLoading, setSplashLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashLoading(false);
    }, 2000);
  }, []);

  const [AppAuthState, setAppAuthState] = useContext(AppAuthContext);
  return !AppAuthState.isFirstTime ? (
    <NavigationContainer>
      <StatusBar backgroundColor={AppColors.black} />
      {splashLoading ? (
        <LoadingScreen />
      ) : AppAuthState.isLoggedIn ? (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          {/* 
          Define all the screens that needs to render(show) inside the custom
          drawer navigater. 
          */}

          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen
            name="ProfileInformation"
            component={ProfileInformationScreen}
          />
          <Drawer.Screen
            name="utilityPayments"
            component={UtilityPaymentScreen}
          />
          <Drawer.Screen
            name="checkProductAvailability"
            component={CheckProductAvailabilityScreen}
          />
          <Drawer.Screen name="DeliverGrid" component={DeliverGridScreen} />
          <Drawer.Screen name="Storelocator" component={StoreLocatorScreen} />
          <Drawer.Screen
            name="NexusRegistration"
            component={NexusRegistrationScreen}
          />
          <Drawer.Screen
            name="CateloguesAndDeals"
            component={CatelogAndDealsScreen}
          />
          <Drawer.Screen name="FAQ" component={FAQScreen} />
          <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
          <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
          <Drawer.Screen
            name="TermsAndConditions"
            component={TermsAndConditionsScreen}
          />
          <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Drawer.Screen
            name="HelpMeNevigate"
            component={HelpMeNevigateScreen}
          />
          {/* 
          Define all the screens that needs to render(show) outside the custom
          drawer navigater. 
          */}
          <Drawer.Screen name="cartScreen" component={CartScreen} />
        </Drawer.Navigator>
      ) : (
        <SignUpScreens />
      )}
    </NavigationContainer>
  ) : (
    <Intro />
  );
};

export default App;
