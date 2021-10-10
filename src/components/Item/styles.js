import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingStart: 8,
        paddingEnd: 8,
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 8,
        marginBottom: 4,
    },
    title: {
        marginStart: 8,
        marginEnd: 'auto',
        justifyContent: 'space-evenly',
    },
    action: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default styles