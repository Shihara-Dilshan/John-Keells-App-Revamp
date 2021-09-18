import React from 'react';
import { View } from 'react-native';

export default function LineDividers({color, width=0.5}) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
      }}
    ></View>
  );
}

