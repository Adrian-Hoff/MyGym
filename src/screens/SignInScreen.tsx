//native-base
import { VStack, Image, Text, Center, Heading } from "native-base";

//assets
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

//components
import { InputComponent } from "@components/InputComponent";

export function SignInScreen() {
  return (
    <VStack flex={1} bg={"gray.700"} px={10}>
      <Image
        source={BackgroundImg}
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
          Access your account
        </Heading>
      </Center>

      <InputComponent
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <InputComponent placeholder="Password" secureTextEntry />
    </VStack>
  );
}