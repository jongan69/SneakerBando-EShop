import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper  from 'react-native-swiper/src'

var { width } = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/241850382_175340988006403_4532184724086610748_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=rf6sinc_XqEAX9BltLc&edm=AGenrX8BAAAA&ccb=7-4&oh=2f42dc94740ab2e78a2a642185c6a7ed&oe=6175A71B&_nc_sid=5eceaa",
            "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/225560302_868793527064602_6115519289794575994_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=LH4-ZpPH5QwAX9aPNOJ&edm=AGenrX8BAAAA&ccb=7-4&oh=30658653f8a3703e08d95ec567cef909&oe=61753EDB&_nc_sid=5eceaa",
            "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/241159704_1791871474331213_548991945110256786_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=M5tZ3je5NDIAX8zRymJ&tn=EGE_AeQzbo419qvZ&edm=AGenrX8BAAAA&ccb=7-4&oh=73a1d5dfe58d6d108b7a6cb688319219&oe=617428DD&_nc_sid=5eceaa"
    ])

        return () => {
            setBannerData([])
        }
    },[])

    return (
        <ScrollView
        bounces={false}
        >
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                style={{ height: width / 3 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                    {bannerData.map((item) => {
                        return (
                            <Image 
                                style={styles.imageBanner}
                                key={item}
                                resizeMode={'cover'}
                                source={{ uri: item}}
                            />
                        )
                    })}
                </Swiper>
                <View style={{ height: 15}}></View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginBottom: -30 ,
    }, 
    swiper: {
        alignSelf: 'center',
        width: width,
        alignItems: 'center',
        marginTop: 15,
    },
    imageBanner: {
        alignItems: 'center',
        height: width / 5,
        width: width - 35 ,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: -10,
    }
})

export default Banner;