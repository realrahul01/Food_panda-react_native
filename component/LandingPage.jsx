import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const LandingPage = () => {

const navigation = useNavigation()

useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Home')
    },1500)
})

  return (
    <View style={styles.landing_container}>
        <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <Image
            source={require('../assets/Order_food_rafiki.png')}
            style={styles.landing_img}
        />
        <Text style={styles.landing_name}>Zomato</Text>
        <Text>We help you to find best and delicious food</Text>
        <Text style={{textAlign:'center'}}>Delicious food is waitind for You...</Text>
      </View>

            <View style={styles.landing_btn}>
                <Text style={{fontWeight:'bold', fontSize:17}}>Let's get Started</Text>
            </View>

    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    landing_container:{
        flex:1,
        backgroundColor:'#cb202d',
        justifyContent:'space-around',
        alignItems:'center'
    },
    landing_name:{
        fontSize:60,
        fontWeight:'bold'
    },
    landing_img:{
        width: 300,
        height:300,
        color:'black'
    },
    landing_btn:{
        paddingHorizontal:100,
        paddingVertical:17,
        borderRadius:30,
        backgroundColor:'#DAAC0C',
    }
})