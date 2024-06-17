import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const QuickFood = () => {

const data = [
    {
        id:"0",
        image:"https://media.marketrealist.com/brand-img/DJRFLbMHq/0x0/uploads/2019/11/McDonalds-overview.jpeg",
        name:"McDonald's",
        rating:4.3,
        time:"30-40",
        offer:"50%"
    },
    {
        id:"1",
        image:"https://th.bing.com/th/id/OIP.Db_Tb2HHRMChf0qMt56dUwHaHa?rs=1&pid=ImgDetMain",
        name:"KFC",
        rating:3.8,
        time:"30-40",
        offer:"60%"

    },
    {
        id:"2",
        image:"https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9526.jpg",
        name:"Hyderabadi Biryani",
        rating:4.1,
        time:"25-35",
        offer:"55%",
    },
    {
        id:"3",
        image:"https://th.bing.com/th/id/R.494a89643d2525e9073791c23b0e269b?rik=5j8MtVEoCSAwoQ&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fbhuna-chicken-roll-end.jpg&ehk=8SpRBhqGT%2bw8CaHzzaYo%2fAsjTx5vh%2bboRUSYOJJGf2Y%3d&risl=&pid=ImgRaw&r=0",
        name:"Calofornia Burrito",
        rating:4.5,
        time:"20-30",
        offer:"30%"
    },
    {
        id:"4",
        image:"https://th.bing.com/th/id/OIP.IWm9rTKEUQsVoE2tpORnDwHaKA?rs=1&pid=ImgDetMain",
        name:"udupi Utsav",
        rating:4.3,
        time:"30-40",
        offer:"60%"
    }
]


  return (
    <View>
        <View style={styles.fav_rmd_sec}>
                <Text style={styles.horizontal_line}></Text>
                <Text style={styles.txt_val}>Get it Quickly</Text>
                <Text style={styles.horizontal_line}></Text>
            </View>
       <ScrollView horizontal>
            {data.map((e,index)=>(
                <TouchableOpacity key={index} style={styles.quickItems}>
                    <ImageBackground 
                        source={{uri: e.image}}
                        style={styles.QuickFood_img}
                        imageStyle={{borderRadius:10}}
                        >
                        <Text style={styles.offers}> {e.offer} OFF</Text>
                    </ImageBackground>
                    <Text style={styles.foodTitle}> {e.name} </Text>
                    <View style={{flexDirection: 'row', alignItems:'center',marginTop:4 }}>
                        <MaterialIcons name="stars" color="green" size={24}/>
                        <Text style={{color:'black',marginLeft:3}}>{e.rating}</Text>
                        <Text style={{color:'black',marginLeft:3}}>.</Text>
                        <Text style={{color:'black',marginLeft:3}}>{e.time}mins</Text>
                    </View>
                </TouchableOpacity>
            ))}


       </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({

    QuickFood_img:{
        aspectRatio: 5/6,
        height: 170,
    },
    foodType_nav:{
        color: 'black',
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize:18
    },
    quickItems: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation:2,

    },
    offers: {
        position: 'absolute',
        fontSize: 30,
        bottom: 8,
        color: '#fff',
        fontWeight: '900'
    },
    foodTitle:{
        color: 'black',
        fontWeight:'bold',
        fontSize: 16,
        marginTop: 10
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
        marginVertical:10
    },
    txt_val:{
        color:'black',
        fontWeight:'bold'
    },
})