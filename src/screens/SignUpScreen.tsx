//react-navigation
import { useNavigation } from "@react-navigation/native";

//native-base
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  Flex,
} from "native-base";

//assets
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

//components
import { InputComponent } from "@components/InputComponent";
import { ButtonComponent } from "@components/ButtonComponent";

export function SignUpScreen() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="SignInScreen/ people trainning"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <LogoSvg />
          <Text color={"gray.100"} fontSize={"sm"}>
            Train your mind and your body
          </Text>
        </Center>

        <Center>
          <Heading fontFamily="heading" color="gray.100" fontSize="xl" mb={6}>
            Create your account
          </Heading>
        </Center>

        <InputComponent placeholder="Name" />

        <InputComponent
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputComponent placeholder="Password" secureTextEntry />

        <ButtonComponent title="Create Account" />

        <ButtonComponent
          mt={24}
          title="Back To Login"
          variant={"outline"}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
