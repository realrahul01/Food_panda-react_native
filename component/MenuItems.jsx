import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { initialHotelsData } from '../ApiData/HotelsData';
import { useDispatch, useSelector } from 'react-redux';
import { allMenu, handleFavourite, removeHeart } from '../features/CounterSlice';

const MenuItems = () => {
const navigation = useNavigation()
const [isFav, setIsFav] = useState(false)
const [hotelsData, setHotelsData] = useState(initialHotelsData)
const val = useSelector((state)=>state.cart.favouriteData)
console.log(val)

const dispatch = useDispatch()


const handleFav=()=>{
    setIsFav(!isFav)
    navigation.navigate('favouritePage')
}


const handleResturant=(item)=>{
    dispatch(allMenu(item))
    navigation.navigate('Resturant')
}


const heartHandler=(item,index)=>{
    const updateHotelData = hotelsData.map((x,index)=>{
        if(x.id == item.id){
            return ({...x, isFavourite: !x.isFavourite})
        }
        else{
            return x
        }
    }) 
    setHotelsData(updateHotelData)
    dispatch(removeHeart(index))
}

const heartHandler1=(item)=>{
    const updateHotelData = hotelsData.map((x,index)=>{
        if(x.id == item.id){
            return ({...x, isFavourite: !x.isFavourite})
        }
        else{
            return x
        }
    }) 
    setHotelsData(updateHotelData)
    dispatch(handleFavourite(item))
}

  return (
    <SafeAreaView>
        <View style={styles.fav_rmd_sec}>
            <Text style={styles.horizontal_line}></Text>
            <Text style={styles.txt_val}>For You</Text>
            <Text style={styles.horizontal_line}></Text>
        </View>

        <View style={styles.align}>
            <View style={styles.rmd_Fav}>
                <TouchableOpacity>
                    <Text style={styles.recmd}>Recommended</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favouing} onPress={handleFav} >
                {isFav && (
                        <FontAwesome name="heart" color="red" size={20} 
                        
                    />
                )}
                {!isFav && (
                    <FontAwesome name="heart-o" color="red" size={20}
                    />
                )}
                    <Text style={styles.fav}>Favourities</Text>
                </TouchableOpacity>
            </View>
        </View>
    {hotelsData.map((item,index)=>(
        <TouchableOpacity style={styles.hotel_container} key={index} onPress={()=>handleResturant(item)}>
        <View>
            <ImageBackground 
                source={{uri:item.image}}
                style={styles.hotel_img}
                imageStyle={{borderRadius: 10}}
            >
                {item.isFavourite && (
                        <FontAwesome name="heart" color="red" size={24} style={styles.favourite_section}
                        onPress={()=>heartHandler(item,index)}
                    />
                )}
                {!item.isFavourite && (
                    <FontAwesome name="heart-o" color="white" size={24} style={styles.favourite_section}
                    onPress={()=>heartHandler1(item)}
                    />
                )}
                
            </ImageBackground>
        </View>
        <View style={styles.resturant_description}>
            <Text style={{color:'black', fontSize: 18, fontWeight: 'bold', marginBottom:3}}> {item.name} </Text>
            <View style={{flexDirection: 'row', alignItems:'center',marginTop:4, marginBottom:3}}>
                        <MaterialIcons name="stars" color="green" size={24}/>
                        <Text style={{color:'black',marginLeft:3}}>{item.rating}</Text>
                        <Text style={{color:'black',marginLeft:3}}>.</Text>
                        <Text style={{color:'black',marginLeft:3}}>{item.time}mins</Text>
            </View>
            <Text style={{color:'grey',marginBottom:3}}> {item.adress} </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'black'}}> ₹ </Text>
                <Text style={{color:'black',marginBottom:7, fontWeight:'bold',fontSize:16}}> {item.cost_for_two} for two </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="bike-fast" color="green" size={24}/>
                <Text style={{color:'black'}}> FREE DELEVERY </Text>
            </View>
        </View>
    </TouchableOpacity>
      ))}
    </SafeAreaView>
    
  )
}

export default MenuItems

const styles = StyleSheet.create({
    hotel_img:{
        height: 180,
        aspectRatio: 4/5
    },
    hotel_container:{
        flexDirection: 'row',
        margin: 10,
    },
    resturant_description: {
        marginHorizontal: 10,
    },
    favourite_section:{
        position: 'absolute',
        right:10,
        top:10
    },
    horizontal_line:{
        height:1,
        backgroundColor:'#D0D0D0',
        width:150,
        marginHorizontal:10
    },
    fav_rmd_sec:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    txt_val:{
        color:'black',
    },
    rmd_Fav:{
        flexDirection:'row',
        alignItems:'center',
    },
    recmd:{
        color:'grey',
        borderWidth:1,
        borderColor:'#D0D0D0',
        width:120,
        padding:6,
        },
    fav:{
        color:'grey',
        marginHorizontal:2,
        padding:6
    },
    favouing:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#D0D0D0',
        width:120
    },
    align:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:5
    }
})