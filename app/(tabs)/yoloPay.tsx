import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, View } from "react-native";
import { faker } from "@faker-js/faker";
import { LinearGradient } from "expo-linear-gradient";
import FreezableCard from "@/components/FreezableCard";

const yoloPay = () => {
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
        <View className="flex flex-row w-[328px] h-[40px] absolute top-[182px] left-[16px] gap-[8px]">
          <LinearGradient
            colors={["#ffffff", "#222222"]} // Top to bottom gradient
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="p-[2px] rounded-full"
          >
            <Pressable
              onPress={() => console.log("yolo pay")}
              className="px-8 py-1 rounded-full  border border-white "
            >
              <Text className="text-white font-poppins text-[24px]">pay</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={["#ffffff", "#222222"]} // Top to bottom gradient
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="p-[2px] rounded-full"
          >
            <Pressable
              onPress={() => console.log("card")}
              className="px-8 py-1 rounded-full border border-danger-900"
            >
              <Text className="text-danger-900 font-poppins text-[24px]">
                card
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View className="flex-1 items-center justify-center">
          <FreezableCard />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default yoloPay;
