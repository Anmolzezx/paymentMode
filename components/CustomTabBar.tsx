import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import home from "../assets/icons/home.png";
import scan from "../assets/icons/scan.png";
import discount from "../assets/icons/discount.png";
import curvedLine from "../assets/icons/Rectangle 29.png";

const { width } = Dimensions.get("window");

export default function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View className="absolute bottom-0 w-full items-center bg-black">
      <Image source={curvedLine} className="absolute bottom-8 w-full h-16" />

      {/* Tab Buttons */}
      <View
        className={`flex-row justify-around items-end w-full px-6 pb-[${insets.bottom + 10}px] h-24`}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => navigation.navigate(route.name);
          const label = descriptors[route.key].options.title || route.name;

          const isCenter = route.name === "yoloPay";

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className={`items-center justify-center ${
                isCenter ? "-mt-8" : ""
              }`}
            >
              <View
                className={`${
                  isCenter
                    ? "w-16 h-16 rounded-full border border-white justify-center items-center"
                    : ""
                }`}
              ></View>
              <Text
                className={`mt-1 text-xs font-poppins ${
                  isFocused ? "text-white" : "text-neutral-500"
                }`}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
