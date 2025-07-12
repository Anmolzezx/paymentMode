import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import backgroundImage from "../assets/images/Design_Layer.png";
import yolo from "../assets/images/_105553332372640.png";
import copy from "../assets/images/u_copy.png";
import hide from "../assets/images/____.png";
import yesbank from "../assets/images/_105553332380480.png";
import unhide from "../assets/images/Frame 119.png";

export default function FreezableCard() {
  const [isFrozen, setIsFrozen] = useState(true);

  return (
    <View className="flex-col bg-black">
      {/*<ImageBackground*/}
      {/*  source={backgroundImage}*/}
      {/*  imageStyle={{ borderRadius: 24 }}*/}
      {/*  className="w-[300px] h-[200px] overflow-hidden rounded-3xl relative justify-start"*/}
      {/*  resizeMode="cover"*/}
      {/*>*/}
      {/* Top right badge */}

      {/* Blur overlay */}
      {/*{isFrozen && (*/}
      {/*  <BlurView*/}
      {/*    intensity={80}*/}
      {/*    tint="dark"*/}
      {/*    style={[*/}
      {/*      StyleSheet.absoluteFillObject,*/}
      {/*      {*/}
      {/*        borderRadius: 24,*/}
      {/*        justifyContent: "center",*/}
      {/*        alignItems: "center",*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  >*/}
      {/*    <Ionicons name="snow" size={32} color="#fff" />*/}
      {/*    <Text className="text-white mt-2 font-poppins">Card is frozen</Text>*/}
      {/*  </BlurView>*/}
      {/*)}*/}
      {/*</ImageBackground>*/}

      {/* Freeze/Unfreeze Button */}
    {/*  <View>*/}
    {/*    <View>*/}
    {/*      <Image source={yolo} />*/}
    {/*    </View>*/}
    {/*  </View>*/}
    {/*  <Pressable*/}
    {/*    onPress={() => setIsFrozen(!isFrozen)}*/}
    {/*    className="mt-6 flex-row items-center space-x-2 border border-red-500 rounded-full px-6 py-2"*/}
    {/*  >*/}
    {/*    <Ionicons name="snow" size={18} color="red" />*/}
    {/*    <Text className="text-red-500 font-poppins">*/}
    {/*      {isFrozen ? "unfreeze" : "freeze"}*/}
    {/*    </Text>*/}
    {/*  </Pressable>*/}
    {/*</View>*/}
  );
}
