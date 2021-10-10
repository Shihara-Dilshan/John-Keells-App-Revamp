import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import AppColors from '../../config/colors'
import MainHeaderLeft from '../layout/mainheaderLeft/MainHeaderLeft'
import SearchSuggesionContent from '../searchsuggesion/SearchSuggesionContent'


const Stack = createStackNavigator()

const SearchSuggesion = ({navigation}) => {
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
            headerLeft: () => <MainHeaderLeft navigation={navigation} />
        }}
        >
            <Stack.Screen name="suggesion" component={SearchSuggesionContent} />
        </Stack.Navigator>
    )
}




export default SearchSuggesion