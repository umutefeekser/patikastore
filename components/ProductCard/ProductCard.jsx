import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './ProductCard.style'
import { useRouter } from 'expo-router';

const ProductCard = ({item}) => {

    const router = useRouter()

    return (
        <TouchableOpacity onPress={() => router.replace(`/product/${item.id}`)} style={styles.container}>
            <Image style={styles.image} source={{uri: item.imgURL}} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.bottom}>
                <Text style={styles.price}>{item.price}</Text>
                {!item.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;