import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function InputComponent({
  errorMessage = null,
  isInvalid,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={3}>
      <NativeBaseInput
        bg={"gray.700"}
        h={14}
        px={4}
        mb={1}
        color={"white"}
        borderWidth={0}
        fontSize={"md"}
        fontFamily={"body"}
        placeholderTextColor={"gray.300"}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "gray.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage m={0} color={"red.300"}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
