import { Flex, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Flex
    width="80vw"
    marginTop={30}
    flexWrap="wrap"
    flexDirection="row"
    justify="center"
    {...props}
  />
)
