import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import SearchScreen from './Screens/SearchScreen';
import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';

const Tab = createMaterialBottomTabNavigator()

 const App = () => {
  return (
    
      <NavigationContainer
      styles={{backgroundColor:'#343434'}}
      
        >
        <Tab.Navigator
          barStyle={{backgroundColor: '#343434', color:'white' }}
          initialRouteName='Home'
          screenOptions={({route}) =>({
            tabBarIcon: ({focus, color, size}) => {
            
            }
          })}>
        <Tab.Screen
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => (
              
              <MaterialCommunityIcons name="home" color={'white'} size={26} />
            ),
            tabBarColor:'green'
          }}
          />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => (
              <FontAwesome name="search" color={'white'} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Library" 
          component={LibraryScreen}
          options={{
            tabBarIcon: () => (
              <Ionicon name='ios-library' size={26} color={'white'} />
            )
          }} />
      </Tab.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App