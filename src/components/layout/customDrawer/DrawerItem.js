import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../config/colors';

export default DrawerItem = ({props, data}) => {
    return(
        <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ProfileInformation');
              }}>
              <View
                style={{
                  height: 80,
                  padding: 15,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name={data.icon} size={30} color={AppColors.primarygrey} />
                  <View
                    style={{
                      display: 'flex',
                      padding: 0,
                      flexDirection: 'column',
                      marginLeft: 15,
                    }}>
                    <Text style={{fontSize: 18}}>{data.title}</Text>
                    <Text style={{fontSize: 12, color: AppColors.primarygrey}}>
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
              <View
                style={{
                  borderBottomColor: AppColors.lightergrey,
                  borderBottomWidth: 1,
                  marginLeft:15,
                  marginRight: 15
                }}
              />
            </TouchableOpacity>
    );
}