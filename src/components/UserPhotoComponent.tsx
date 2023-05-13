//native-base
import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
};

export function UserPhotoComponent({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded={"full"}
      borderColor="gray.400"
      {...rest}
    />
  );
}
