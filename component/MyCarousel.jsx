import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const MyCarousel = () => {
  return (
    <Swiper style={styles.wrapper}
     autoplay
     dotStyle={styles.paginationDot}
     paginationStyle={styles.pagination}
     activeDotStyle = {styles.activeDot}
     ImageComponentStyle={{borderRadius: 10}}
     >
        <View style={styles.slide}>
          <Image
            source={{
                uri: "https://happysale.in/hs/img/w/up/zomatocouponshappysalejpg1626767964284.jpg"
            }}
            style={styles.img1}
          />
        </View>
        <View style={styles.slide}>
        <Image
            source={{
              uri: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg"
            }}
            style={styles.img1}
          />
        </View>
        <View style={styles.slide}>
        <Image
            source={{
              uri: "https://pakkaoffer.com/blog/wp-content/uploads/2022/05/HEADER_FINAL-1568x953-1-1024x622.png"
            }}
            style={styles.img1}
          />
        </View>
      </Swiper>
  )
}

export default MyCarousel

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img1:{
    width:'100%',
    height: 200,
    borderRadius: 8
  },
  pagination: {
    bottom: '5%', // Adjust this value to position the dots vertically
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'grey'
    // backgroundColor: 'rgba(0,0,0,.2)',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
})