import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

//imports of third party packages
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("home");
  };

  return (
    <SafeAreaView>
      <View style={styles.login}>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              marginBottom: 70,
              transform: [{ rotate: "45deg" }],
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1629109851484-f296db2c447f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 30, textAlign: "center" }}>Welcome to</Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Power Bike Shop
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            flex: 0.3,
          }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "#e7e7e7" },
            ]}
          >
            <Ionicons name="logo-google" color="#DB4437" size={20} />
            <Text>Login with Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.horizontalCenter,
              styles.buttons,
              { backgroundColor: "#161414" },
            ]}
          >
            <Ionicons name="logo-apple" color="#fff" size={20} />
            <Text style={{ color: "#fff" }}>Login with Apple</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalCenter}>
          <Text style={{ color: "#a1a1a1" }}>Not a member?</Text>
          <TouchableOpacity>
            <Text style={{ color: "orange", fontWeight: "bold" }}>
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  horizontalCenter: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: { paddingHorizontal: 40, paddingVertical: 15, borderRadius: 20 },
});

export default Login;
