import React from 'react'
import { View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'

function Home({route}) {
    const { user } = route.params

    return (
        <View style={styles.container}>
            <Header text={`Seja bem vindo ${user}`}/>
        </View>
    )
}

export default Home