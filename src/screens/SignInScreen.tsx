import { VStack, Image, Text, Center } from "native-base";

//assets
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignInScreen() {
  return (
    <VStack flex={1} bg={"gray.700"}>
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
    </VStack>
  );
}
