import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Appbar} from 'react-native-paper';
import AppColors from '../../config/colors';

export default function OrdersTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <Text style={styles.headerPara}>
        Click on the order numbers below to view details or re-order
      </Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.orderList}>
          <Card style={styles.orderItem}>
            <Card.Content>
              <Title>Order No. 6966942</Title>
              <View style={styles.orderItemContent}>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Date</Text>
                    <Text style={styles.orderItemTitle}>Total</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>09-11-2021</Text>
                    <Text style={styles.orderItemInfo}>Rs. 3350</Text>
                  </View>
                </View>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Type</Text>
                    <Text style={styles.orderItemTitle}>Status</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>Delivery</Text>
                    <Text
                      style={[styles.orderItemInfo, styles.orderItemStatus]}>
                      Order Accepted
                    </Text>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.orderItem}>
            <Card.Content>
              <Title>Order No. 696000</Title>
              <View style={styles.orderItemContent}>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Date</Text>
                    <Text style={styles.orderItemTitle}>Total</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>16-10-2021</Text>
                    <Text style={styles.orderItemInfo}>Rs. 2500</Text>
                  </View>
                </View>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Type</Text>
                    <Text style={styles.orderItemTitle}>Status</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>Delivery</Text>
                    <Text
                      style={[styles.orderItemInfo, styles.orderItemStatus]}>
                      Order Delivered
                    </Text>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.orderItem}>
            <Card.Content>
              <Title>Order No. 780250</Title>
              <View style={styles.orderItemContent}>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Date</Text>
                    <Text style={styles.orderItemTitle}>Total</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>06-10-2021</Text>
                    <Text style={styles.orderItemInfo}>Rs. 1590</Text>
                  </View>
                </View>
                <View style={styles.orderItemOuterRow}>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemTitle}>Order Type</Text>
                    <Text style={styles.orderItemTitle}>Status</Text>
                  </View>
                  <View style={styles.orderItemRow}>
                    <Text style={styles.orderItemInfo}>Delivery</Text>
                    <Text
                      style={[styles.orderItemInfo, styles.orderItemStatus]}>
                      Order Delivered
                    </Text>
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: AppColors.white,
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
  scrollView: {
    width: '100%',
    padding: 10,
    marginBottom: 50,
  },
  orderList: {
    padding: 5,
  },
  orderItem: {
    marginVertical: 5,
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
    marginVertical: 5,
  },
  orderItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppColors.lightestGrey,
  },
  orderItemInfo: {
    fontSize: 18,
    color: AppColors.black,
  },
  orderItemStatus: {
    fontSize: 16,
    fontWeight: '900',
    color: AppColors.statusBlue,
    textTransform: 'uppercase',
  },
});
