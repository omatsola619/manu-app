import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Home from '../screens/Home';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Music from '../screens/Music';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e03186',
        tabBarInactiveTintColor: 'black',
        // @ts-ignore
        tabBarItemStyle: {
          paddingBottom: Platform.OS === 'android' && 8,
        },
        tabBarStyle: {
          padding: 10,
          height: Platform.OS === 'android' ? 70 : 90,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto_500Medium',
        },
      }}
    >
      <Tab.Screen
        name="Event"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="event-note" size={size} color={focused ? '#e03186' : 'black'} />
          ),
          tabBarLabel: 'Events',
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="queue-music" size={size} color={focused ? '#e03186' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="user-circle-o" size={size} color={focused ? '#e03186' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
