import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper  from 'react-native-swiper/src'

var { width } = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/169352156_288626302730473_8850155141563584764_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Zj6J96vxbF4AX8BUV8X&edm=AGenrX8BAAAA&ccb=7-4&oh=ba908a78adf65952371ad2302c5255cd&oe=61AB31F9&_nc_sid=5eceaa",
            "https://instagram.ftpa1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/241159704_1791871474331213_548991945110256786_n.jpg?_nc_ht=instagram.ftpa1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gHpYDodjdrAAX_ytVpu&tn=EGE_AeQzbo419qvZ&edm=AGenrX8BAAAA&ccb=7-4&oh=576027c76b481556d9f36ef7e388f4ad&oe=61A98D9D&_nc_sid=5eceaa",
            "https://instagram.ftpa1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/241546974_123859776654959_4192189819347242045_n.jpg?_nc_ht=instagram.ftpa1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=sDCYhvibFroAX9GgpYh&tn=EGE_AeQzbo419qvZ&edm=AGenrX8BAAAA&ccb=7-4&oh=9531cee2e9ecd6b1bcc0fc4aaa92cd50&oe=61AAF042&_nc_sid=5eceaa"
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