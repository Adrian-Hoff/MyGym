import { DashboardHeaderComponent } from "@components/DashboardHeaderComponents";
import { MuscularGroupComponent } from "@components/MuscularGroupComponent";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";
import { ExerciseCardComponent } from "../components/ExerciseCardComponent";

export function DashboardScreen() {
  const [groups, setGroups] = useState<string[]>([
    "chest",
    "biceps",
    "triceps",
    "forearms",
    "shoulders",
    "backward",
  ]);

  const [exercises, setExercises] = useState([
    "One Arm Row",
    "Pull Up",
    "Push Up",
    "Deadlift",
    "Bench press",
  ]);

  const [selected, setSelected] = useState("chest");

  return (
    <VStack flex={1}>
      <DashboardHeaderComponent />

      <FlatList
        _contentContainerStyle={{ pl: 5, pr: 2 }}
        mb={10}
        flexGrow={0}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={groups}
        renderItem={({ item }) => (
          <MuscularGroupComponent
            name={item}
            variant={selected === item ? "SELECTED" : "NOT_SELECTED"}
            onPress={() => setSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={5}>
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercises
          </Heading>
          <Text color={"violet.900"} fontSize={"sm"}>
            4
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCardComponent
              title={item}
              description="3 Sets x 12 Reps"
              size={16}
              alt="image"
              uri="https://www.origym.com.br/upload/remada-unilateral-3.png"
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 10,
          }}
        />
      </VStack>
    </VStack>
  );
}
