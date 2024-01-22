import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { View } from "../../../components/Themed";
import { Text } from "react-native";

export const JobDetails = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View>
      <Text>My details for id: {id}</Text>
    </View>
  );
};
