import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import RenderItemView from './RenderItemView'

const RenderCategoryItemView = ({data,index}) => {
    return (
        // <View style={classes.container}>
        //     <Text style={classes.title}>{item._title}</Text>
           
        // </View>
        <FlatList 
        data={data._item}
        keyExtractor={(item, index) => index}
        renderItem={({item,index}) => <RenderItemView item={item} item_title={data._title} index={index} />}
    />
    )
}

const classes = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }    
})

export default RenderCategoryItemView