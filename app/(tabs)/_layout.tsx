// import { Tabs } from "expo-router";
// import React from "react";
// import { ImageSourcePropType, Platform, View } from "react-native";
// import home from "../../assets/icons/home.png";
// import scan from "../../assets/icons/scan.png";
// import discount from "../../assets/icons/discount.png";
//
// const TabIcon = ({
//   source,
//   focused,
// }: {
//   source: ImageSourcePropType;
//   focused: boolean;
// }) => (
//   <View>
//     <View>
//       <Image source={source} />
//     </View>
//   </View>
// );
// const Layout = () => {
//   return (
//     <Tabs initialRouteName="yolo pay" screenOptions={{}}>
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon source={home} focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="yolo pay"
//         options={{
//           title: "yolo pay",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon source={scan} focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="ginie"
//         options={{
//           title: "ginie",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon source={discount} focused={focused} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };
// export default Layout;

import { Tabs } from "expo-router";
import CustomTabBar from "@/components/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" options={{ title: "home" }} />
      <Tabs.Screen name="yoloPay" options={{ title: "yolo pay" }} />
      <Tabs.Screen name="ginie" options={{ title: "ginie" }} />
    </Tabs>
  );
}
