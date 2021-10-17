import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const Header = () => {

    return (
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/TSB_Logo.png")}
                resizeMode="contain"
                style={{ height: 80,  marginBottom: 10 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fd151b',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    }
})

export default Header