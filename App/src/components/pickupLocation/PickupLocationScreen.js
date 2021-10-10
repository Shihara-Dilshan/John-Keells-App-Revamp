import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Animated, Image, ImageBackground, BackHandler, TextInput } from 'react-native'
import CommonBackBar from '../commonBackBarUtility/CommonBackBar'
import SlidingUpPanel from 'rn-sliding-up-panel'
import AppColors from '../../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native-elements'

const {height, width} = Dimensions.get('window')

const PickupLocationScreen = ({navigation}) => {

    var _panel;
    var _dragableValue = new Animated.Value(0)
    const [visiblePanel, setVisiblePanel] = useState(false)
    //const [locationHeight, setLocationHeight] = useState(0)
    const [selectedDiliverCity, setSelectedDiliverCity] = useState('#')
    const [selectedStoreCity, setSelectedStoreCity] = useState('#')
    const [selectedStore, setSelectedStore] = useState('#')


    const [isLocationActive, setIsLocationActive] = useState(false)
     const locationHeight = useRef(new Animated.Value(0)).current

    // useEffect(() => {
    //     Animated.timing(locationHeight, {
    //         toValue: height-400,
    //         useNativeDriver: true,
    //     }).start()
    // }, [])

    useEffect(() => {
        Animated.timing(locationHeight, {
            toValue: height-500,
            useNativeDriver: false
        }).start()
    }, [])


    return (
        <View>
            <CommonBackBar title="Pickup Location Details" navigation={navigation} />
            <View>
                <ImageBackground style={classes.mapContainer} source={require("../../assets/images/map.png")}>
                </ImageBackground>
                <Animated.View style={[classes.locationFormContainer, {top: locationHeight}]}>
                    <View style={classes.buttonContainer}>
                        <TouchableOpacity onPress={() => {

                            if(isLocationActive) {
                                setIsLocationActive(!isLocationActive)
                                Animated.timing(locationHeight, {
                                    toValue: height-500,
                                    useNativeDriver: false
                                }).start()
                            }else {
                                setIsLocationActive(isLocationActive)
                                
                            }

                        }} style={isLocationActive? classes.deactiveDelivery : classes.activeDelivery}>
                            <Text>Delivery Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {

                            if(isLocationActive) {
                                
                                setIsLocationActive(isLocationActive)
                            }else {
                                setIsLocationActive(!isLocationActive)
                                Animated.timing(locationHeight, {
                                    toValue: height-400,
                                    useNativeDriver: false
                                }).start()
                            }

                        }} style={isLocationActive? classes.activeLocation : classes.deactiveLocation}>
                            <Text>Store Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[classes.deliverFormContainer, isLocationActive ? classes.hide : classes.show]}>
                        <Text style={classes.titleStyle}>Let us know where to delivery</Text>
                        <View style={classes.inputContainer}>
                            <Picker 
                                selectedValue={selectedDiliverCity}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedDiliverCity(itemValue)
                                }}
                                style={classes.pickerStyle}
                                itemStyle={classes.pickerItemStyle}
                            >
                                <Picker.Item label="Select Your City" value="#" />
                                <Picker.Item label="Kandy" value="kandy" />
                                <Picker.Item label="Colombo" value="colombo" />
                                <Picker.Item label="Matale" value="matale" />
                            </Picker>
                        </View>
                        <View style={classes.inputContainer}>
                            <TextInput placeholder="House No"  />
                        </View>
                        <View style={classes.inputContainer}>
                            <TextInput placeholder="Streat Name"  />
                        </View>
                        <TouchableOpacity style={classes.buttonContainerStyle}>
                            <Text style={classes.btnStyle}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[classes.storeFormContainer, isLocationActive ? classes.show : classes.hide]}>
                        <Text style={classes.titleStyle}>Let us know where nearest store location</Text>
                        <View style={classes.inputContainer}>
                            <Picker 
                                selectedValue={selectedStoreCity}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedStoreCity(itemValue)
                                }}
                                style={classes.pickerStyle}
                                itemStyle={classes.pickerItemStyle}
                            >
                                <Picker.Item label="Select Store City" value="#" />
                                <Picker.Item label="Kandy" value="kandy" />
                                <Picker.Item label="Colombo" value="colombo" />
                                <Picker.Item label="Matale" value="matale" />
                            </Picker>
                        </View>
                        <View style={classes.inputContainer}>
                            <Picker 
                                selectedValue={selectedStore}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedStore(itemValue)
                                }}
                                style={classes.pickerStyle}
                                itemStyle={classes.pickerItemStyle}
                            >
                                <Picker.Item label="Select Store Location" value="#" />
                                <Picker.Item label="Kandy" value="kandy" />
                                <Picker.Item label="Colombo" value="colombo" />
                                <Picker.Item label="Matale" value="matale" />
                            </Picker>
                        </View>
                        <TouchableOpacity style={classes.buttonContainerStyle}>
                            <Text style={classes.btnStyle}>Submit</Text>
                        </TouchableOpacity>
                   
                    </View>
                </Animated.View>
            </View>
        </View>
    )
}

const classes = StyleSheet.create({
    locationFormContainer: {
        backgroundColor: AppColors.primaryGreen,
        position: 'absolute',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 30,
        height: 500,
        width: width,
        flexDirection: 'column',
        alignItems: 'center'
    },
    mapContainer: {
        backgroundColor: AppColors.white,
        position: 'absolute',
        height: height-400+20,
        width: width
    },
    buttonContainer: {
        flexDirection: 'row',
        borderColor: AppColors.white
    },
    activeDelivery: {
        backgroundColor: AppColors.white,
        padding: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    deactiveLocation: {
        padding: 19,
        borderColor: AppColors.white,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    activeLocation: {
        backgroundColor: AppColors.white,
        padding: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    deactiveDelivery: {
        padding: 19,
        borderColor: AppColors.white,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    hide: {
        display: 'none'
    },
    show: {
        display: 'flex'
    },
    deliverFormContainer: {
        marginTop: 15
    },
    storeFormContainer: {

    },
    inputContainer: {
        padding: 5,
        borderWidth: 1,
        marginTop: 5,
        borderColor: AppColors.white,
        borderRadius: 20
    },
    pickerStyle: {
        width: width - 60,
        color: AppColors.white
    },
    titleStyle: {
        textAlign: 'center',
        color: AppColors.white,
        margin: 5
    },
    inputStyle: {
        width: width - 60,
    },
    buttonContainerStyle: {
        backgroundColor: AppColors.white,
        padding: 20,
        borderRadius: 20,
        width: width - 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        fontWeight: 'bold'
    },
    pickerItemStyle: {
        color: AppColors.white
    }
})

export default PickupLocationScreen