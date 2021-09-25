import React, {useRef, useContext} from 'react';
import {View, Button, Text, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {IconButton} from 'react-native-paper';
import {CartContext} from '../../contexts/cart/CartContext';
import CartItemModel from '../../contexts/cart/misc/CartItemModel';

export default function CartRemoveModel({id}) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const refRBSheet = useRef();
  return (
    <View>
      <IconButton
        icon="delete-forever"
        color={'red'}
        size={25}
        onPress={() => {
          //refRBSheet.current.open()
          setCartItems([...cartItems.filter(item => item._id != id)]);
        }}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <Text>tddddddddddddddrt</Text>
      </RBSheet>
    </View>
  );
}
