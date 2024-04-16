import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import AppStack from './AppStack';

const Stack = createStackNavigator();

const HomeViewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppStack}
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
  );
};

export default HomeViewStack;
