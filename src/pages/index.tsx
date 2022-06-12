import { Text, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Hero } from "robotz/components/Hero";
import { Container } from "robotz/components/Container";
import { Main } from "robotz/components/Main";
import { Footer } from "robotz/components/Footer";
import LogoIconSVG from "robotz/resources/images/logo-icon.svg";
import LogoWrittenSVG from "robotz/resources/images/logo-written.svg";
import Image from "next/image";

const CheckIcon = () => <ListIcon as={CheckCircleIcon} color="green.500" />;

const Index = () => (
  <Container
    backgroundColor="#281E5D"
  >
    {/* <Hero /> */}
    {/* <Menu>
      <DarkModeSwitch />
    </Menu> */}
    <Main
      flex="1"
      flexDirection="column"
    >
      <Image src={LogoIconSVG} width="200px" height="200px" />
      <Image src={LogoWrittenSVG} width="200px" height="200px" />
    </Main>
    <Footer
      position="absolute"
      bottom="800px"
    >
      <Text
        color="#fff"
      >
        ©Copyright 2022 Robotz. Todos os direitos reservados.
      </Text>
    </Footer>
    {/* <CTA /> */}
  </Container>
);

export default Index;
