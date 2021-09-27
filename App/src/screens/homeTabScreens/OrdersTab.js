import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {Card, Title, Paragraph, Appbar} from 'react-native-paper';
import OrderCard from '../../components/ordersTab/OrderCard';
import AppColors from '../../config/colors';
import {OrderContext} from '../../contexts/order/OrderContext';

export default function OrdersTab() {
  const [orderData, setOrderData] = useContext(OrderContext);
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
            <OrderCard
              orderNo={orderData.item._orderNumber}
              orderDate={orderData.item._orderDate}
              totalPrice={orderData.item._total}
              ordertype={orderData.item._oderType}
              orderStatus={orderData.item._orderStatus}
            />
          );
        }}
      />
    </View>
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
