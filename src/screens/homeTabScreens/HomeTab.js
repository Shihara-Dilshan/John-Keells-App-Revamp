import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home tab</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}