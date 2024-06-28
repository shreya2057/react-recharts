import { Text, VStack } from "@chakra-ui/react";
import { LabelPropsType } from "../type";

export const CustomLabel = ({
  label,
  diameter,
  topPosition,
}: LabelPropsType) => {
  return (
    <VStack
      position={"absolute"}
      display={"flex"}
      top={topPosition}
      translateY={"-38%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      background={"gray.200"}
      p={"10px"}
      rounded={"full"}
      height={diameter}
      width={diameter}
      gap={0}
      zIndex={10}
    >
      <Text fontSize={"xs"} fontWeight={500}>
        {label?.description}
      </Text>
      <Text
        fontSize={"2xl"}
        fontWeight={700}
        color="grey.700"
        whiteSpace={"wrap"}
        textAlign={"center"}
      >
        {label?.title}
      </Text>
    </VStack>
  );
};
