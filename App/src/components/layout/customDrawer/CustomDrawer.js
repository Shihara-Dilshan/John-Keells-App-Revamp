import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import DrawerHeader from '../../drawerHeader/DrawerHeader';
import DrawerItem from './DrawerItem';
import drawerItemsList from './misc/drawerItemsList';

export function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContainer}>
          <Drawer.Section>
            {drawerItemsList.map(data => {
              return <DrawerItem props={props} data={data} key={data.title} />;
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
