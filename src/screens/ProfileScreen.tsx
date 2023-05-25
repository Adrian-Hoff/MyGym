//react
import { useState } from "react";
import { TouchableOpacity } from "react-native";

//image-picker
import * as ImagePicker from "expo-image-picker";

//native-base
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";

//components
import { ButtonComponent } from "@components/ButtonComponent";
import { InputComponent } from "@components/InputComponent";
import { ScreenHeaderComponent } from "@components/ScreenHeaderComponent";
import { UserPhotoComponent } from "@components/UserPhotoComponent";

const PHOTO_SIZE = 32;

export function ProfileScreen() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  async function handleSelectUserPhoto() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [1, 1],
      allowsEditing: true,
      // base64: true,
    });
  }
  return (
    <VStack flex={1}>
      <ScreenHeaderComponent title="Profile" />

      <ScrollView contentContainerStyle={{ paddingBottom: 86 }}>
        <Center mt={6} px={5}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhotoComponent
              source={{
                uri: "https://avatarfiles.alphacoders.com/759/75944.jpg",
              }}
              alt="Image"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleSelectUserPhoto}>
            <Text
              color="violet.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Change Photo
            </Text>
          </TouchableOpacity>

          <InputComponent bg="gray.600" placeholder="Name" />

          <InputComponent bg="gray.600" placeholder="Email" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}
          >
            Change Password
          </Heading>

          <InputComponent
            bg="gray.600"
            placeholder="Current Password"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="New Password"
            secureTextEntry
          />

          <InputComponent
            bg="gray.600"
            placeholder="Confirm New Password"
            secureTextEntry
          />

          <ButtonComponent title="Update Profile" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
