import { Input as NativeBaseInput, IInputProps } from "native-base";

export function InputComponent({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg={"gray.700"}
      h={14}
      px={4}
      color={"white"}
      borderWidth={0}
      fontSize={"md"}
      fontFamily={"body"}
      mb={4}
      placeholderTextColor={"gray.300"}
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "gray.500",
      }}
      {...rest}
    />
  );
}