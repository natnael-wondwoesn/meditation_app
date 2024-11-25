import { View, Text } from "react-native";
import { Meditation } from "../types";
export default function MeditationCard({
  meditation,
}: {
  meditation: Meditation;
}) {
  return (
    <View className="p-5 m-5 border-2 border-gray-500 rounded-2xl">
      <Text className="font-bold text-2xl">{meditation.title}</Text>
      <View className="flex-row items-center gap-1">
        <Text className="text-gray-600">{meditation.duration} min</Text>
      </View>
    </View>
  );
}
