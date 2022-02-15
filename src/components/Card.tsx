import { ReactElement } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Flex,
  Text,
  Stack,
  transition,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import WhatsappSVG from "robotz/resources/images/whatsapp.svg";

interface CardProps {
  icon?: ReactElement;
  title: string;
  description?: string;
  price: string;
  priceMarket: string;
  image: StaticImageData;
  children?: ReactElement | ReactElement[];
}

export default function Card({
  title,
  image,
  price,
  priceMarket,
  children,
}: CardProps) {
  return (
    <Center margin={10}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="330px"
        h="560px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="2xl"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          mt={-20}
          pos="relative"
          height="210px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={image} width="200px" height="200px" />
        </Box>
        <Stack pt={0} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {title}
          </Text>
          {/* <Heading fontSize="xl" fontFamily="body" fontWeight={500}>
              {description}
            </Heading> */}
          <Stack
            direction="row"
            w="full"
            align="center"
            justify="space-between"
          >
            <Text textDecoration="line-through" fontSize="4xl" color="gray.600">
              {priceMarket}
            </Text>
            <Flex direction="column" align="end">
              <Text color="gray.500" fontSize="xs" textTransform="uppercase">
                à partir de
              </Text>
              <Text fontWeight={800} fontSize="2xl">
                {price}
              </Text>
              <Text
                fontWeight={400}
                fontSize="11px"
                textTransform="uppercase"
                fontStyle="italic"
              >
                aceitamos bitcoin
              </Text>
            </Flex>
          </Stack>
        </Stack>
        {children}
        <Flex>
          <Link
            href="https://api.whatsapp.com/send?phone=+5534999551889"
            position="absolute"
            target="_blank"
            bottom={-5}
            right={0}
            height="72px"
            borderRadius="20px"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "2xl",
              transition: "transform .5s linear",
            }}
          >
            <Image src={WhatsappSVG} height="200px" />
          </Link>
        </Flex>
      </Box>
    </Center>
  );
}
