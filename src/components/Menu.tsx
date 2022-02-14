import { Flex, Heading } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface MenuProps {
  children: ReactElement | ReactElement[]
}

const Menu = ({ children }: MenuProps) => (
  <Flex
    // justifyContent="center"
    // alignItems="center"
    position="fixed"
    top="1rem"
    right="1rem"
  >
    {children}
  </Flex>
)

export default Menu
