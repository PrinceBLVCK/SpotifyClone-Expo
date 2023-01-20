import React from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native'


export default SearchScreen = () => {
    return(
        <>
            <View style={{flex:1, height:"50%",}}>
                <ImageBackground
                source={require('../assets/bg.jpg')}
                style={styles.bg_img}
                resizeMode='cover'>

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
        paddingHorizontal:20

    }

})