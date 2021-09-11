import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import DrawerHeader from '../../drawerHeader/DrawerHeader';

export function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, margin: 0, padding: 0}}>
          <DrawerHeader />
          <Drawer.Section style={{marginTop: 15}}>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate("ProfileInformation");
            }}><Text>sddsdsdsd</Text></TouchableOpacity>
            <Text>sddsdsdsd</Text>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
