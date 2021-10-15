import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { statusBarConfig } from "../../Variable";
import BottomNav from "../components/BottomNav";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexBasis: "90%" }}></View>
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
});

export default Cart;
