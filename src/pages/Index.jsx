import React from "react";
import { Box, Button, Container, Heading, Stack, Text, Flex, Image, VStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaMobileAlt, FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={8} as={Box} textAlign="center" py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight="110%">
          Make Your Business <br />
          <Text as={"span"} color={"green.400"}>
            More Productive
          </Text>
        </Heading>
        <Text color={"gray.500"} fontSize={{ sm: "sm", md: "md" }}>
          Our tools are easy to use and can help you manage projects, teams, and your entire business in a cloud-based environment.
        </Text>
        <Stack spacing={6} direction={"row"} justify={"center"}>
          <Button rounded={"full"} px={6} colorScheme={"green"} bg={"green.400"} _hover={{ bg: "green.500" }} rightIcon={<FaArrowRight />}>
            Get started
          </Button>
        </Stack>
      </Stack>

      <Flex align={"center"} justify={"center"} my={10}>
        <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNvZnR3YXJlfGVufDB8fHx8MTcwOTc3NDU5MXww&ixlib=rb-4.0.3&q=80&w=1080" />
      </Flex>

      <VStack spacing={8} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Powerful Features</Heading>
        <Text fontSize={"xl"} color={"gray.600"}>
          Our platform offers a range of features to streamline your business processes.
        </Text>

        <Stack spacing={4} direction={{ base: "column", md: "row" }} justify={"center"}>
          <Feature icon={<FaCloud />} title={"Cloud-Based"} text={"Access anywhere, at any time."} />
          <Feature icon={<FaMobileAlt />} title={"Mobile Friendly"} text={"Optimized for all devices."} />
          <Feature icon={<FaChartBar />} title={"Analytics"} text={"Make data-driven decisions."} />
        </Stack>
      </VStack>
    </Container>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("green.500", "green.300")} mb={1}>
        <Icon as={icon} w={10} h={10} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default Index;
