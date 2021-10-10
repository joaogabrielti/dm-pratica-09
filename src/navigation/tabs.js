import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home'
import Book from '../screens/Book'
import User from '../screens/User'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        name: 'home',
    },
    Book:{
        name: 'book',
    },
    User:{
        name: 'account',
    },
}

function Tabs({route}) {
    const { name } = route.params
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                },
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#6E5494',
                tabBarActiveBackgroundColor: '#6E5494',
                tabBarStyle: [
                    {
                        display: 'flex',
                    },
                    null,
                ],
            })}
        >
            <Tab.Screen name="Home" component={Home} initialParams={{ user: name }} options={{ headerShown: false }} />
            <Tab.Screen name="Book" component={Book} options={{ headerShown: false }} />
            <Tab.Screen name="User" component={User} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default Tabs
