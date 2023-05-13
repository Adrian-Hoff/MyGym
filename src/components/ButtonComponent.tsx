import { Button, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function ButtonComponent({ title, variant = "solid", ...rest }: Props) {
  return (
    <Button
      rounded={"sm"}
      w={"full"}
      h={14}
      bg={variant === "outline" ? "transparent" : "violet.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"violet.600"}
      _pressed={
        variant === "outline"
          ? {
              bg: "gray.500",
            }
          : {
              bg: "violet.900",
            }
      }
      {...rest}
    >
      <Text
        color={variant === "outline" ? "violet.600" : "white"}
        fontFamily={"heading"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </Button>
  );
}
