import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

//Imports of app components
import BottomNav from "../components/BottomNav";
import { statusBarConfig } from "../../Variable";

//Third party packages imports
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const handleSubmit = (place) => {
    // setActiveBtn(place);
    navigation.navigate("cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexBasis: "90%", paddingHorizontal: 15 }}>
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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="orange" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "#a1a1a1" }}>Pinarello Bike</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "orange" }}>$</Text>
                <Text style={{ fontWeight: "bold" }}>1,700.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "#a1a1a1" }}>Pinarello Bike</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "orange" }}>$</Text>
                <Text style={{ fontWeight: "bold" }}>1,700.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "#a1a1a1" }}>Pinarello Bike</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "orange" }}>$</Text>
                <Text style={{ fontWeight: "bold" }}>1,700.00</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={[styles.bgcontainer, styles.productItem]}
          >
            <View
              style={{
                backgroundColor: "#f8f8f8a7",
                width: 25,
                position: "absolute",
                top: "2%",
                right: "8%",
                zIndex: 1,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="grey" />
            </View>
            <View
              style={{
                flexBasis: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 100, height: 120 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ color: "#a1a1a1" }}>Pinarello Bike</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Text style={{ color: "orange" }}>$</Text>
                <Text style={{ fontWeight: "bold" }}>1,700.00</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNav
        // activeBtn={activeBtn}
        // setActiveBtn={setActiveBtn}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: statusBarConfig,
  bgcontainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  productItem: {
    width: "42%",
    height: 200,
    position: "relative",
    borderRadius: 10,
    display: "flex",
    marginVertical: 10,
  },
});

export default Home;
