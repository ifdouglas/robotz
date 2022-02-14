import {
  Text,
  List,
  ListIcon,
  ListItem,
  Badge,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Hero } from 'robotz/components/Hero'
import { Container } from 'robotz/components/Container'
import { Main } from 'robotz/components/Main'
import { DarkModeSwitch } from 'robotz/components/DarkModeSwitch'
import { Footer } from 'robotz/components/Footer'
import Menu from 'robotz/components/Menu'
import Card from 'robotz/components/Card'
import AppsSVG from 'robotz/resources/images/apps.svg'
import SitesSVG from 'robotz/resources/images/sites.svg'
import LogosSVG from 'robotz/resources/images/logos.svg'

const Index = () => (
  <Container>
    <Hero />
    <Menu>
      <DarkModeSwitch />
    </Menu>
    <Main>
      <Card
        title="pacote logo"
        description="renove sua marca"
        price="R$ 700"
        priceMarket='R$ 1.000'
        image={LogosSVG}
      >
        <Badge rounded="full" mt={6} mb={2} fontSize="0.8em" colorScheme="gray">
          incluso
        </Badge>
        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Design
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Revisões Ilimitadas
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Template para Postagens e Stories no Instagram
          </ListItem>
        </List>
      </Card>
      <Card
        title="pacote site"
        description="personalizado para pc e celular"
        price="R$ 1.500"
        priceMarket='R$ 1.900'
        image={SitesSVG}
      >
        <Badge rounded="full" mt={6} mb={2} fontSize="0.8em" colorScheme="gray">
          incluso
        </Badge>
        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Design
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Programação
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            2 Anos de Hospedagem
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            1 Ano de Garantia
          </ListItem>
        </List>
      </Card>
      <Card
        title="pacote aplicativo"
        description="criamos e postamos nas 2 lojas"
        price="R$ 8.000"
        priceMarket="R$ 9.100"
        image={AppsSVG}
      >
        <Badge rounded="full" mt={6} mb={2} fontSize="0.8em" colorScheme="gray">
          incluso
        </Badge>
        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Design
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Programação
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Postagem na Apple Store
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Postagem na Play Store
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            1 Ano de Garantia
          </ListItem>
        </List>
      </Card>
    </Main>
    <Footer>
      <Text>©Copyright 2021 Robotz. Todos os direitos reservados. ❤️ Douglas Fernandes</Text>
    </Footer>
    {/* <CTA /> */}
  </Container>
)

export default Index
