import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

const yoloPay = () => {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center h-full">
        <Text className="text-red-500">Yolo pay</Text>
      </View>
    </SafeAreaView>
  );
};
export default yoloPay;
