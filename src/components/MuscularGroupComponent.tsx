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
      borderColor={variant === "SELECTED" ? "violet.600" : "gray.300"}
      {...rest}
    >
      <Text
        color={variant === "SELECTED" ? "violet.600" : "gray.300"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight={"bold"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
