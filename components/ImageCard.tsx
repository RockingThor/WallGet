import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ImageCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{
          flex: 1,
          width: 150,
          height: "90%",
          borderRadius: 10,
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Inter_600SemiBold",
          fontSize: 16,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {name}
      </Text>
      <View style={styles.iconContainer}>
        <FontAwesome
          name="heart"
          size={20}
          color="white"
          style={{ position: "relative", margin: "auto" }}
        />
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    width: 150,
    height: 300,
  },
  iconContainer: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "black",
    height: 35,
    width: 35,
    right: 10,
    top: 8,
  },
});
