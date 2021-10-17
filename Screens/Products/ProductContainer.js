import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, Row } from 'native-base'

import ProductList from './ProductList'

const data = require('../../assets/Test_Data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <Container>
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search"/>
                <Input
                    placeholder="Search The Bando"
                    //onFocus={}
                    //onChangeText={(text) => {}
                />
            </Item>
        </Header>

            <View>
                <View style={styles.container}>
                    <FlatList
                        numColumns={2}
                        Vertical
                        data={products}
                        renderItem={({item}) => <ProductList 
                        key={item.id} 
                        item={item}/>}
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'black'
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'black'
    }
})

export default ProductContainer;