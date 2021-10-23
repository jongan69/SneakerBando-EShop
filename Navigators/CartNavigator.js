import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Cart from '../Screens/Cart/Cart';
import CheckoutNavigator from './CheckoutNavigator';
import ProductContainer from '../Screens/Products/ProductContainer';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={ProductContainer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title: 'Checkout'
                }}
            />
        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <MyStack />
}