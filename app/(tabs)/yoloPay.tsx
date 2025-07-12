import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { faker } from "@faker-js/faker";
import { LinearGradient } from "expo-linear-gradient";
import FreezableCard from "@/components/FreezableCard";
import backgroundImage from "@/assets/images/Design_Layer.png";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import snow from "../../assets/icons/snowflake.png";

const YoloPay = () => {
  const [isFrozen, setIsFrozen] = useState(true);

  const user = {
    name: faker.person,
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
  };

  return (
    <SafeAreaView className=" bg-black">
      <View className="flex flex-col">
        <View className="flex flex-1  absolute top-[64px] left-[16px]">
          <Text className="text-white font-poppingExtraBold text-[24px] ">
            select payment mode
          </Text>
        </View>
        <View className="flex flex-row w-[328px] h-[42px] absolute top-[116px] left-[16px]">
          <Text className="text-white font-poppins text-[16px] opacity-50">
            choose your preferred payment method to make payment
          </Text>
        </View>
        <View className="flex flex-row w-[328px] h-[40px] absolute top-[182px] left-[16px] gap-[8px] ">
          <Pressable
            onPress={() => console.log("yolo pay")}
            className="px-8 py-1 rounded-full  bg-black border border-white"
          >
            <Text className="text-white font-poppins text-[24px]">pay</Text>
          </Pressable>

          <Pressable
            onPress={() => console.log("card")}
            className="px-8 py-1 rounded-full border border-danger-900"
          >
            <Text className="text-danger-900 font-poppins text-[24px]">
              card
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-row w-[249px] h-[18px] absolute top-[270px] left-[16px]">
          <Text className="text-white font-poppingMedium text-[16px] opacity-30 ">
            YOUR DIGITAL DEBIT CARD
          </Text>
        </View>
        {/*<View className="flex flex-col absolute top-[304px] left-[16px] w-[186px] h-[296px]">*/}
        {/*  <ImageBackground*/}
        {/*    source={backgroundImage}*/}
        {/*    imageStyle={{ borderRadius: 16 }}*/}
        {/*    className="w-[300px] h-[200px] overflow-hidden rounded-3xl relative justify-start"*/}
        {/*    resizeMode="cover"*/}
        {/*  >*/}
        {/*    /!* Blur overlay *!/*/}
        {/*    {isFrozen && (*/}
        {/*      <BlurView*/}
        {/*        intensity={80}*/}
        {/*        tint="dark"*/}
        {/*        style={[*/}
        {/*          StyleSheet.absoluteFillObject,*/}
        {/*          {*/}
        {/*            borderRadius: 24,*/}
        {/*            justifyContent: "center",*/}
        {/*            alignItems: "center",*/}
        {/*          },*/}
        {/*        ]}*/}
        {/*      ></BlurView>*/}
        {/*    )}*/}
        {/*  </ImageBackground>*/}
        {/*</View>*/}

        {/*<View className=" absolute top-[304px] left-[214px] w-[130px] h-[296px] items-center">*/}
        {/*  <Pressable*/}
        {/*    onPress={() => setIsFrozen(!isFrozen)}*/}
        {/*    className={`${isFrozen ? "border-red-500" : "border-white"} w-[58px] h-[58px] top-[79px] border border-red-500 rounded-full items-center justify-center bg-transparent `}*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      source={snow}*/}
        {/*      className="w-[20px] h-[20px]"*/}
        {/*      resizeMode="contain"*/}
        {/*      tintColor={isFrozen ? "red" : "white"}*/}
        {/*    />*/}
        {/*  </Pressable>*/}
        {/*  <Text*/}
        {/*    className={`${isFrozen ? "text-danger-900" : "text-white"} font-poppingMedium text-[12px] w-[51px] h-[18px] top-[143px] left-[4px]`}*/}
        {/*  >*/}
        {/*    {isFrozen ? "unfreeze" : "freeze"}*/}
        {/*  </Text>*/}
        {/*</View>*/}

        <View>
          <FreezableCard />
        </View>

        <Pressable>
          <View>
            <Image />
          </View>
          <Text></Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default YoloPay;
