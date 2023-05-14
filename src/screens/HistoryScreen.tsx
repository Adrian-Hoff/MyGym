//react
import { useState } from "react";

//native-base
import { VStack, Text, SectionList, Heading, Box } from "native-base";

//components
import { HistoryCardComponent } from "@components/HistoryCardComponent";
import { ScreenHeaderComponent } from "@components/ScreenHeaderComponent";

export function HistoryScreen() {
  const [exercises, setExercises] = useState([
    {
      title: "Saturday",
      data: ["Pull Up", "Push Up"],
    },
    {
      title: "Sunday",
      data: ["Deadlift"],
    },
    {
      title: "Monday",
      data: ["Pull Down", " Push Down"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeaderComponent title="Exercises History" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCardComponent />}
        renderSectionHeader={({ section }) => (
          <Box px={5} py={2} bgColor={"gray.600"} rounded={"md"} mt={10} mb={5}>
            <Heading color="white" textAlign={"center"} fontSize="md">
              {section.title}
            </Heading>
          </Box>
        )}
        px={5}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            There isn't any exercises in your history. {"\n"}
            Let's get started with some exercises today?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
