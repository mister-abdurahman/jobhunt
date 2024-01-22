import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable, SafeAreaView, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import Home from ".";
import { View } from "../../components/Themed";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // return (
  //   <SafeAreaView
  //     style={{
  //       flex: 1,
  //       backgroundColor: COLORS.lightWhite,
  //     }}
  //   >
  //     <Stack.Screen
  //       options={{
  //         headerStyle: { backgroundColor: COLORS.primary },
  //         headerShadowVisible: false,
  //         headerLeft: () => (
  //           <ScreenHeaderBtn
  //             iconUrl={icons.menu}
  //             dimension="60%"
  //             handlePress={() => ""}
  //           />
  //         ),
  //         headerRight: () => (
  //           <ScreenHeaderBtn
  //             iconUrl={images.profile}
  //             dimension="100%"
  //             handlePress={() => ""}
  //           />
  //         ),
  //       }}
  //     ></Stack.Screen>
  //     <Home />
  //   </SafeAreaView>
  // );

  return (
    <Tabs
    // replaced Tab with stack.
    // screenOptions={{
    //   tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    // }}
    >
      <Tabs.Screen name="index"></Tabs.Screen>
      <Tabs.Screen name="test"></Tabs.Screen>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      /> */}
    </Tabs>
  );
}
