import { DashboardHeaderComponent } from "@components/DashboardHeaderComponents";
import { Center, Text, VStack } from "native-base";

export function DashboardScreen() {
  return (
    <VStack flex={1}>
      <DashboardHeaderComponent />
    </VStack>
  );
}
