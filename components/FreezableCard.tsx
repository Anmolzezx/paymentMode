import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import backgroundImage from "../assets/images/Design_Layer.png";

export default function FreezableCard() {
  const [isFrozen, setIsFrozen] = useState(true);

  return (
    <View className="flex-col bg-black">
      <Text className="text-white text-[12px] mb-4 tracking-wider font-poppingMedium">
        YOUR DIGITAL DEBIT CARD
      </Text>

      <ImageBackground
        source={backgroundImage}
        imageStyle={{ borderRadius: 24 }}
        className="w-[300px] h-[200px] overflow-hidden rounded-3xl relative justify-start"
        resizeMode="cover"
      >
        {/* Top right badge */}
        <View className="absolute top-3 right-3 bg-blue-500 w-6 h-6 rounded-full items-center justify-center">
          <Text className="text-white font-bold text-xs">Y</Text>
        </View>

        {/* Blur overlay */}
        {isFrozen && (
          <BlurView
            intensity={80}
            tint="dark"
            style={[
              StyleSheet.absoluteFillObject,
              {
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Ionicons name="snow" size={32} color="#fff" />
            <Text className="text-white mt-2 font-poppins">Card is frozen</Text>
          </BlurView>
        )}
      </ImageBackground>

      {/* Freeze/Unfreeze Button */}
      <Pressable
        onPress={() => setIsFrozen(!isFrozen)}
        className="mt-6 flex-row items-center space-x-2 border border-red-500 rounded-full px-6 py-2"
      >
        <Ionicons name="snow" size={18} color="red" />
        <Text className="text-red-500 font-poppins">
          {isFrozen ? "unfreeze" : "freeze"}
        </Text>
      </Pressable>
    </View>
  );
}
