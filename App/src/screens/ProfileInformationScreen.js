import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../config/colors';
import {Formik} from 'formik';

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
  const [selectedTitle, setSelectedTitle] = useState('Mr.');
  const initialValues = {
    title: 'mr',
    firstName: 'Shihara',
    lastName: 'Dilshan',
    phoneNumber: '768812527',
  };

  const updatedSuccessfullyToast = () => {
    ToastAndroid.showWithGravity(
      'Profile details updated successfully!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Text style={styles.headerText}>Edit Profile</Text>
          <Image
            style={styles.profImg}
            source={require('../assets/images/profile_edit.png')}
          />
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            values.title = selectedTitle;
            updatedSuccessfullyToast();
          }}>
          {props => (
            <View style={styles.infoContainer}>
              <View style={styles.formRow}>
                <Text style={styles.formRowHeader}>Title</Text>
                <View style={styles.titlePicker}>
                  <Picker
                    itemStyle={styles.pickerItem}
                    selectedValue={selectedTitle}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedTitle(itemValue)
                    }>
                    <Picker.Item label="Mr." value="mr" />
                    <Picker.Item label="Mrs." value="mrs" />
                    <Picker.Item label="Ms." value="ms" />
                    <Picker.Item label="Dr." value="dr" />
                    <Picker.Item label="Rev." value="rev" />
                  </Picker>
                </View>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.formRowHeader}>First Name</Text>
                <TextInput
                  value={props.values.firstName}
                  style={styles.formInput}
                  onChangeText={props.handleChange('firstName')}
                />
              </View>
              <View style={styles.formRow}>
                <Text style={styles.formRowHeader}>Last Name</Text>
                <TextInput
                  value={props.values.lastName}
                  style={styles.formInput}
                  onChangeText={props.handleChange('lastName')}
                />
              </View>
              <View style={styles.formRow}>
                <Text style={styles.formRowHeader}>Phone Number</Text>
                <View style={styles.formPhoneNumberInput}>
                  <View style={styles.flagContainer}>
                    <Image
                      style={styles.phoneFlag}
                      source={require('../assets/images/sl_flag.png')}
                    />
                  </View>
                  <Text style={styles.phoneCode}>+94</Text>
                  <TextInput
                    value={props.values.phoneNumber}
                    style={[styles.formInput, styles.phoneInput]}
                    keyboardType={'phone-pad'}
                    onChangeText={props.handleChange('phoneNumber')}
                  />
                </View>
              </View>
              <View style={styles.formRow}>
                <SaveButton title="Save Changes" onPress={props.handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const SaveButton = ({onPress, title}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 25,
  },
  headerText: {
    fontSize: 28,
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
  profImg: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    padding: 15,
    marginTop: 10,
  },
  formRow: {
    padding: 5,
  },
  formRowHeader: {
    letterSpacing: 0.5,
    fontSize: 16,
  },
  formInput: {
    borderWidth: 0.6,
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
    borderColor: AppColors.primaryGreen,
  },
  titlePicker: {
    borderWidth: 0.6,
    borderRadius: 6,
    borderColor: AppColors.primaryGreen,
  },
  pickerItem: {
    backgroundColor: AppColors.lightergrey,
    fontSize: 18,
  },
  formPhoneNumberInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  phoneCode: {
    marginTop: 8,
    padding: 8,
    color: AppColors.lightergrey,
  },
  phoneInput: {
    flex: 2,
  },
  flagContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: AppColors.formgrey,
    elevation: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  phoneFlag: {
    width: 32,
    height: 32,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: AppColors.primaryGreen,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 40,
  },
  appButtonText: {
    fontSize: 18,
    letterSpacing: 0.8,
    color: AppColors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
