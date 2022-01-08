import React, { useEffect } from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen Open</Text>
      <Button onPress={() => navigation.navigate('HomeD')} title="Go to Home" />
    </View>
  );
}

function HomeTab({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Tab!</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
    </View>
  );
}

function SettingsTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Tab!</Text>
    </View>
  );
}

function CustomTab({ navigation }) {
  return (
    <View>
      <Text>Nav</Text>
    </View>
  );
}

function TabSection({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false }}
      initialRouteName="HomeTab"
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="HomeTab1" component={HomeTab} />
      <Tab.Screen name="HomeTab2" component={HomeTab} />
      <Tab.Screen name="HomeTab3" component={HomeTab} />
      <Tab.Screen name="SettingsTab" component={SettingsTab} />
    </Tab.Navigator>
  );
}

function HomeScreenD() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen Open</Text>
    </View>
  );
}

function DrawSection() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeD" component={HomeScreenD} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent({progress, ...rest}) {
  const {navigation} = rest;
  return (
    <DrawerContentScrollView {...rest}>
      <DrawerItem label="Help" onPress={() => navigation.navigate('HomeTab')} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          // useLegacyImplementation
          initialRouteName="TabSection"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="HomeD" component={HomeScreenD} />
          <Drawer.Screen
            name="TabSection"
            component={TabSection}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
