import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native'
import { Container, Header, Icon, Item, Input, Text, Row } from 'native-base'

import baseUrl from '../../assets/common/baseUrl';


import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';
import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';

var { height } = Dimensions.get('window');

// Original Imported Test Data for Testing
// const data = require('../../assets/Test_Data/products.json');
// const productCategories = require('../../assets/Test_Data/categories.json');

const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setFocus(false);
        setActive(-1);

        // Products initial API call
        axios
            .get(`${baseURL}products`)
            .then((res) => {
                setProducts(res.data);
                setProductsFiltered(res.data);
                setInitialState(res.data)
                setProductsCtg(res.data)
            }).catch((error) => {
                console.log('API Call Error')
            })

        // Categories
        axios
        .get(`${baseURL}categories`)
        .then((res) => {
            setCategories(res.data);
        }).catch((error) => {
            console.log('API Call Error')
        })



        return () => {
            setProducts([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
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

    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ]
        }
    }


    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search The Bando"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                    {focus == true ? <Icon onPress={onBlur} name='ios-close' /> : null}
                </Item>
            </Header>

            {focus == true ?
                <SearchedProduct
                    navigation={props.navigation}
                    productsFiltered={productsFiltered}
                />
                :
                <ScrollView>
                    <View>
                        <View >
                            <View>
                                <Banner />
                            </View>
                            <View>
                                <CategoryFilter
                                    categories={categories}
                                    categoryFilter={changeCtg}
                                    productsCtg={productsCtg}
                                    active={active}
                                    setActive={setActive}
                                />
                            </View>
                            {productsCtg.length > 0 ? (
                                <View style={styles.listContainer}>
                                    {productsCtg.map((item) => {
                                        return (
                                            <ProductList
                                                navigation={props.navigation}
                                                key={item._id}
                                                item={item}
                                            />
                                        )
                                    })}
                                </View>
                            ) :
                                <View style={[styles.center, { height: height / 2 }]}>
                                    <Text>No Products Found</Text>
                                </View>
                            }
                            {/* <FlatList
                        numColumns={2}
                        Vertical
                        data={products}
                        renderItem={({item}) => <ProductList 
                        key={item.id} 
                        item={item}/>}
                        keyExtractor={item => item.name}
                    /> */}
                        </View>
                    </View>
                </ScrollView>
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
        height: height,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'black'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ProductContainer;