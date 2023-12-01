import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useWindowDimensions } from "react-native";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/background.jpg";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onPressSignOut = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={Logo}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {/* Your content here */}
        <Button text="Sign Out" type="TERTIARY" onPress={onPressSignOut} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
s