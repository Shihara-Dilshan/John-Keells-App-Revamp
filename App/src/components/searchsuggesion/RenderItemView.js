import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AppColors from '../../config/colors'

const RenderItemView = ({item,index,item_title}) => {
    return (
        <TouchableOpacity style={classes.container}>
            <View style={classes.mainContainer}>
                <View>
                    <Image source={{uri: item._imageUrl}} style={classes.imageStyle} />
                </View>
                <Text>{item._title}</Text>
                <Text style={classes.price}>Rs.{item._unitPrice}/<Text style={classes.unit}>{item._smallestUnit}</Text></Text>
            </View>
            <Text>Category: {item_title}</Text>
        </TouchableOpacity>
    )
}

const classes = StyleSheet.create({
    container: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 10,
        height: 120,
        backgroundColor: AppColors.white,
        padding: 10,
        borderColor: AppColors.primaryGreen
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    price: {
        color: AppColors.primaryGreen
    },
    unit: {
        color: AppColors.black
    }
})

export default RenderItemView