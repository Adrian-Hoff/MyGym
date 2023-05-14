import { ScreenHeaderComponent } from "@components/ScreenHeaderComponent";
import { VStack, Text } from "native-base";

export function HistoryScreen() {
  return (
    <VStack flex={1}>
      <ScreenHeaderComponent title="Exercises History" />
    </VStack>
  );
}
