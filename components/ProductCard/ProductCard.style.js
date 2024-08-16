import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        justifyContent: 'space-between'
    },

    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        backgroundColor: "white",
        borderRadius: 5,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    price: {
        fontSize: 16,
        color: 'gray'
    },

    inStock: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    }
})