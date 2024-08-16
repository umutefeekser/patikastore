import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Alert, BackHandler, Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Product = () => {

    const {id} = useLocalSearchParams();
    const router = useRouter();
    const product = require("../../assets/db.json").find(i => i.id == id);

    React.useEffect(()=>{
        const backHandler = BackHandler.addEventListener('hardwareBackPress', ()=>{
            router.replace("/")
            return true;
        })

        return () => backHandler.remove();
    },[])

  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
            <Link style={styles.href_text} href={"/"}>
            <FontAwesome6 name="arrow-left" size={24} color="black" />
            </Link>
            <Text style={styles.navbar_text}>PATIKASTORE</Text>
        </View>

        <View style={styles.inner_container}>
            <Image style={styles.image} source={{uri: product.imgURL}}/>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Button
                disabled={!product.inStock}
                title={product.inStock ? "Satın Al" : "Stokta Yok"}
                style={styles.price}
                onPress={()=>Alert.alert("Ürünü sepete eklediğini düşün.")}
            />
        </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    navbar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#e0e0e0",
      padding: 10
    },
  
    navbar_text: {
      color: 'purple',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 5
    },

    inner_container: {
        padding: 10,
        flex: 1
    },

    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 5
    },

    price: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
  })