import React, { useContext, useEffect, useState } from "react"
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SearchBar } from "react-native-elements" 
import Icon from 'react-native-vector-icons/Ionicons';

import AppColors from "../../config/colors"
import { CategoryContext } from "../../contexts/homeTab/HomeTabContext"
import RenderCategoryItemView from "./RenderCategoryItemView";

const width = Dimensions.get('screen').width;

const SearchSuggesionContent = ({navigation}) => {

    const [searchText, setSearchText] = useState("");
    const [CategoryData, setCategoryData] = useContext(CategoryContext);
    const [filteredData, setFilteredData] = useState([]);

    const updateSearch = (text) => {
        console.log(text)
        setSearchText(text)
    }

    useEffect(() => {
        console.log(CategoryData[0]._item)
        setFilteredData(CategoryData)
    },[])

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <View>
            <View style={classes.topSearchBar}>
                <Icon onPress={onBack} name="chevron-back-outline" size={20} color={AppColors.white}></Icon>
                <SearchBar 
                placeholder="Search here..." 
                onChangeText={(text) => updateSearch(text) } 
                value={searchText}
                containerStyle={{backgroundColor: AppColors.primaryGreen, flex: 12, borderTopColor: AppColors.primaryGreen}}
                lightTheme={true}
                inputContainerStyle={{backgroundColor: AppColors.white}}
                />
                
            </View>
            <FlatList
                    data={filteredData}
                    keyExtractor={category => (category == null ? Math.random() : category._id)}
                    renderItem={({item, index}) => <RenderCategoryItemView data={item} index={index} />}
                    contentContainerStyle= {{backgroundColor: AppColors.white}}
                />
        </View>
    )
}


const classes = StyleSheet.create({
    topSearchBar : {
        flexDirection: 'row',
        backgroundColor: AppColors.primaryGreen,
        alignItems: 'center',
        paddingLeft: 10,
    }
})


export default SearchSuggesionContent