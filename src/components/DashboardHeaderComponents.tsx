//native-base
import { HStack, Heading, Icon, Text, VStack } from "native-base";

//icons
import { MaterialIcons } from "@expo/vector-icons";

//components
import { UserPhotoComponent } from "./UserPhotoComponent";
import { TouchableOpacity } from "react-native";
export function DashboardHeaderComponent() {
  return (
    <HStack pt={16} pb={16} px={3} space={4} alignItems={"center"}>
      <UserPhotoComponent
        size={16}
        alt="Photo"
        source={{
          uri: "https://avatarfiles.alphacoders.com/759/75944.jpg",
        }}
      />
      <VStack flex={1}>
        <Text color={"white"} fontStyle={"italic"} fontSize={"lg"}>
          Olá,
        </Text>

        <Heading color={"violet.600"} fontSize={"lg"}>
          Adrian Hoff
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color={"error.900"} size={7} />
      </TouchableOpacity>
      {/* <MaterialIcons name="logout" color={"#bb2033"} size={28} /> */}
    </HStack>
  );
}
