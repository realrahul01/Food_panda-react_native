import {View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'

const FoodType=()=>{

    const types = [
        {
            id:"0",
            image:"https://th.bing.com/th/id/R.af34d374e57e595796172475f1804894?rik=CdKtsnc%2fdEKsrg&riu=http%3a%2f%2fbawarchi.com.au%2fwp-content%2fuploads%2f2020%2f07%2fChicken-Biryani-bawarchi-e1596115269459-1200x1200.jpg&ehk=0XH59HnYMdUiyoye92%2bjIp8C8gQtaImIx1onADamgrs%3d&risl=&pid=ImgRaw&r=0",
            name:"Biryani",
        },
        {
            id:"1",
            image:"https://simplehealthfacts.com/media/2021/07/44-healthy-foods-to-eat-that-you-should-include-in-your-diet.jpg",
            name:"Dessert"
        },
        {
            id:"2",
            image:"https://prettysweetblog.com/wp-content/uploads/2017/01/DSC_0103.jpg",
            name:"Ice Cream"
        },
        {
            id:"3",
            image:"https://i.redd.it/5keror5w0bz01.jpg",
            name:"Burger",

        },
        {
            id:"4",
            image:"https://i.pinimg.com/originals/a5/f2/10/a5f21054fcc0f406d154a1d151fa1f04.jpg",
            name:"Sandwiches"
        },
        {
            id:"5",
            image:"https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg",
            name:"Pizza"
        },
        {
            id:"6",
            image:"https://th.bing.com/th/id/OIP.8KCmGQF4i-EfYG7myNz9WQHaLH?rs=1&pid=ImgDetMain",
            name:"Mango Shake"
        },
    ]

    return (
        <View>
            <View style={styles.fav_rmd_sec}>
                <Text style={styles.horizontal_line}></Text>
                <Text style={styles.txt_val}>What's on your mind</Text>
                <Text style={styles.horizontal_line}></Text>
            </View>
            <ScrollView horizontal>
            {types.map((e,index)=>(
                <TouchableOpacity key={index} style={styles.food_list}>
                    <Image
                        source={{uri:e.image}}
                        style={styles.food_img}
                        />
                    <Text style={styles.food_name}> 
                        {e.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    foodType_nav:{
        color: 'black',
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize:18
    },
    food_img:{
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    food_list: {
        marginHorizontal: 8,
        marginVertical:8
    },
    food_name: {
        color: 'black',
        textAlign: 'center',
        marginTop:6
    },
    horizontal_line:{
        height:1,
        backgroundColor:'#D0D0D0',
        width:105,
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


export default FoodType



