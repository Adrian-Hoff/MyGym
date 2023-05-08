import { Box, Spinner } from "native-base";

export function LoadingComponent() {
  const container = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bg: "#202024",
  };

  const spinner = {
    color: "#2020fa",
    size: "lg",
  };

  return (
    <Box {...container}>
      <Spinner {...spinner} />
    </Box>
  );
}
