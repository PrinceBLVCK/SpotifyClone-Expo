import React from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";


export default SearchScreen = () => {
    return(
        <>
            <View style={{flex:1, height:"50%",}}>
                <ImageBackground
                source={require('../assets/bg.jpg')}
                style={styles.bg_img}
                resizeMode='cover'>
                    <Ionicons name="chevron-back-outline" size={32} color="#fff" style={[styles.backBtn, {margin:30}]} />
                    <Text style={styles.heading}>High Klassified</Text>
                </ImageBackground>
                
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    bg_img:{
        flex:.4, 
        width:"100%", 
        height:"100%", 
        overflow:"hidden",
    },
    heading:{
        fontSize:32, 
        color:'white', 
        top: "75%",
        position:'relative',
        paddingHorizontal:35,

    },
    backBtn:{
        width:40,
        position:'absolute',
        height:40,
        padding: 2,
        backgroundColor: "#00000080",
        opacity:1,
        borderRadius: 20
        

    }

})