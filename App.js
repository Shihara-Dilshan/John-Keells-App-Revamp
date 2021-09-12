import React, {useEffect, useState} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AppColors from './src/config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

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

const Drawer = createDrawerNavigator();

const App = () => {
  const [splashLoading, setSplashLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashLoading(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppColors.black} />
      {splashLoading ? (
        <LoadingScreen />
      ) : (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          initialRouteName="Home"
          screenOptions={{
            //headerTintColor: AppColors.white,
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: AppColors.primaryGreen,
            // },
            // headerRight: () => (
            //   <View flexDirection="row" alignItems="center">
            //     <Text style={{color: AppColors.white}}>Rs. 1,916.00</Text>
            //     <Icon.Button
            //       name="cart"
            //       size={25}
            //       backgroundColor={AppColors.primaryGreen}
            //       onPress={() => {}}
            //     />
            //   </View>
            // ),
          }}>
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
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
