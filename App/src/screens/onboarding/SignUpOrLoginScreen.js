import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../config/colors';

const SignUpOrLoginScreen = ({navigation}) => {
  const onClickNext = () => {
    navigation.navigate('UserInfo');
  };

  const navigateToHome = () => {
    //TODO Implement logic to navigate to Home page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Keells Online</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/keellslogo2.png')}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.formRow}>
          <Text style={styles.formRowHeader}>Phone Number</Text>
          <View style={styles.formPhoneNumberInput}>
            <View style={styles.flagContainer}>
              <Image
                style={styles.phoneFlag}
                source={require('../../assets/images/sl_flag.png')}
              />
            </View>
            <Text style={styles.phoneCode}>+94</Text>
            <TextInput
              style={[styles.formInput, styles.phoneInput]}
              keyboardType={'phone-pad'}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClickNext}
          style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.rowBetweenText}>Or</Text>
        <Text style={styles.rowBetweenText}>
          Just want to browse the store? Click below
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={navigateToHome}
          style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        title="Next screen"
        onPress={() => {
          navigation.navigate('second');
        }}
      /> */}
    </View>
  );
};

export default SignUpOrLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: AppColors.white,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 60,
  },
  logo: {
    width: 250,
    height: 100,
  },
  imgContainer: {
    width: 350,
    height: 150,
    padding: 8,
    alignItems: 'center',
    marginVertical: 45,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  formRow: {
    flex: 1,
    padding: 5,
  },
  formRowHeader: {
    letterSpacing: 0.5,
    fontSize: 16,
    color: AppColors.primaryGreen,
    marginBottom: 5,
  },
  formInput: {
    borderWidth: 0.6,
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
    borderColor: AppColors.primaryGreen,
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
  nextBtn: {
    flex: 1,
    backgroundColor: AppColors.primaryGreen,
    color: AppColors.white,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 8,
    elevation: 2,
    marginTop: 20,
  },
  nextBtnText: {
    color: AppColors.white,
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  rowBetween: {
    flexDirection: 'column',
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: -15,
  },
  rowBetweenText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
