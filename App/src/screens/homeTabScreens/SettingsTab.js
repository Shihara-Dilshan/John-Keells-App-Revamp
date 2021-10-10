import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Appbar} from 'react-native-paper';
import AppColors from '../../config/colors';
import FontAwesomeIcon from 'react-native-vector-icons/Ionicons';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import ProfileInformationScreen from '../ProfileInformationScreen';
import {AppAuthContext} from '../../contexts/app/AppAuthContext';
import { SettingsScreen } from "react-native-settings-screen"


export default function SettingsTab() {
  const ProfileEditStack = createStackNavigator();
  return (
    <ProfileEditStack.Navigator>
      <ProfileEditStack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          headerShown: false,
        }}
      />
      <ProfileEditStack.Screen
        name="ProfileEdit"
        component={ProfileInformationScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileEditStack.Navigator>
  );
}

const ProfileSettings = ({navigation}) => {
  const [AppAuthState, setAppAuthState] = React.useContext(AppAuthContext);
  const logout = () => {
    setAppAuthState({isLoggedIn: false});
  };

  const LogoutAlert = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout of your account on this device?',
      [
        {
          text: 'NO',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'YES', onPress: () => logout},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>
      <Text style={styles.headerText}>Update your account settings</Text>
      <View style={styles.optionSection}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('ProfileEdit');
          }}>
          <View style={styles.optionRow}>
            <FontAwesomeIcon
              name="person"
              color={AppColors.primarygrey}
              size={26}
            />
            <View style={styles.rowCol}>
              <Text style={styles.colMain}>Profile Information</Text>
              <Text style={styles.colNormal}>Update your profile details</Text>
            </View>
            <FontAwesomeIcon
              name="chevron-forward-outline"
              color={AppColors.primarygrey}
              size={26}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={LogoutAlert}>
          <View style={styles.optionRow}>
            <FontAwesomeIcon
              name="power"
              color={AppColors.primarygrey}
              size={26}
            />
            <View style={[styles.rowCol, styles.secondRowCol]}>
              <Text style={styles.colMain}>Log out</Text>
              <Text style={styles.colNormal}>Logout of your account</Text>
            </View>
            <FontAwesomeIcon
              name="chevron-forward-outline"
              color={AppColors.primarygrey}
              size={26}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColors.white,
  },
  header: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: '500',
  },
  headerText: {
    marginTop: 5,
  },
  optionSection: {
    padding: 15,
    marginVertical: 30,
    width: '100%',
  },
  optionRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: AppColors.primarygrey,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCol: {
    flexDirection: 'column',
    marginLeft: -40,
  },
  secondRowCol: {
    marginLeft: -60,
  },
  colMain: {
    fontSize: 18,
    fontWeight: '500',
  },
  colNormal: {
    fontSize: 14,
  },
});
