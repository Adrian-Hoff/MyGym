import { IPressableProps, Pressable, Text } from "native-base";

export type variants = "SELECTED" | "NOT_SELECTED";

type Props = IPressableProps & {
  name: string;
  variant?: variants;
};

export function MuscularGroupComponent({
  name,
  variant = "NOT_SELECTED",
  ...rest
}: Props) {
  return (
    <Pressable
      mr={3}
      px={3}
      py={2}
      justifyContent={"center"}
      rounded={"md"}
      borderWidth={1}
      bg={"gray.600"}
      borderColor={variant === "SELECTED" ? "violet.500" : "gray.700"}
      {...rest}
    >
      <Text
        color={variant === "SELECTED" ? "violet.500" : "gray.300"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight={"bold"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
