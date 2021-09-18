import React from 'react';
import {View, Image, Text} from 'react-native';
import AppColors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';


export default function ItemCountController({icon, color}) {
  return (
    <Icon name={icon} size={30} color={color} />
  );
}
