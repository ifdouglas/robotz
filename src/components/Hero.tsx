import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="150px"
    bgGradient="linear(to-l, #965CF2, #FF8ADC)"
    flexDirection="column"
    bgClip="text"
  >
    <Heading fontSize="4rem" fontFamily="Righteous">{title}</Heading>
    <Heading fontSize="1.18rem">11 anos de experiência</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "robotz",
};
