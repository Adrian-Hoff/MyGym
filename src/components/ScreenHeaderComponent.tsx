import { Center, Heading } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeaderComponent({ title }: Props) {
  return (
    <Center pb={6} pt={16}>
      <Heading color={"gray.100"} fontSize={"xl"}>
        {title}
      </Heading>
    </Center>
  );
}
