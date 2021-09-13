import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';

export default DrawerItem = ({props, data}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(data.actionPageUrl);
      }}>
      <View style={styles.upperContainer}>
        <View style={styles.innerLeftContainer}>
          <Icon name={data.icon} size={30} color={AppColors.primarygrey} />
          <View style={styles.detailsContainer}>
            <Text style={styles.titleStyle}>{data.title}</Text>
            <Text style={styles.detailTitleStyle}>
              {data.subtitle}
            </Text>
          </View>
        </View>
        <Icon
          name="chevron-forward-sharp"
          size={20}
          color={AppColors.primarygrey}
        />
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: AppColors.lightergrey,
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  upperContainer: {
    height: 80,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    marginLeft: 15,
  },
  titleStyle: {
    fontSize: 18,
  },
  detailTitleStyle: {
    fontSize: 12,
    color: AppColors.primarygrey,
  },
});
