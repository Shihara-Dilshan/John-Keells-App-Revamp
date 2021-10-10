import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card, Title, Paragraph, Appbar} from 'react-native-paper';
import OrderCard from '../../components/ordersTab/OrderCard';
import AppColors from '../../config/colors';
import {OrderContext} from '../../contexts/order/OrderContext';
import OrderItemScreen from '../orderItemScreens/OrderItemScreen';
import ProductsInOrder from '../orderItemScreens/ProductsInOrder';

const OrderList = ({navigation}) => {
  const {orders, currentlySelected} = useContext(OrderContext);
  const [orderData, setOrderData] = orders;
  const [selectedOrder, setselectedOrder] = currentlySelected;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <Text style={styles.headerPara}>
        Click on the order numbers below to view details or re-order
      </Text>
      <FlatList
        style={styles.flatListCard}
        data={orderData}
        keyExtractor={orderData => orderData._id}
        renderItem={orderData => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setselectedOrder(orderData.item);
                navigation.navigate('Order', {id: orderData.item._orderNumber});
              }}>
              <OrderCard
                orderNo={orderData.item._orderNumber}
                orderDate={orderData.item._orderDate}
                totalPrice={orderData.item._total}
                ordertype={orderData.item._oderType}
                orderStatus={orderData.item._orderStatus}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default function OrdersTab() {
  const OrderStack = createStackNavigator();
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerShown: false,
        }}
      />
      <OrderStack.Screen
        name="Order"
        component={OrderItemScreen}
        options={({route}) => ({
          title: 'Order No. ' + route.params.id,
        })}
      />
      <OrderStack.Screen
        name="ProductsInOrder"
        component={ProductsInOrder}
        options={({route}) => ({
          title: 'Order No. ' + route.params.id,
        })}
      />
    </OrderStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: AppColors.white90,
  },
  header: {
    fontSize: 28,
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  headerPara: {
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 10,
  },
  flatListCard: {
    width: Dimensions.get('screen').width - 20,
    padding: 10,
    marginBottom: 50,
  },
});
