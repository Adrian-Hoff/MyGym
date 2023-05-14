//react-native
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

//icons
import { Entypo } from "@expo/vector-icons";

//native-base
import {
  HStack,
  Heading,
  IImageProps,
  Image,
  Text,
  VStack,
  Icon,
  Box,
} from "native-base";

type Props = IImageProps &
  TouchableOpacityProps & {
    size: number;
    uri: string;

    title: string;
    description: string;
  };

export function ExerciseCardComponent({
  size,
  uri,
  title,
  description,
  ...rest
}: Props) {
  return (
    <TouchableOpacity>
      <Box borderWidth={0.5} borderColor={"gray.400"} mb={3} rounded={"md"}>
        <HStack p={1} rounded={"md"} alignItems={"center"}>
          <Image
            source={{
              uri: uri,
            }}
            w={size}
            h={size}
            rounded={"md"}
            {...rest}
            mr={4}
          />
          <VStack flex={1}>
            <Heading color={"gray.200"} fontSize={"lg"}>
              {title}
            </Heading>
            <Text color={"gray.300"} fontSize={"sm"} mt={1} numberOfLines={2}>
              {description}
            </Text>
          </VStack>

          <Icon as={Entypo} name="chevron-thin-right" color={"gray.400"} />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
