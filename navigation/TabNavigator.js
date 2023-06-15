import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet } from 'react-native';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focoused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focoused ? 'book' : 'book-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focoused ? 'create' : 'create-outline';
          }

          return <Ionicons name={iconName}  color={color}  size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'yellow',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator 