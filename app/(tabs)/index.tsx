import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Suggestion" component={Suggestion} />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Discover = () => {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
};

const Suggestion = () => {
  return (
    <View>
      <Text>Suggestion</Text>
    </View>
  );
};
