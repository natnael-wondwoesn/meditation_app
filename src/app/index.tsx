import { Text, View, FlatList } from "react-native";
import { meditations } from "../dummy_data";
import MeditationCard from "../components/MeditationCard";

export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="p-4"
      renderItem={({ item }) => <MeditationCard meditation={item} />}
    />
  );
}
