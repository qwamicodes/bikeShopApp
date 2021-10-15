import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 30,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <View>
          <Ionicons name="menu-outline" size={24} color="black" />
        </View>
        <View>
          <MaterialCommunityIcons name="motorbike" size={24} color="black" />
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            width: "20%",
          }}
        >
          <Feather name="search" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 40,
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "45%",
        }}
      >
        <Text style={{ color: "grey" }}>The World's</Text>
        <Text style={{ color: "orange", fontWeight: "bold", fontSize: 20 }}>
          {" "}
          Best Bike
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
            color: "#585858",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Categories
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 15,
          }}
        >
          <View
            style={[
              styles.bgcontainer,
              { paddingHorizontal: 20, paddingVertical: 8 },
            ]}
          >
            <Text style={{ color: "orange" }}>All</Text>
          </View>
          <View
            style={[
              styles.bgcontainer,
              { paddingHorizontal: 20, paddingVertical: 8 },
            ]}
          >
            <Text style={{ color: "grey" }}>Roadbike</Text>
          </View>
          <View
            style={[
              styles.bgcontainer,
              { paddingHorizontal: 20, paddingVertical: 8 },
            ]}
          >
            <Text style={{ color: "grey" }}>Urban</Text>
          </View>
          <View
            style={[
              styles.bgcontainer,
              { paddingHorizontal: 20, paddingVertical: 8 },
            ]}
          >
            <Text style={{ color: "grey" }}>Moutains</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  bgcontainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});

export default Home;
