import { BackHandler, Button, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { addItemHandler, decrementItem, incrementItem, removeItem } from '../features/CounterSlice';
import { useNavigation } from '@react-navigation/native';

const ResturantPage = () => {
const menuList = useSelector((state)=>state.cart.menuData)
const foodItems = useSelector((state)=>state.cart.cartData)

console.log(foodItems)


const [array, setArray] = useState(menuList.menu)

const dispatch = useDispatch()
const navigation = useNavigation()


const BackHandler=()=>{
  navigation.navigate('Home')
}


const addFoodHandler=(item)=>{
  const updatedData = array.map((x,index)=>{
    if(item.id == x.id){
      return ({...x, selected:true})
    }else{
      return x
    }
  })
  setArray(updatedData)
  dispatch(addItemHandler(item))
  
}


const decrementHandler = (item, index)=>{
    const updatedData = array.map((x)=>{
      if(item.id == x.id){
        if(x.quantity == 1){
          return {...x, selected: false}
        }else{
          return {...x, quantity: x.quantity-1 }
        }
      }else{
        return x
      }
    })
    setArray(updatedData)
    if(item.quantity == 1){
      dispatch(removeItem(index))
    }else{
      dispatch(decrementItem(index))  
    }
}

const incrementHandler=(item,index)=>{
  const updateData = array.map((x)=>{
    if(item.id == x.id){
      return ({...x, quantity: x.quantity+1})
    }else{
      return x
    }
  })
  setArray(updateData)
  dispatch(incrementItem(index))
}



  return (

    <SafeAreaView>
      
    <ScrollView>
      {/* menu head section */}
      <View style={styles.resturant_nav}>
        <AntDesign name="left" size={24} color="black" onPress={BackHandler} />
        <View style={styles.right_nav}>
          <Icon name="search1" size={24} color="black" />
          <FontAwesome name="heart-o" color="black" size={20}/>
          <MaterialCommunityIcons name="share" color="black" size={26}/>
        </View>
      </View>


      {/* resturant heading section */}
      <View style={styles.main_rest}>
        <Text style={styles.resturant_name}> {menuList.name} </Text>
        <Text style={{color:'grey'}}> {menuList.cuisines} </Text>

        <View style={styles.rating_section}>
                        <Text style={{color:'black',marginLeft:3, fontWeight:'bold'}}>{menuList.rating}</Text>
                        <MaterialIcons name="stars" color="green" size={24}/>
                        <Text style={styles.resturant_rating}>{menuList.ratings} Ratings</Text>
            </View>


            <View style={styles.resturant_adress}>
                        <Text style={{color:'black',marginLeft:4}}>{menuList.time} mins.</Text>
                        <Text style={{color:'black',marginLeft:3}}>{menuList.adress}</Text>
            </View>

            
        
      </View>

      {/* menu */}

    <Text style={styles.menu_title}> Menu </Text>
      <View style={styles.allMenuList}>
        {array.map((x,index)=>(
          <SafeAreaView  key={x.id}>
                <View style={styles.foody_main}> 
                <View style={styles.left_main}>
                  <Text style={styles.foodName}>{x.name}</Text>
                  <View style={styles.rating_sec}>
                    <Entypo name="star" color="gold" size={17} />
                    <Entypo name="star" color="gold" size={17} />
                    <Entypo name="star" color="gold" size={17} />
                    <Entypo name="star" color="gold" size={17} />
                    <EvilIcons name="star" color="gold" size={17} />
                    <Text style={{color:'black'}}> {x.rating} Ratings</Text>
                  </View>
                  <Text style={styles.foodPrice}> ₹ {x.price}</Text>
                  <Text style={{color:'black'}}>{x.description.slice(0,100)}...</Text>
                
                </View>
                <View style={styles.goody}>
                    <Image
                      source={{uri: x.image}}
                      style={styles.food_img}
                    />
                    <Pressable>
                      {x.selected ? (
                        <Pressable style={[styles.btn, styles.btn1]}>
                          <Pressable onPress={()=>decrementHandler(x,index)}>
                            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>-</Text>
                          </Pressable>
                          <Pressable>
                            <Text style={{color:'#fff',fontSize:15, fontWeight:'bold'}}> {x.quantity} </Text>
                          </Pressable>
                          <Pressable onPress={()=>incrementHandler(x,index)}>
                            <Text style={{color:'#fff',fontSize:20, fontWeight:'bold'}}>+</Text>
                          </Pressable>
                        </Pressable>
                      ) : (
                        <Pressable style={styles.btn} onPress={()=>addFoodHandler(x)}>
                        <Text style={styles.add_item}>Add</Text>
                      </Pressable>
                      )}
                      
                    </Pressable>
                </View>
          </View>
                <Text style={styles.underline}></Text>
          </SafeAreaView>
        ))}
      </View>

    </ScrollView>
          <Pressable onPress={()=>navigation.navigate('deliveryPage')}>
          {foodItems.length >= 1 ? (
              <View style={styles.countData}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}> 
                  <Text style={styles.ad}> {foodItems.length} item added</Text>
                  <Ionicons name="arrow-forward-circle" size={18} color="#fff" />
              </View>
               <Text style={{color:'#fff'}}> Congratulations! Your delivery is free.</Text>
            </View>
          ): ''}
          </Pressable>
  </SafeAreaView>
  )
}

export default ResturantPage

const styles = StyleSheet.create({

  goody:{
    position: 'relative'
  },
  btn:{
    position: 'absolute',
    bottom: 0,
    top: 50,
    left: 40,
    width: 100
  },
  
  foodName:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  
  foodPrice:{
    color:'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4
  },

  resturant_nav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:7,
    marginTop:10
  },
  right_nav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    marginHorizontal:10
  },

  main_rest:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },

  resturant_name:{
    color:'black',
    fontSize: 30,
    fontWeight:'bold'
  }, 

  resturant_rating:{
    color: 'black',
    marginHorizontal: 3,
    fontWeight: 'bold'
  }, 
  resturant_adress:{
    flexDirection: 'row',
    backgroundColor: '#D8EFD3',
    borderRadius: 20,
    padding: 2,
    marginTop:3
  },
  rating_section: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop:4, 
    marginBottom:3
  },
  menu_title:{
    color: 'black',
    fontSize:25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 3
  },
  allMenuList:{
    marginHorizontal: 10,
  },
  food_img:{
    aspectRatio: 4.5/5,
    height: 150,
    borderRadius: 10
  },
  foody_main:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 30,
  },
  left_main:{
    width: '63%'
  },

  btn:{
    position: 'absolute',
    bottom: -13,
    left:'10%',
    backgroundColor: '#ffe6e6',
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    width: 110,
    height: 40,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },

  btn1:{
    backgroundColor: '#cb202d',
  },

  add_item:{
    color: 'red',
    fontWeight: 'bold',
    fontSize:18,
  },

  underline:{
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#D0D0D0',
    marginTop: 5,
    marginBottom: 20,
    borderStyle: 'dashed'
  },
  rating_sec:{
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4
  },
 countData:{
  height: 80,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor:'#F25D5D',
  justifyContent: 'center',
  alignItems:'center'
 },
 ad:{
  color: '#fff',
  marginHorizontal:5,
  fontWeight: 'bold',
  fontSize: 18
 }




})


