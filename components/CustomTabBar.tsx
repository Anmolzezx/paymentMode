import React from "react";
import {
  View,
  Text,
  Pressable,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import home from "../assets/icons/home.png";
import scan from "../assets/icons/scan.png";
import discount from "../assets/icons/discount.png";
import curvedLine from "../assets/icons/Rectangle 29.png";

const getTabIcon = (name: string) => {
  switch (name) {
    case "home":
      return home;
    case "yoloPay":
      return scan;
    case "ginie":
      return discount;
  }
};

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="absolute bottom-0 w-full items-center bg-black"
    >
      <Image source={curvedLine} className="absolute bottom-20 w-full h-16" />

      {/* Tab Buttons */}
      <View
        style={{ paddingBottom: insets.bottom }}
        className={`flex-row justify-around items-end w-full px-6 h-24`}
      >
        {state.routes.map((route: any, index: number) => {
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
                  isFocused
                    ? "w-16 h-16 rounded-full border border-white justify-center items-center"
                    : "w-12 h-12 rounded-full border border-white justify-center items-center opacity-20"
                }`}
              >
                <Image
                  source={getTabIcon(route.name)}
                  className="w-6 h-6"
                  resizeMode="contain"
                  tintColor={isFocused ? "white" : "secondary-200"}
                />
              </View>
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
