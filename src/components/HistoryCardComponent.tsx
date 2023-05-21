//native-base
import { Box, Heading, HStack, Text, VStack } from "native-base";

export function HistoryCardComponent() {
  return (
    <VStack
      w="full"
      p={4}
      mb={2}
      space={2}
      borderWidth={0.5}
      borderColor={"gray.500"}
      rounded="md"
    >
      <Heading
        color="gray.100"
        fontSize="lg"
        textTransform="capitalize"
        numberOfLines={1}
      >
        Push up
      </Heading>

      <HStack w={"full"} justifyContent={"space-between"}>
        <Text color="gray.200" fontSize="sm" numberOfLines={1}>
          Backward
        </Text>

        <Text color="gray.200" fontSize="sm">
          14:34
        </Text>
      </HStack>
    </VStack>
  );
}
