import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Create from './src/screens/Create'
import Login from './src/screens/Login'
import Tabs from './src/navigation/tabs'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App