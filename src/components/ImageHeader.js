import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Header = () => (
    <View style={{ justifyContent: "flex-end" }}>
      <Text style={{ fontFamily: "dosis-bold", color: "white", fontSize: 25 }}>COMPANY LOGO</Text>
    </View>
  );

const ImageHeader = props => (
    <View style={{ backgroundColor: "#eee" }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg" }}
      />
      <Header {...props} style={{ backgroundColor: "transparent" }} />
    </View>
  );

  export default ImageHeader;
