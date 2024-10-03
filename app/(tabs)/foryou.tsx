import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HeaderImage, Wallpapers } from "@/constants/images";
import ImageCard from "@/components/ImageCard";

const Foryou = () => {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={{ uri: HeaderImage }}
          style={{ flex: 1, resizeMode: "cover" }}
        />
      }
      headerBackgroundColor={{ dark: "black", light: "white" }}
    >
      <View style={styles.container}>
        <FlatList
          data={Wallpapers}
          renderItem={({ item }) => (
            <ImageCard name={item.name} image={item.image} />
          )}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </ParallaxScrollView>
  );
};

export default Foryou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    justifyContent: "space-between",
  },
});
