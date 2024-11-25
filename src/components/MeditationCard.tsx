import { View, Text, Pressable } from "react-native";
import { Meditation } from "../types";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

export default function MeditationCard({
  meditation,
}: {
  meditation: Meditation;
}) {
  return (
    <Link href={`screens/${meditation.id}`} asChild>
      <Pressable className="flex-row items-center gap-2">
        <View className="p-2">
          <AntDesign name="checkcircle" size={20} color="green" />
        </View>

        <View className=" flex-1 py-10 p-5 m-5 border-2 border-gray-500 rounded-2xl">
          <Text className="font-bold text-2xl mb-2">{meditation.title}</Text>
          <View className="flex-row items-center gap-1">
            <Feather name="clock" size={15} color="black" />
            <Text className="text-gray-600">{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
