import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../../config/colors';

const CommonBackBar = ({title,navigation}) => {
    return (
      <View style={styles.backBar}>
        <Icon.Button 
          name="chevron-back"
          size={25}
          backgroundColor={AppColors.white}
          color={AppColors.black}
          onPress={() => {navigation.goBack()}}
        />
        <View style={styles.backBarText}>
          <Text style={styles.backBarTextText}>{title}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    backBar: {
        display: 'flex',
        backgroundColor: AppColors.white,
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
      },
      backBarText: {
        flex: 1,
        marginLeft: 80
      },
      backBarTextText: {
        color: AppColors.black,
        fontWeight: 'bold',
        fontSize: 15
      },
})

export default CommonBackBar