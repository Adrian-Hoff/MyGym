//react
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

//file-system
import * as FileSystem from "expo-file-system";

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
  useToast,
} from "native-base";

//components
import { ButtonComponent } from "@components/ButtonComponent";
import { InputComponent } from "@components/InputComponent";
import { ScreenHeaderComponent } from "@components/ScreenHeaderComponent";
import { UserPhotoComponent } from "@components/UserPhotoComponent";

const PHOTO_SIZE = 32;

export function ProfileScreen() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>();

  const toast = useToast();

  async function handleSelectUserPhoto() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [1, 1],
        allowsEditing: true,
        // base64: true,
      });

      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );
        if (photoInfo.size && photoInfo.size / (1024 * 1024) > 5) {
          return toast.show({
            title:
              "This image is too large. Please select an image smaller than 5MB",
            placement: "top",
            bgColor: "red.500",
          });
        }
        console.log(photoInfo.size / (1024 * 1024));

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPhotoIsLoading(false);
    }
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
                uri: userPhoto,
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
