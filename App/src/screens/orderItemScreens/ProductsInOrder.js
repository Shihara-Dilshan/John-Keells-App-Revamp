import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TopTabNav from './TopTabNav';
import {OrderContext} from '../../contexts/order/OrderContext';
import AppColors from '../../config/colors';
// import orderProducts from '../../contexts/order/misc/orderProducts';
import SingleProduct from './SingleProduct';

const orderProducts = [
  {
    productId: 1,
    productName: 'Beetroot',
    pricePerUnit: 140,
    unit: 'kg',
    purchasedQty: 1.5,
    imageUrl: '../../assets/images/products/beetroot.jpg',
  },
  {
    productId: 2,
    productName: 'KREST Chicken Sausages',
    pricePerUnit: 335,
    unit: 'unit',
    purchasedQty: 1,
    imageUrl: '../../assets/images/products/sausages.png',
  },
  {
    productId: 3,
    productName: 'Ambewella Milk Chocolate 1L',
    pricePerUnit: 290,
    unit: 'unit',
    purchasedQty: 2,
    imageUrl: '../../assets/images/products/milk.png',
  },
];

const ProductsInOrder = ({navigation}) => {
  const {currentlySelected} = useContext(OrderContext);
  const [selectedOrder, setselectedOrder] = currentlySelected;
  const [products, setproducts] = useState(orderProducts);

  const calculateTotal = () => {
    let tempTotal = 0;
    products.forEach(product => {
      tempTotal += product.purchasedQty * product.pricePerUnit;
    });
    return tempTotal;
  };

  return (
    <View style={styles.outerContainer}>
      <TopTabNav
        currentOrder={selectedOrder._orderNumber}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={products}
            keyExtractor={item => item.productId}
            renderItem={item => {
              return <SingleProduct products={item} key={item.productId} />;
            }}
          />
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>Rs. {calculateTotal()}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Discounts</Text>
            <Text>Rs. 0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Total Charges</Text>
            <Text>Rs. 150</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.lastRow}>Total</Text>
            <Text style={styles.lastRow}>Rs. {calculateTotal() + 150}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductsInOrder;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 2,
    padding: 8,
  },
  summaryContainer: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderTopColor: AppColors.headerGrey,
    borderTopWidth: 2,
    justifyContent: 'center',
  },
  summaryRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    backgroundColor: AppColors.white,
  },
  lastRow: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
