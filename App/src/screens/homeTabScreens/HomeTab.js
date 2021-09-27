import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, FlatList, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppColors from '../../config/colors'

export default function HomeTab() {

  const [searchText, onChangeSearchText] = React.useState("");

  const backgroundImage = {src: require('../../assets/images/keels_banner.jpg')}

  const bannerCards = [
    {
      id:1,
      image: require('../../assets/images/water.png'),
      name: "Water Bill",
      description: "Make Your WaterBill Faster"
    },
    {
      id:2,
      image: require('../../assets/images/water.png'),
      name: "Water Bill",
      description: "Make Your WaterBill Faster"
    }
  ]

  const bannerImages =  [1,2,3,4,5,6]

  const utilityItems = [
    {
      title: 'Telecom',
      img: require("../../assets/images/signal_tower.png")
    },
    {
      title: 'Water',
      img: require("../../assets/images/water.png")
    },
    {
      title: 'Insuarance',
      img: require("../../assets/images/insurance.png")
    }
  ]

  return (
    //TODO : do not use inline styles. use StyleSheet
    <ScrollView style={classes.container}>
      <View style={classes.searchInputContainer}>
        <TextInput style={classes.searchInput} placeholder="What are you looking for ?" />
      </View>
      <View style={classes.bannerContainer}>
        {/* <ImageBackground source={require("../../assets/images/keels_banner.jpg")} resizeMode="cover" style={classes.bannerImage} >
        </ImageBackground> */}

        <FlatList 
          data={bannerImages}
          renderItem={({item}) => (
            <View style={classes.banner}>
              <Image style={classes.bannerImage} source={require('../../assets/images/banner1.png')} />
            </View>
          )}
          horizontal
          style={{
            width: 380,
            borderRadius: 20
          }}
        />

      </View>
      <View style={{paddingHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
          <View style={classes.recommendedItem}>
            <View style={classes.subHeaderContainer}>
              <Text style={classes.subHeader}>Recommended</Text>
              <Icon style={classes.subHeaderIcon} name="right" width={20} />
            </View>
            <View style={classes.itemContainer}>
              <FlatList
               data={bannerImages}
               renderItem={({item}) => (
                 <TouchableOpacity style={classes.recItem}>
                   <View style={{alignItems: 'flex-end',margin: 10}}>
                     <Icon name="staro" size={18} />
                   </View>
                   <View style={{height: 100, alignItems: 'center'}}>
                    <Image source={require("../../assets/images/avacado.jpg")} style={[classes.recItemImg]}  />
                   </View>
                    <Text style={{marginTop: 15, fontWeight: '600'}}>Avacado</Text>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rs.100 / 1kg</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', bottom: 1, margin: 10,width: '100%'}}>
                      <Text style={{fontSize: 12}}>Add to Cart</Text>
                      <Icon name="shoppingcart" size={18} />
                    </View>
                 </TouchableOpacity>
               )}
               horizontal
               showsHorizontalScrollIndicator={false}
               />
            </View>
          </View>
      </View>
      
      <View style={{paddingHorizontal: 20}}>
        <View style={{backgroundColor: AppColors.primaryGreen, borderTopLeftRadius: 20, justifyContent: 'center', borderBottomRightRadius: 20, height: 40, marginTop: 10, flexDirection: 'column',alignItems: 'center'}}>
          <Text style={{color: AppColors.white}}>Set pickup location</Text>
        </View>
      </View>

      <View style={{zIndex: 0,alignItems: 'center', backgroundColor: AppColors.secondaryGreen, borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 180, width: '100%', marginTop: 30}}>
       <Text style={{fontSize: 18, color: AppColors.white, marginTop: 10}}>Utility Payments</Text>
       <FlatList
        data={utilityItems}
        style={{marginTop: 10, marginBottom: 10}}
        renderItem={({item}) => (
          <View style={{alignItems: 'center',borderRadius: 20, height: 100, width: 100,  backgroundColor: AppColors.white, margin: 10}}>
            <Image source={item.img} style={{width: 60, height: 60, marginTop: 10}} />
            <Text style={{marginTop: 5, fontSize: 12, fontWeight: '600'}}>{item.title}</Text>
          </View>
        )}
        horizontal
        />
      </View>

      <View style={{paddingHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
          <View style={classes.recommendedItem}>
            <View style={classes.subHeaderContainer}>
              <Text style={classes.subHeader}>Featured Items</Text>
              <Icon style={classes.subHeaderIcon} name="right" width={20} />
            </View>
            <View style={classes.itemContainer}>
              <FlatList
               data={bannerImages}
               renderItem={({item}) => (
                 <TouchableOpacity style={classes.recItem}>
                   <View style={{alignItems: 'flex-end',margin: 10}}>
                     <Icon name="staro" size={18} />
                   </View>
                   <View style={{height: 100, alignItems: 'center'}}>
                    <Image source={require("../../assets/images/avacado.jpg")} style={[classes.recItemImg]}  />
                   </View>
                    <Text style={{marginTop: 15, fontWeight: '600'}}>Avacado</Text>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rs.100 / 1kg</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', bottom: 1, margin: 10,width: '100%'}}>
                      <Text style={{fontSize: 12}}>Add to Cart</Text>
                      <Icon name="shoppingcart" size={18} />
                    </View>
                 </TouchableOpacity>
               )}
               horizontal
               showsHorizontalScrollIndicator={false}
               />
            </View>
          </View>
      </View>


    </ScrollView>
  );
}

const classes = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1
  },
  searchInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 80,
    backgroundColor: AppColors.primaryGreen
  },
  searchInput: {
    height: 40,
    backgroundColor: AppColors.white,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  banner: {
    borderRadius: 20
  },
  bannerImage: {
    width: Dimensions.get('screen').width -20,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5
  },
  recommendedItem: {
    flex: 1,
    paddingHorizontal: 10
  },
  subHeaderContainer: {
    flexDirection: 'row',
  },
  subHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    margin: 5
  },
  subHeaderIcon: {
    margin: 5,
    color: AppColors.black
  },
  itemContainer: {
    flexDirection: 'column',
  },
  recItemImg: {
    width: 100,
    height: 100,
    margin: 10,
  }, 
  recItem: {
    padding: 0,
    width: 150,
    height: 230,
    margin: 10,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: AppColors.white,
    borderWidth: 0.5,
    paddingHorizontal: 10
  },
})