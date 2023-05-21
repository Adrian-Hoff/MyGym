//react-navigation
import { useNavigation } from "@react-navigation/native";

//svg
import BodySVG from "@assets/body.svg";
import SeriesSVG from "@assets/series.svg";
import RepetitionsSVG from "@assets/repetitions.svg";

//icons
import { Feather } from "@expo/vector-icons";

//compnents
import { ButtonComponent } from "@components/ButtonComponent";

//react-native
import { TouchableOpacity } from "react-native";

//native-base
import { Box, HStack, Heading, Icon, Image, Text, VStack } from "native-base";

export function ExercisesScreen() {
  const navigation = useNavigation();

  function HandleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={5} pt={12} pb={8}>
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

      <VStack p={5}>
        <Image
          w={"full"}
          height={80}
          alt="image"
          source={{
            uri: "https://www.origym.com.br/upload/remada-unilateral-3.png",
          }}
          mb={4}
          // resizeMode="cover"
          rounded={"lg"}
          overflow={"hidden"}
        />

        <VStack
          space={5}
          p={4}
          borderWidth={0.5}
          borderColor={"gray.500"}
          rounded={"md"}
        >
          <HStack justifyContent={"space-between"}>
            <HStack>
              <SeriesSVG />
              <Text color={"gray.200"} ml={2}>
                3 Sets
              </Text>
            </HStack>
            <HStack>
              <RepetitionsSVG />
              <Text color={"gray.200"} ml={2}>
                12 Reps
              </Text>
            </HStack>
          </HStack>
          <ButtonComponent title="Mark As Done" />
        </VStack>
      </VStack>
    </VStack>
  );
}
