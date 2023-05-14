//native-base
import { Box, Heading, HStack, Text, VStack } from "native-base";

export function HistoryCardComponent() {
  return (
    <HStack
      w="full"
      px={4}
      py={4}
      mb={3}
      borderWidth={0.5}
      borderColor={"gray.500"}
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack>
        <Heading color="gray.100" fontSize="lg" textTransform="capitalize">
          Push up
        </Heading>

        <Text color="gray.200" fontSize="sm" numberOfLines={1}>
          Backward
        </Text>
      </VStack>

      <Box>
        <Box flex={1}></Box>
        <Text color="gray.200" fontSize="sm">
          14:34
        </Text>
      </Box>
    </HStack>
  );
}
