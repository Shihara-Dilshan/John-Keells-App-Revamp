import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import AppColors from '../../config/colors';

export default function DrawerHeader() {
  return (
    <View
      style={{
        padding: 0,
        backgroundColor: AppColors.primaryGreen,
        marginTop: -9,
      }}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={{marginLeft: 15, flexDirection: 'column'}}>
          <Title
            style={{
              fontSize: 16,
              marginTop: 3,
              fontWeight: 'bold',
              color: AppColors.white,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            Shihara Dilshan
          </Title>
        </View>
      </View>

      <View
        style={{
          marginTop: 19,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 14,
            alignItems: 'center',
          }}></View>
      </View>
    </View>
  );
}
