import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import AppColors from '../../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CommonDatePicker() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={{backgroundColor: AppColors.lightergrey90, height: 50, borderRadius: 5}}>
          <TouchableOpacity></TouchableOpacity>
          <TextInput
            disabled
            editable={false}
            placeholder={'20/11/2021'}
            style={[styles.formInput, styles.dateInput]}
            keyboardType={'phone-pad'}
          />
          <View
            style={{
              height: 50,
              width: 70,
              backgroundColor: AppColors.lightergrey90,
              position: 'absolute',
              right: 0,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="calendar" size={25} />
          </View>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  formInput: {
    borderWidth: 0.6,
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
    borderColor: AppColors.primarygrey,
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
  dateInput: {
    flex: 2,
  },
});
