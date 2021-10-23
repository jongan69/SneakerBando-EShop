import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

var { width } = Dimensions.get('window')

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return (
        <Content style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate('Product Detail', { item: item })
                        }}
                        key={item._id.$oid}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{
                                    uri: item.image ?
                                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                }}
                            />
                            <Body>
                                <Text>{item.name}</Text>
                                <Text note>{item.description}</Text>
                            </Body>
                        </Left>
                    </ListItem>
                ))
            ) : (
                <View>
                    <Left>
                        <Text style={styles.center}>
                            No products matched search!
                        </Text>
                    </Left>
                </View>
            )}
        </Content>
    )
}

const styles = StyleSheet.create({
    center: {
        alignSelf: 'center',
        alignItems: 'center',
    }
})

export default SearchedProduct;