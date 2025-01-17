import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
