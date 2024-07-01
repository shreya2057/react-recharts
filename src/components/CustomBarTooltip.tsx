import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export const CustomBarTooltip = (props: object) => {
  if ("payload" in props) {
    const { payload } = props;
    if (
      Array.isArray(payload) &&
      payload?.length > 0 &&
      "payload" in payload[0]
    ) {
      return (
        <VStack
          background={"#1E1B39"}
          p={4}
          color={"white"}
          rounded={"md"}
          alignItems={"start"}
        >
          <Text>{payload[0].payload.value}</Text>
          <HStack>
            <Box width={3} height={3} rounded={"full"} background={"#E37125"} />
            <Text>{payload[0].payload.name}</Text>
          </HStack>
        </VStack>
      );
    }
  }
};
