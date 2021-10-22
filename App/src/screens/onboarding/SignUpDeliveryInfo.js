import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColors from '../../config/colors';

const SignUpDeliveryInfo = ({navigation}) => {
  const [delInstructions, setDelInstructions] = useState('');
  const [instructionWordCount, setInstructionWordCount] = useState(0);
  const [addressCheckbox, setAddressCheckbox] = useState(true);

  const onChangeInstructions = text => {
    setDelInstructions(text);
    setInstructionWordCount(delInstructions.length);
  };

  const navigateToNextPage = () => {
    navigation.navigate('ContinueToHome');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Delivery Information</Text>
        <Text style={styles.headerDesc}>
          Please enter your delivery location details below
        </Text>
        <View style={styles.formRow}>
          <View style={styles.firstCol}>
            <View style={styles.col1}>
              <Text style={styles.inputTitles}>House No.</Text>
              <TextInput style={styles.formInput} />
            </View>
          </View>
          <View style={styles.secondCol}>
            <View style={styles.col2}>
              <Text style={styles.inputTitles}>Street Name</Text>
              <TextInput style={styles.formInput} />
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formCol}>
            <Text style={styles.inputTitles}>Suburb</Text>
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
        </View>
        <View style={styles.formRow}>
          <View style={styles.formCol}>
            <Text style={styles.inputTitles}>Delivery Instructions</Text>
            <TextInput
              style={styles.formInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={text => onChangeInstructions(text)}
              value={delInstructions}
            />
            <Text style={{textAlign: 'right'}}>{instructionWordCount}/120</Text>
          </View>
        </View>
        <View style={styles.formRow}>
          <Text style={{fontSize: 12, marginTop: -10}}>
            (Provide information relevant to the delivery i.e. landmarks near
            your home, call before delivery, times to avoid delivery, etc.)
          </Text>
        </View>
        <View style={[styles.formRow, styles.formCheckBox]}>
          <CheckBox
            disabled={false}
            value={addressCheckbox}
            onValueChange={newValue => setAddressCheckbox(newValue)}
            tintColors={{
              true: AppColors.primaryGreen,
              false: AppColors.primaryGreen,
            }}
          />
          <Text>Set as default address</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={navigateToNextPage}
            style={styles.nextBtn}>
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpDeliveryInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
  headerDesc: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    marginBottom: 30,
  },
  formRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  formCol: {
    flexDirection: 'column',
    flex: 1,
  },
  firstCol: {
    flex: 1,
    paddingRight: 4,
  },
  secondCol: {
    flex: 3,
  },
  col1: {
    flexDirection: 'column',
  },
  col2: {
    flexDirection: 'column',
  },
  inputTitles: {
    fontSize: 14,
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
  formCheckBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
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
