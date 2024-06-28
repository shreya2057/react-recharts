import {
  Box,
  Flex,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

export const CustomLegends = (props: object) => {
  if ("payload" in props) {
    const { payload } = props;
    if (Array.isArray(payload) && payload?.length > 0) {
      return (
        <Flex justifyContent={"right"} mt={10}>
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"row"}
            gap={2}
          >
            {payload?.map((legends, index) => (
              <ListItem key={`item-${index}`} alignItems={"center"} gap={2}>
                <VStack>
                  <HStack>
                    <Box>
                      <svg width="20" height="20">
                        <rect
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                          fill={legends?.color}
                        />
                      </svg>
                    </Box>

                    <Text
                      fontWeight={500}
                      color={"#718096"}
                      fontSize={"md"}
                      textTransform={"capitalize"}
                    >
                      {legends.value.replace(/([A-Z])/g, " $1")}
                    </Text>
                  </HStack>
                  <Text fontWeight={700} color={"grey.700"} fontSize={"md"}>
                    {legends.payload.value}
                  </Text>
                </VStack>
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      );
    }
  }
};
