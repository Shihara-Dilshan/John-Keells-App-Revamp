import React from 'react';
import {Button} from 'react-native-paper';
import AppColors from '../../config/colors';

export default function CommonButton({title, onPress, color, icon}) {
  return (
    <Button
      icon={icon}
      mode="contained"
      color={color}
      onPress={onPress}
      height={50}
      style={{justifyContent: "center"}}
      dark={color == AppColors.white ? false : true}>
      {title}
    </Button>
  );
}
