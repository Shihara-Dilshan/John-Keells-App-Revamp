import React from 'react';
import {View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import DrawerHeader from '../../drawerHeader/DrawerHeader';
import DrawerItem from "./DrawerItem";
import drawerItemsList from "./misc/drawerItemsList"

export function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
       <DrawerHeader />
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, margin: 0, padding: 0}}>
          <Drawer.Section style={{marginTop: 0}}>
            {drawerItemsList.map( (data) => {
              return <DrawerItem props={props} data={data}/>
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
