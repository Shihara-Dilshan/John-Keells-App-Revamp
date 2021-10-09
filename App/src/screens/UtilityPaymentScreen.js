import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../config/colors';
import MainHeaderLeft from '../components/layout/mainheaderLeft/MainHeaderLeft';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements'

const Stack = createStackNavigator();

export default function UtilityPaymentScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: AppColors.white,
        headerShown: true,
        headerTitleAlign: 'center',
        title: '',
        headerStyle: {
          backgroundColor: AppColors.primaryGreen,
          elevation: 0,
        },
        headerLeft: () => <MainHeaderLeft navigation={navigation} />,
        headerRight: () => (
          <View flexDirection="row" alignItems="center">
            <Icon.Button
              name="reader-sharp"
              size={25}
              backgroundColor={AppColors.primaryGreen}
              color={AppColors.white}
              onPress={() => {
                navigation.navigate('second')
              }}
            />
          </View>
        ),
      }}>
      <Stack.Screen name="First" component={UtilityScreenFirst} />
      <Stack.Screen name="second" component={UtilityScreenSecond} />
      <Stack.Screen name="telecom" component={TelecomBillPaymentSection} />
    </Stack.Navigator>
  );
}

const UtilityScreenFirst = ({navigation}) => {
  return (
    //TODO : do not use inline styles. use StyleSheet
    <View style={styles.container}>
        <CommonBackBar title="Utility Payments" />
        <CardSectionArea dataItems={utilityItems} navigation={navigation} path="second"  />
    </View>
  );
};

const UtilityScreenSecond = ({navigation}) => {
  return (
    //TODO : do not use inline styles. use StyleSheet
    <View style={styles.container}>
      <CommonBackBar title="Telecom" navigation={navigation} />
      <CardSectionArea dataItems={telecomItems} navigation={navigation} path="telecom"  />
    </View>
  );
};

const TelecomBillPaymentSection = ({navigation}) => {
  return (
    <View style={styles.container}>
       <CommonBackBar title="Airtel Bill Payment" navigation={navigation} />
       <TelecomBillPayment navigation={navigation} />
    </View>
  )
}

const TelecomBillPayment = ({navigation}) => {

  const [number, setNumber] = useState('')
  const [amount, setAmaount] = useState('')

  const onChangNumber = () => {
    console.warn("hell")
  }

  const onSubmitBill = () => {
    console.warn(number)
  }

  return(
    <View style={{flexDirection: 'column', backgroundColor: AppColors.white, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}>
      <Text style={{marginTop: 30, fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Telecom bill payment</Text>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image source={telecomItems[0].image} style={styles.cardImage} />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Input keyboardType={"number-pad"} label={<Text>Mobile Number</Text>} placeholder="+94767878768" onChange={onChangNumber}  />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Input keyboardType={"decimal-pad"} label={<Text>Amount</Text>} placeholder="Rs.100" />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20, alignItems: 'center'}}> 
        <Button title="Proceed to pay" buttonStyle={{backgroundColor: AppColors.primaryGreen, width: Dimensions.get('screen').width-30,borderRadius: 20}} />
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20, alignItems: 'center'}}> 
        <Button title="Clear All" type="outline" titleStyle={{color: AppColors.black}} buttonStyle={{width: Dimensions.get('screen').width-30,borderRadius: 20, borderWidth: 1, borderColor: AppColors.black}} />
      </View>
    </View>
  )
}

const utilityItems = [
  {
    title:"Telecom",
    image: require('../assets/images/signal_tower.png')
  },
  {
    title:"Insurance",
    image: require('../assets/images/insurance.png')
  },
  {
    title:"Water",
    image: require('../assets/images/water.png')
  }
]

const telecomItems = [
  {
    title:"Airtel",
    image: require('../assets/images/airtel.png')
  },
  {
    title:"Telecom",
    image: require('../assets/images/slt.png')
  },
  {
    title:"Dialog",
    image: require('../assets/images/dialog.png')
  }
]

const CardSectionArea = ({navigation, dataItems, path}) => {
  return (
    <View>
      <FlatList
        style={styles.cardSection} 
        data={dataItems}
        renderItem={({item}) => (
          <Card navigation={navigation} image={item.image} title={item.title} path={path} />
        )}
        numColumns={3}
      />
    </View>
  )
}

const Card = ({image,title,navigation,path}) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate(path, title={title})}}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={image} />
          <Text style={styles.cardText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const CommonBackBar = ({title,navigation}) => {
  return (
    <View style={styles.backBar}>
      <Icon.Button 
        name="chevron-back"
        size={25}
        backgroundColor={AppColors.white}
        color={AppColors.black}
        onPress={() => {navigation.goBack()}}
      />
      <View style={styles.backBarText}>
        <Text style={styles.backBarTextText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  backBar: {
    display: 'flex',
    backgroundColor: AppColors.white,
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backBarText: {
    flex: 1,
    marginLeft: 80
  },
  backBarTextText: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: 15
  },
  cardSection: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: AppColors.white,
    height: 100,
    width: 100,
    margin: 5,
    alignItems: 'center'
  },
  cardImage: {
    width: 60,
    height: 60
  },
  cardText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  }
})