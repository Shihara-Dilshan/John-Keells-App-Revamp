import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppColors from '../../config/colors';

const images = {
  beet: require('../../assets/images/products/beetroot.jpg'),
  milk: require('../../assets/images/products/milk.png'),
  sausages: require('../../assets/images/products/sausages.png'),
};

const SingleProduct = ({products}) => {
  const product = products.item;
  const [prodImage, setprodImage] = useState('');

  useEffect(() => {
    if (product.productId == 1) {
      setprodImage(images.beet);
    } else if (product.productId == 2) {
      setprodImage(images.sausages);
    } else {
      setprodImage(images.milk);
    }
  }, []);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.prodImage} source={prodImage} />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.middleInner}>
          <View style={styles.prodNameView}>
            <Text style={styles.prodName}>{product.productName}</Text>
          </View>
          <View style={styles.pricePerUnit}>
            <Text style={styles.prodPricePerUnit}>
              Rs.{product.pricePerUnit}
            </Text>
            <Text style={styles.perUnit}> /{product.unit}</Text>
          </View>
          <View style={styles.purchasedQty}>
            <Text style={styles.purchasedQtyText}>{product.purchasedQty}</Text>
            <Text style={styles.purchasedQtyText}> {product.unit} (s)</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          Rs. {product.purchasedQty * product.pricePerUnit}
        </Text>
      </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    marginVertical: 3,
    marginHorizontal: 3,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  prodImage: {
    width: 70,
    height: 70,
  },
  middleContainer: {
    flex: 2,
    marginVertical: 3,
  },
  middleInner: {
    flexDirection: 'column',
    padding: 5,
  },
  priceContainer: {
    flex: 1,
  },
  prodNameView: {
    marginBottom: 8,
  },
  prodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pricePerUnit: {
    flexDirection: 'row',
  },
  prodPricePerUnit: {
    fontWeight: 'bold',
    color: AppColors.primaryGreen,
    fontSize: 15,
  },
  perUnit: {
    color: AppColors.lightestGrey,
  },
  purchasedQty: {
    flexDirection: 'row',
  },
  purchasedQtyText: {
    fontWeight: 'bold',
  },
  priceContainer: {
    paddingRight: 10,
    justifyContent: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
