import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import AppColors from '../../config/colors';

export default function DrawerHeader() {
  return (
    <View style={styles.drawerHeaderContainer}>
      <View style={styles.titleSecondoryContainer}>
        <Title style={styles.title}>Shihara Dilshan</Title>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerHeaderContainer: {
    padding: 0,
    backgroundColor: AppColors.primaryGreen,
    marginTop: -9,
    height: 100,
  },
  titleSecondoryContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: AppColors.white,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
