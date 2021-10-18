import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, Row } from 'native-base'

import ProductList from './ProductList'
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';

const data = require('../../assets/Test_Data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        
        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
        }
    }, [])


    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }


    return (
        <Container>
        <Header searchBar rounded>
            <Item>
                <Icon name="ios-search"/>
                <Input
                    placeholder="Search The Bando"
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                />
                {focus == true ? <Icon onPress={onBlur} name='ios-close' /> : null }
            </Item>
        </Header>

        {focus == true ? <SearchedProduct
                productsFiltered={productsFiltered}
        />
            : 
            <View>
                <View style={styles.container}>
                    <View>
                        <Banner/>
                    </View>
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
        }

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