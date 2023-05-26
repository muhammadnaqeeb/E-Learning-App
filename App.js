import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title='Need an account? signup' onPress={
        () => navigation.navigate("Tab")
      }></Button>
    </View>
  );
}

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button title='Need to login' onPress={
        () => navigation.navigate("login")
      }></Button>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title='Logout' onPress={
        () => navigation.navigate("login")
      }></Button>
    </View>
  );
}
function Details() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Home' component={Drawer} />
      <BottomTab.Screen name='Details' component={Details} />
    </BottomTab.Navigator>
  );
}


function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name='Profile' component={Profile} />
      {/* can have more Drawer */}
    </DrawerNav.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tab' component={Tab} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={SignUp} />
      </Stack.Navigator>
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
