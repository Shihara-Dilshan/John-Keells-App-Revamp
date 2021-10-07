import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColors from '../../config/colors';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';

const SignUpUserInfoScreen = ({navigation}) => {
  const [toggleTCCheckBox, setToggleTCCheckBox] = useState(false);
  const [togglePromotionsCheckBox, setTogglePromotionsCheckBox] =
    useState(false);

  const onPressSignUp = () => {
    navigation.navigate('DeliveryInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerHeading}>Sign Up</Text>
      <Text style={styles.headerDesc}>
        Sign up or Link your Existing Account
      </Text>
      <View style={styles.formRow}>
        <Text style={styles.formRowHeader}>Title</Text>
        <View style={styles.titlePicker}>
          <Picker
            itemStyle={styles.pickerItem}
            /*selectedValue={selectedTitle}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedTitle(itemValue)
                    }*/
          >
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
        <TextInput style={styles.formInput} />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.formRowHeader}>Last Name</Text>
        <TextInput style={styles.formInput} />
      </View>
      <View style={[styles.formRow, styles.formConditions]}>
        <CheckBox
          disabled={false}
          value={toggleTCCheckBox}
          onValueChange={newValue => setToggleTCCheckBox(newValue)}
          tintColors={{
            true: AppColors.primaryGreen,
            false: AppColors.primaryGreen,
          }}
        />
        <Text style={styles.finePrint}>
          I have read and agreed to your
          <Text style={styles.importantText}>Terms of Service</Text> and
          <Text style={styles.importantText}>Privacy Policy</Text> and hereby
          give consent for you to use my data in terms thereof.
        </Text>
      </View>
      <View style={[styles.formRow, styles.formConditions]}>
        <CheckBox
          disabled={false}
          value={togglePromotionsCheckBox}
          onValueChange={newValue => setTogglePromotionsCheckBox(newValue)}
          tintColors={{
            true: AppColors.primaryGreen,
            false: AppColors.primaryGreen,
          }}
        />
        <Text style={styles.finePrint}>
          I would like to recieve information about your products/services and
          promotions.
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressSignUp}
          style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpUserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: AppColors.white,
    padding: 20,
  },
  containerHeading: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 15,
  },
  headerDesc: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formRow: {
    marginVertical: 10,
    padding: 3,
  },
  formRowHeader: {
    letterSpacing: 0.5,
    fontSize: 16,
    marginVertical: 2,
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
  formInput: {
    borderWidth: 0.6,
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
    borderColor: AppColors.primaryGreen,
  },
  formConditions: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: -18,
    textAlign: 'left',
  },
  finePrint: {
    fontSize: 12,
    color: AppColors.lightestGrey,
  },
  importantText: {
    fontSize: 12,
    color: AppColors.primaryGreen,
    textDecorationLine: 'underline',
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: AppColors.primaryGreen,
    color: AppColors.white,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 12,
    elevation: 2,
  },
  nextBtnText: {
    color: AppColors.white,
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
