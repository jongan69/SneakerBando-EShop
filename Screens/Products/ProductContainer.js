import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, Row } from 'native-base'

import ProductList from './ProductList'
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

//Import Test Data for 
const data = require('../../assets/Test_Data/products.json');
const productCategories = require('../../assets/Test_Data/categories.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(productCategories);
        setActive(-1);
        setInitialState(data)
        setProductsCtg(data)
        
        return () => {
            setProducts([])
            setProductsFiltered([])
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
            <ScrollView>
                <View>
                    <View >
                        <View>
                            <Banner/>
                        </View>
                        <View>
                            <CategoryFilter
                                categories={categories}
                                CategoryFilter={changeCtg}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View>
                        {productsCtg.length > 0 ? (
                            <View style={styles.listContainer}>
                                {productsCtg.map((item) => {
                                    return(
                                        <ProductList
                                            key={item.name}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                            ) : 
                            <View style={[styles.center, { height: '40%'}]}>
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
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'black'
    }
})

export default ProductContainer;