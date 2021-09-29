import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Appbar} from 'react-native-paper';
import AppColors from '../../config/colors';

export default function OrderCard({
  orderNo,
  orderDate,
  totalPrice,
  ordertype,
  orderStatus,
}) {
  return (
    <Card style={styles.orderItem}>
      <Card.Content>
        <Title style={styles.orderNumber}>Order No. {orderNo}</Title>
        <View style={styles.orderItemContent}>
          <View style={styles.orderItemOuterRow}>
            <View style={styles.orderItemRow}>
              <Text style={styles.orderItemTitle}>Order Date</Text>
              <Text style={styles.orderItemTitle}>Total</Text>
            </View>
            <View style={styles.orderItemRow}>
              <Text style={styles.orderItemInfo}>{orderDate}</Text>
              <Text style={styles.orderItemInfo}>Rs. {totalPrice}</Text>
            </View>
          </View>
          <View style={styles.orderItemOuterRow}>
            <View style={styles.orderItemRow}>
              <Text style={styles.orderItemTitle}>Order Type</Text>
              <Text style={styles.orderItemTitle}>Status</Text>
            </View>
            <View style={styles.orderItemRow}>
              <Text style={styles.orderItemInfo}>{ordertype}</Text>
              <Text style={[styles.orderItemInfo, styles.orderItemStatus]}>
                {orderStatus}
              </Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  orderItem: {
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItemContent: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  orderItemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderItemOuterRow: {
    marginVertical: 2,
  },
  orderItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppColors.lightestGrey,
  },
  orderItemInfo: {
    fontSize: 16,
    color: AppColors.black,
  },
  orderItemStatus: {
    fontSize: 16,
    fontWeight: '900',
    color: AppColors.statusBlue,
    textTransform: 'uppercase',
  },
});
