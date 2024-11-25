import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { meditations } from "../../dummy_data";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const result = meditations.find((m) => m.id === Number(id));

  if (!result) {
    return <Text>Not found</Text>;
  }

  return (
    <>
      <SafeAreaView>
        <Text className="text-2xl">{result?.title} </Text>;
        <AntDesign
          onPress={() => router.back()}
          className="absolute right-4"
          name="close"
          size={24}
          color="black"
        />
      </SafeAreaView>
    </>
  );
}
