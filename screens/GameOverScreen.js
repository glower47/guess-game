import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import Mainbutton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is OVER!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //   source={require("../assets/success.png")}
          source={{
            uri:
              "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/26/16/campaign_images/buzzfeed-prod-web-03/just-some-cheap-and-weird-things-youll-probably-b-2-15964-1553632047-0_dblbig.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>

      <Mainbutton onPress={props.onRestart}>NEW GAME</Mainbutton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 250,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: { width: "100%", height: "100%" },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 60,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
