import React from "react";
import {View, Text, StyleSheet, ImageBackground, Button, Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { HermesBadge } from "react-native/Libraries/NewAppScreen";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



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
                <LinearGradient
                    style={{flex:.6}}
                    start={{x:0,y:0}}
                    end={{x:0,y:.4}}
                    colors={[ '#343434', '#000000']}>

                    <View style={{
                        flex:.2,  
                        paddingHorizontal:30, 
                        paddingVertical:0, 
                        flexDirection:'row', 
                        justifyContent:'space-between',
                        alignItems:'center',
                        position:'relative',
                        top:0,
                    
                        }}>
                        <View style={{flex:.8,}}>
                            <Text style={{flex:.2, position:'relative', color:'#fff6',marginBottom:10, fontSize:"14em"}}>Abalaleli benyanga anbangu-166,307</Text>
                            <View style={{flex:.5, position:'relative', width:'100%',margin:0, flexDirection:'row'}}>
                                <Text style={[styles.follow]}>OBALANDELAYO</Text>
                                <Ionicons style={{marginLeft:20, padding:10, alignContent:'center', justifyContent:'center'}} name='md-ellipsis-horizontal-sharp' size={30} color={'#fffa'}/>
                            </View>
                        </View>
                        <View style={[styles.play]}>
                            <Ionicons style={{flex:.9, alignContent:'center', justifyContent:'center', }} name="play" size={30} color={'white'} />
                            <View style={[styles.shuffle, ]}>
                                <MaterialCommunityIcons style={{}} name="shuffle-variant" color={'#393'} size={20}/>
                            </View>
                        </View>
                    </View>
                    <View style={[{flex:.2, flexDirection:"row", padding:20, paddingHorizontal:30}]}>
                        <View>
                            <Image 
                                source={require('../assets/bg.jpg')}
                                resizeMode="cover"
                                style={{width:55, height:55, borderRadius:40, overflow:"hidden"}} />
                            <View style={[styles.favorite]}>
                                <MaterialIcons name="favorite" size={30} color="white" />
                            </View>
                        </View>
                        <View style={{marginHorizontal:10 , flex:.8, flexDirection:"column", padding:10}}>
                            <Text style={{color:"white", fontWeight:"bold", fontSize:"16em"}}>Izingoma Ezithandiwe</Text>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center", }}>
                                <Text style={{color:'#fff6', fontSize:'14em'}}>5 izingoma </Text>
                                <View style={[styles.dot, {width:5, height:5, marginHorizontal:2}]}/>
                                <Text style={{color:'#fff6', fontSize:'14em'}}>High Klassified</Text>
                            </View>
                        </View>
                        <View style={{flex:.2,flexDirection:'row',alignItems:'center', justifyContent:'flex-end'}}>
                            <Entypo name="chevron-thin-right" size={30} color="#fff5"/>
                        </View>
                    </View>
                    <View style={{flex:.4}}>
                        
                    </View>
                    
                </LinearGradient>
                

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
    },
    follow:{
        color:'white', 
        borderColor:'white', 
        borderWidth:1,
        padding: 10,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        fontSize: "16em",
        width:'auto',
        fontWeight:'bold'

    },
    play:{
        
        width:55,
        height:55,
        padding:12,
        backgroundColor:'#393',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:70,
        flex:.1,
    },
    shuffle:{
        position:'absolute',
        top: '130%',
        left: '110%',
        padding:3,
        flex:.3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:20
    },
    favorite:{
        width:35,
        height: 35,
        borderRadius: 50,
        backgroundColor:"#393",
        alignItems:"center",
        justifyContent:"center",
        padding:3,
        bottom:25,
        left: 30

    },
    dot:{
        borderRadius:100,
        width: 50,
        height:50,
        backgroundColor: "#fff6"
    }

})