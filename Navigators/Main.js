import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

// Stacks
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import Cart from '../Screens/Cart/Cart';

import CartIcon from '../Shared/CartIcon';

const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                headerShown: false,
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#fd151b',
                backgroundColor: 'black'
            }}
        >

            <Tab.Screen
                name='Home'
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon
                                name="shopping-cart"
                                style={{ position: 'relative' }}
                                color={color}
                                size={30}
                            />
                            <CartIcon />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Admin"
                component={CartNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="cog"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="User"
                component={CartNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}


export default Main;