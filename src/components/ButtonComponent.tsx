import { Button, IButtonProps, Text } from "native-base";

interface Props {
  title: string;
  rest?: IButtonProps;
}

export function ButtonComponent({ title, ...rest }: Props) {
  return (
    <Button
      rounded={"sm"}
      w={"full"}
      h={14}
      bg={"violet.500"}
      _pressed={{
        bg: "violet.900",
      }}
      {...rest}
    >
      <Text color={"white"} fontFamily={"heading"} fontSize={"sm"}>
        {title}
      </Text>
    </Button>
  );
}
