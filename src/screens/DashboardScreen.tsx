import { DashboardHeaderComponent } from "@components/DashboardHeaderComponents";
import { MuscularGroupComponent } from "@components/MuscularGroupComponent";
import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";

export function DashboardScreen() {
  const [groups, setGroups] = useState<string[]>([
    "chest",
    "biceps",
    "triceps",
    "forearms",
    "shoulders",
    "backward",
  ]);

  const [selected, setSelected] = useState("chest");

  return (
    <VStack flex={1}>
      <DashboardHeaderComponent />
      <FlatList
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
      <HStack justifyContent={"space-between"}>
        <Heading color={"gray.200"} fontSize={"md"}>
          Exercises
        </Heading>
        <Text color={"violet.900"} fontSize={"sm"}>
          4
        </Text>
      </HStack>
    </VStack>
  );
}
