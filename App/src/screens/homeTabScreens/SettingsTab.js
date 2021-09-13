import * as React from 'react';
import { Text, View } from 'react-native';

export default function SettingsTab() {
  return (
    //TODO : do not use inline styles. use StyleSheet
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings tab</Text>
    </View>
  );
}