import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { decrementItem, incrementItem, removeItem } from '../features/CounterSlice';
import { useNavigation } from '@react-navigation/native';

const DeliveryPage = () => {
const resturantFood = useSelector((state)=>state.cart.cartData)
const [array, setArray] = useState(resturantFood)

const dispatch = useDispatch()
const navigation = useNavigation()

useEffect(() => {
  setArray(resturantFood);
}, [resturantFood]);

useEffect(()=>{
  if(array.length < 1){
    navigation.navigate('Home')
  }
})


const totalSum = array.reduce((acc,cv)=>{
  return acc + cv.price * cv.quantity
},0)

const orderPlace=()=>{
  Alert.alert('Your order is placed successfully')
}

const handleDecrement=(item,index)=>{
  if(item.quantity == 1){
    dispatch(removeItem(index))
  }else{
    const updateData = array.map((x)=>{
      if(x.id == item.id){
        return ({...x, quantity: x.quantity-1})
      }else{
        return x
      }
    })
    setArray(updateData)
    dispatch(decrementItem(index))
  }
  console.log('dec')
}

const handleIncrement=(item,index)=>{
  const updateData = array.map((x)=>{
    if(x.id == item.id){
      return ({...x, quantity: x.quantity+1})
    }else{
      return x
    }
  })
  setArray(updateData)
  dispatch(incrementItem(index))
}

const handleBack=()=>{
  navigation.navigate('Resturant')
}



  return (
    <SafeAreaView style={styles.main}>

    <View style={styles.delivery_nav}>
      <View style={styles.left_nav}>
        <AntDesign name="left" size={24} color="black" onPress={handleBack}/>
        <View style={{margin: 10}}>
          <Text style={{color: 'grey'}}>Punjabi Tawa Paratha</Text>
          <Text style={{color: 'grey'}}> <Text style={{color:'black', fontWeight:'bold'}}>Delivery at Home</Text> | B-130 Rohini, Sec-23</Text>
        </View>
      </View>
      <MaterialCommunityIcons name="share" color="black" size={26}/>
    </View>
    <View style={styles.nav_below}>
      <Text style={styles.offer}> <MaterialCommunityIcons name="party-popper" size={24} color="blue"/>  You saved ₹39 on this order</Text>
    </View>

    {/* delivery head end */}


    <ScrollView>
      <View style={styles.promo_container}>
          <Text style={styles.promo_name}>Promo</Text>
        <View style={{flexDirection:'row'}}>
              <View style={styles.promo1}>
                  <View style={{marginHorizontal:15}}>
                    <Text style={{color:'#fff', fontSize:15}}>Snacks time</Text>
                    <Text style={{color:'#fff', fontSize:15}}>Made Better</Text>
                    <Text style={{color:'gold', fontSize:16, fontWeight:'bold'}}>~20% OFF~</Text>
                  </View>
                  <Image
                    source={{
                      uri: 'https://th.bing.com/th/id/R.5447210f97c091cb9c25f8893ee28d1f?rik=YpBz5hrQnUxX%2bw&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fburger-vector-1.png&ehk=TTEwx%2fvNGphLI9YaNh%2bJoPZt2tjEFyVfgZGma7GYQZs%3d&risl=1&pid=ImgRaw&r=0'
                    }}
                    style={styles.promoImg}
                  />
              </View>
              <View style={[styles.promo1, styles.promo2]}>
                  <View style={{marginHorizontal:15}}>
                    <Text style={{color:'#fff', fontSize:16}}>Fruti &</Text>
                    <Text style={{color:'#fff', fontSize:16}}>Tasty dessert</Text>
                    <Text style={{color:'gold', fontSize:17, fontWeight:'bold'}}>~10% OFF~</Text>
                  </View>
                  <Image
                    source={{
                      uri: 'https://th.bing.com/th/id/R.458138fcbf8752ffa9ec8ca231f1966d?rik=qqGWgL9CjfNh5Q&riu=http%3a%2f%2fwww.misskatecuttables.com%2fuploads%2fshopping_cart%2f11595%2flarge_bowl-of-happy-ice-cream-0717.png&ehk=8icC%2bhJA2JPMzgpyVkbrIwnbLiNzX3934hgPpJXpnkw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
                    }}
                    style={styles.promoImg}
                  />
              </View>
        </View>
      </View>
        {/* promo section end */}

      <Text style={styles.items_add}>I T E M (S) A D D E D</Text>
        <View style={styles.itemsContainer}>
            
                {array.map((x,index)=>(
                  <View key={index} style={styles.Food_container}>
                      <View>
                        <Image
                          source={{
                            uri:x.image
                          }}
                          style={styles.delivery_foodItem}
                          />
                          <Text style={{color:'black', fontWeight:'bold', marginTop:5}}> {x.name} </Text>
                          <Text style={{color:'black', fontWeight:'bold', marginTop:5}}> ₹ {x.price} </Text>
                      </View>
  
  
                        {/* increment decrement section */}
                          <View>
                            <Pressable style={styles.adding_item}>
                                <Pressable onPress={()=>handleDecrement(x,index)}>
                                  <Text style={{color:'red', fontSize:30,}}> - </Text>
                                </Pressable>
                                <Pressable>
                                  <Text style={{color:'black', fontSize:18}}> {x.quantity} </Text>
                                </Pressable>
                                <Pressable onPress={()=>handleIncrement(x,index)}>
                                  <Text style={{color:'red', fontSize:25}}> + </Text>
                                </Pressable>
                            </Pressable>
                            <Text style={{color:'black', textAlign:'center', marginVertical:7}}>Quantity: {x.quantity} </Text>
                          </View>
  
                    </View>
                ))}
              
        </View>

      {/* delivery instruction */}
            <Text style={{color:'black', marginHorizontal:14, marginVertical:6, fontWeight: 'bold', fontSize:17}}>Delivery Instructions</Text>
      <ScrollView style={styles.del} horizontal>
            <View style={styles.allDel}>
                <Feather name="bell" size={30} color="grey"/>
                <Text style={{color:'grey'}}>Avoid Ringing</Text>
            </View>
            <View style={styles.allDel}>
                <FontAwesome5 name="door-open" size={30} color="grey"/>
                <Text style={{color:'grey'}}>Leave at the door</Text>
            </View>
            <View style={styles.allDel}>
                <FontAwesome5 name="directions" size={30} color="grey"/>
                <Text style={{color:'grey'}}>Directions to reach</Text>
            </View>
            <View style={styles.allDel}>
                <FontAwesome5 name="door-open" size={30} color="grey"/>
                <Text style={{color:'grey'}}>Leave at the door</Text>
            </View>
      </ScrollView>

      {/* directions section end */}

        {/* donation section */}

      <View style={styles.donation}>
          <View>
              <Text style={{color:'black', fontWeight:'bold'}}>Feeding India Donation</Text>
              <Text style={{color:'grey', marginTop:10}}>Working Toward a malnutrition- free india</Text>
          </View>
          <View>
              <Ionicons name="checkbox" size={30} color="red"/>
              <Text style={{color:'black'}}> Rs 3 </Text>
          </View>
      </View>

      {/* user details */}
      <View style={styles.user_container}>  
            <View style={styles.details}>
                <MaterialCommunityIcons name="timer" size={30} color="green"/>
                <Text style={{color:'black', marginHorizontal:8}}>Delivery in 33 mins</Text>
            </View>
            <View style={styles.details}>
                <MaterialCommunityIcons name="home-outline" size={30} color="black"/>
                <View>
                    <Text style={{color:'black', marginHorizontal:8}}>Delivery Home</Text>
                    <Text style={{color:'black', marginHorizontal:8}}> B-130, Rohini sec-23, Budh Vihar, Delhi-110086 </Text>
                </View>
            </View>
            <View style={styles.details}>
                <Feather name="phone-call" size={25} color="black"/>
                <Text style={{color:'black', marginHorizontal:8}}> Rahul Yadav, <Text style={{fontWeight:'bold'}}>+91-8447078928</Text> </Text>
            </View>
            <View style={styles.details}>
                <AntDesign name="filetext1" size={25} color="green"/>
                <Text style={{color:'black', marginHorizontal:8}}>Total Bill ₹{totalSum}.00</Text>
            </View>
      </View>

      {/* cancellation policy section */}
      <View style={styles.cancel}> 
            <Text style={{color:'grey'}}> C A N C E L L A T I O N   P O L I C Y </Text>
            <Text style={{color:'grey'}}>Help us reduce food waste by avoiding cancellations after placing your order. A 100% cancellation fee will be applied.</Text>
      </View>


    </ScrollView>

              {/* payment section */}
    <View style={styles.payment}>
        <View style={styles.leftPay}>
              <Text style={{color:'black'}}>Pay USING <AntDesign name="caretup" size={10} color="grey"/> </Text>
              <Text style={{color:'black'}}>8447078928@paytm</Text>
        </View>  
        <TouchableOpacity style={styles.rightPay} onPress={orderPlace}>
          <View>
              <Text style={{color:'#fff', fontWeight: '500', fontSize: 18}}> ₹{totalSum} </Text>
              <Text> Total </Text>
          </View>
              <Text style={{color:'#fff', fontWeight: '600', fontSize: 19}}>Place Order</Text>
        </TouchableOpacity>        
    </View>

    </SafeAreaView> 
  )
}

export default DeliveryPage


const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:'#f4f4f2'
    },
    left_nav:{
      flexDirection: 'row',
      alignItems:'center'
    },
    delivery_nav:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: '#fff',
      marginHorizontal:5,
    },
    nav_below:{
      backgroundColor:'#B1D4E5',
      padding: 15
    },
    offer:{
        color:'#185A7B',
        fontWeight: 'bold',
        fontSize: 16
    },
    promo_container:{
      backgroundColor:'#82E5DA',
      height: 150,
      marginTop: 10,
    },
    promo1:{
      backgroundColor:'black',
      width: 160,
      height:90,
      borderRadius: 13,
      justifyContent:'center',
      marginHorizontal:10,
    },
    promoImg:{
      width: 80,
      height: 80,
      position: 'absolute',
      right: '-20%',
    },
    promo_name:{
      color:'black', 
      fontWeight:'900',
      fontSize:20,
      marginHorizontal: 10,
      marginTop:7,
      marginBottom:6
    },
    promo2:{
      backgroundColor:'green',
      marginHorizontal:30
    },
    items_add:{
      color:'skyblue',
      fontSize: 17,
      textAlign:'center',
      marginVertical: 3
    },
    itemsContainer:{
      backgroundColor:'#fff',
      minHeight: 100,
      marginHorizontal: 13,
      borderRadius: 14,
      marginVertical:3
    },
    delivery_foodItem:{
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    adding_item:{
      borderWidth: 1,
      borderColor:'red',
      borderRadius: 5,
      width: 100,
      height: 40,
      flexDirection:'row',
      justifyContent:'space-around', 
      alignItems:'center',
      backgroundColor: '#ffe6e6',
    },
    Food_container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginHorizontal:10,
      marginVertical: 15
    },
    del:{
      minHeight: 100,
      paddingVertical: 5,
      marginHorizontal: 5
    },
    allDel:{
      backgroundColor:'#fff',
      width: 90,
      height:90,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 10,
      marginHorizontal: 10,
    },
    user_container:{
      backgroundColor: '#fff',
      height: 250,
      margin:10,
      borderRadius: 10
    },
    details:{
      flexDirection: 'row',
      alignItems:'center',
      height: 60,
      borderBottomWidth: 1,
      borderColor: '#D0D0D0',
      borderStyle: 'dashed'
    },
    rightPay:{
      backgroundColor:'#cb202d',
      flexDirection:'row',
      width: 200,
      margin: 10,
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:8,
      paddingHorizontal: 10
    },
    payment:{
      backgroundColor:'#fff',
      flexDirection:'row',
      height:80,
      justifyContent:'space-between',
      borderTopWidth:1,
      borderTopColor:'#D0D0D0'
    },
    leftPay:{
      justifyContent:'center',
      marginHorizontal:15,
    },
    donation:{
      height: 60,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginTop:8,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: 10
    },
    cancel:{
      margin: 10,
      height:270
    }
})