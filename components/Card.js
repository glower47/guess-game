import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    padding: 0,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Card;
