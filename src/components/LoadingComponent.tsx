import { Box, Spinner } from "native-base";

export function LoadingComponent() {
  const container = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bg: "gray.700",
  };

  const spinner = {
    color: "violet.600",
    size: "lg",
  };

  return (
    <Box {...container}>
      <Spinner {...spinner} />
    </Box>
  );
}
