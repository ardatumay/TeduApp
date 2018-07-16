/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomToolbarr from "./BottomToolbarr";

class Council extends Component {
    static navigationOptions = {
        title: "Council",
        headerStyle: { marginTop: 0, backgroundColor: "#fff" },
        headerLeft: null,
        gesturesEnabled: false,
        headerMode: "none",

      };
  
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text}>
                    This is Council.
                </Text>
            </View>
            <BottomToolbarr navigation={this.props.navigation} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
        fontWeight: "bold"
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center" 
    }
  });

  export default Council;
