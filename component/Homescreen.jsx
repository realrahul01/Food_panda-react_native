import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyCarousel from './MyCarousel';
import FoodType from './FoodType';
import QuickFood from './QuickFood';
import MenuItems from './MenuItems';



const Homescreen = () => {

 



  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <View style={styles.navSty}>
          <View style={styles.navLeft}>
              <Entypo name="location-pin" size={30} color="red" />
              <View>
                <Text style={{color: 'black', fontWeight:'bold', marginHorizontal:3, fontSize:18}}>Hello, Rahul Yadav</Text>
                <Text style={{color: 'black'}}> B-130, Rohini Sec-23, Delhi-110086 </Text>
              </View>
          </View>
              <Image  
                source= {require('../assets/Screenshot_2024_0523_163845.jpg')}
                style={styles.image} 
                />
      </View>


      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for Resturant items and more"
          placeholderTextColor="#888"
        />
        <Icon name="search1" size={24} color="black" />
      </View>


      {/* carosuel section */}
      <View style={styles.main}>
          <MyCarousel/>
      </View>


      {/* foodtype section whats in your mind */}
      <View>
        <FoodType/>
      </View>

      {/* quick food section */}
      <View>
        <QuickFood/>
      </View>


    {/* filter section */}
      <View style={styles.other_feature}>
        <TouchableOpacity style={styles.other_opt}>
          <Text style={styles.other_txt}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_opt}>
          <Text style={styles.other_txt}>Sort By Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.other_opt}>
          <Text style={styles.other_txt}>Sort By Price</Text>
        </TouchableOpacity>
      </View>



    {/* all hotels section */}
    <View>
      <MenuItems/>
    </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
    height: 200
  },  
  other_opt:{
    color: 'black',
    borderWidth: 1,
    borderColor:'#D0D0D0',
    padding: 10,
    borderRadius: 20,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:10,
    width:120
  },
  other_feature:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal:10
  },
  other_txt:{
    color: 'black',
    fontSize:15
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
  navSty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
    
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  navLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Homescreen
