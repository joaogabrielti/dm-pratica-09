import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default function Header(props) {
    const navigation = useNavigation()

    function navigate() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{props.text}</Text>
            <TouchableOpacity onPress={() => navigate()}>
                <Icon name="logout" color="#ffffff" size={24} />
            </TouchableOpacity>
        </View>
    )
}