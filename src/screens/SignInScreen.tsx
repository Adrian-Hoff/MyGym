import { VStack, Image } from "native-base";

//assets
import BackgroundImg from "@assets/background.png";

export function SignInScreen() {
  return (
    <VStack flex={1} bg={"gray.700"}>
      <Image
        source={BackgroundImg}
        alt="SignInScreen/ people trainning"
        resizeMode="contain"
        position={"absolute"}
      />
    </VStack>
  );
}
