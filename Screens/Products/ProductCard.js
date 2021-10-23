import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions'

var { width } = Dimensions.get('window');

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + '...' : name
                }
            </Text>
            <Text style={styles.price}>${price}</Text>

            {countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <Button
                        title={'Add to Cart'}
                        color={'green'}
                        onPress={() => {
                            props.addItemToCart(props)
                        }}
                    />
                </View>
            ) :
                <Text style={{ marginBottom: 20 }}> Currently Unavailible </Text>}

        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => {
            dispatch(actions.addToCart({ quantity: 1, product }))
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        marginTop: '25%',
        borderRadius: 5,
        width: width / 2 - 30,
        height: width / 2,
        backgroundColor: 'black',
        position: 'absolute',
        top: '-18%'
    },
    card: {
        marginBottom: 60,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        textShadowColor: 'black',
    },
    price: {
        fontSize: 20,
        color: '#fd151b',
        marginTop: 10,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textShadowColor: 'black',
    }
})

export default connect(null, mapDispatchToProps)(ProductCard);

