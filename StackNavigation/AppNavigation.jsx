import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from '../component/Homescreen'
import ResturantPage from '../component/ResturantPage'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DeliveryPage from '../component/DeliveryPage'
import FavouriteList from '../component/FavouriteList'
import LandingPage from '../component/LandingPage'

const AppNavigation = () => {


    const Stack = createNativeStackNavigator()     

  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="landingPage">
                <Stack.Screen name="landingPage" options={{headerShown: false}} component={LandingPage}/>
                <Stack.Screen name="Home" options={{headerShown: false}} component={Homescreen}/>
                <Stack.Screen name="Resturant" options={{headerShown: false}} component={ResturantPage}/>
                <Stack.Screen name="deliveryPage" options={{headerShown:false}} component={DeliveryPage}/>
                <Stack.Screen name="favouritePage"  component={FavouriteList}/>
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})