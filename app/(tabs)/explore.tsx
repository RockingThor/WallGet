import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DownloadPicture from "@/components/DownloadPicture";

const Explore = () => {
  const [showDownload, setShowDownload] = useState(false);
  return (
    <View>
      <Text>Explore</Text>
      <Button title="Open Download" onPress={() => setShowDownload(true)} />
      {showDownload && (
        <DownloadPicture onClose={() => setShowDownload(false)} />
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
