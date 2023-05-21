//react-navigation
import { useNavigation } from "@react-navigation/native";

//svg
import BodySVG from "@assets/body.svg";

//icons
import { Feather } from "@expo/vector-icons";

//react-native
import { TouchableOpacity } from "react-native";

//native-base
import { Box, HStack, Heading, Icon, Text, VStack } from "native-base";

export function ExercisesScreen() {
  const navigation = useNavigation();

  function HandleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={5} pt={12} pb={8} bgColor={"gray.600"}>
        <Box flexDir={"row"}>
          <TouchableOpacity onPress={HandleGoBack}>
            <Icon
              size={6}
              as={Feather}
              name="arrow-left"
              color={"violet.500"}
            />
          </TouchableOpacity>
          <Box flex={1} />
        </Box>
        <HStack mt={4} justifyContent={"space-between"}>
          <Heading
            flexShrink={1}
            textAlign={"center"}
            color={"gray.100"}
            fontSize={"lg"}
          >
            Bench Press
          </Heading>

          <HStack space={2}>
            <BodySVG />
            <Text color={"gray.200"}>Chest</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
