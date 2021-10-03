import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import AppColors from '../../config/colors';
import {Card} from 'react-native-paper';

const OrderItemScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.orderCard}>
        <Card.Content>
          <View style={styles.cardOuterRow}>
            <View style={styles.cardRow}>
              <Text style={styles.itemTitle}>Order No</Text>
              <Text style={styles.itemTitle}>Order Date</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.itemContent}>{item._orderNumber}</Text>
              <Text style={styles.itemContent}>{item._orderDate}</Text>
            </View>
          </View>
          <View style={styles.cardOuterRow}>
            <View style={styles.cardRow}>
              <Text style={styles.itemTitle}>Recipient Name</Text>
              <Text style={styles.itemTitle}>Contact No</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.itemContent}>{item._recipientName}</Text>
              <Text style={styles.itemContent}>{item._contactNo}</Text>
            </View>
          </View>
          <View style={styles.cardOuterRow}>
            <View style={styles.cardRow}>
              <Text style={styles.itemTitle}>Delivery Address</Text>
              <Text style={styles.itemTitle}>Payment Status</Text>
            </View>
            <View style={styles.cardRow}>
              <View style={styles.address}>
                <Text style={[styles.itemContent, styles.address]}>
                  {item._houseNo},
                </Text>
                <Text style={[styles.itemContent, styles.address]}>
                  {item._streetName},
                </Text>
                <Text style={[styles.itemContent, styles.address]}>
                  {item._city}
                </Text>
              </View>
              <Text style={styles.uppercaseContent}>{item._paymentStatus}</Text>
            </View>
          </View>
          <View style={styles.cardOuterRow}>
            <View style={styles.cardRow}>
              <Text style={styles.itemTitle}>Order Type</Text>
              <Text style={styles.itemTitle}>Order Status</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.uppercaseContent}>{item._orderType}</Text>
              <Text style={styles.statusStyles}>{item._orderStatus}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default OrderItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  orderCard: {},
  cardOuterRow: {
    marginVertical: 6,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppColors.lightestGrey,
  },
  itemContent: {
    fontSize: 18,
    color: AppColors.black,
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 15,
  },
  uppercaseContent: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusStyles: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.statusBlue,
  },
});
