import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign';



const FavouriteList = () => {
const favouriteArr = useSelector((state)=>state.cart.favouriteData) 
const [text, setText] = useState('')

console.log(text)

  return (
    <ScrollView>
        <Text style={styles.listFav}> Favourite ({favouriteArr.length}) </Text>
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for Resturant items and more"
          placeholderTextColor="#888"
          value={text}
          onChangeText={setText}
        />
        <Icon name="search1" size={24} color="black" />
      </View>
        {favouriteArr.length !== 0 ? (
            favouriteArr.filter((item)=> item.name.includes(text))
            .map((x,index)=>(
                <View key={index} style={styles.fav_container}>
                    <Image
                        source={{uri:x.image}}
                        style={styles.fav_img}
                    />
                    <Text style={{color:'black', fontWeight:'bold', fontSize: 20}}> {x.name} </Text>
                    <Text style={{color:'black',fontWeight:'bold'}}> ₹{x.cost_for_two} </Text>
                </View>
            ))
        ) : (
            <View style={styles.noItemContainer}>
                <Text style={styles.noItemText}>No Item Found...</Text>
            </View>
        )}
    </ScrollView>
  )
}

export default FavouriteList

const styles = StyleSheet.create({
    fav_img:{
        aspectRatio: 5/6,
        height: 150,
        borderRadius: 10
    },
    fav_container:{
        margin: 10
    },
    listFav:{
        color:'black', 
        textAlign:'center',
        fontWeight:'bold', 
        fontSize: 20,
        marginTop:10,
        marginBottom:10,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed'
    },
    container: {
        borderWidth: 1,
        borderColor: '#888',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 8,
        marginTop: -1
      },
      input: {
        color: 'black',
        fontSize: 17,
      },
      noItemContainer: {
        alignItems: 'center',
        marginTop: 20
      },
      noItemText: {
        color: '#cb202d',
        fontSize: 18,
        fontWeight:'800',
      }
})