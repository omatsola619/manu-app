import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import HomeViewStack from './HomeViewStack';
import AllEvents from '../screens/AllEvents';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeViewStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Choose a place',
        }}
      />
      <Stack.Screen
        name="AllEvents"
        component={AllEvents}
        options={{
          title: 'Your Events',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
