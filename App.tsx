import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, TitanOne_400Regular } from '@expo-google-fonts/titan-one';
import {
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Music from './screens/Music';
import Profile from './screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/Search';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    TitanOne_400Regular,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) <AppLoading />;

  const TabNavigator = () => {
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

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                title: 'Choose a place',
                animationEnabled: false,
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
