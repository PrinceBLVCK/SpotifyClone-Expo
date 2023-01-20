import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicon
import SearchScreen from './Screens/SearchScreen';
import HomeScreen from './Screens/HomeScreen';
import LibraryScreen from './Screens/LibraryScreen';

const Tab = createMaterialBottomTabNavigator()

 const App = () => {
  return (
    
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({route}) =>({
            tabBarIcon: ({focus, color, size}) => {

            }
          })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
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