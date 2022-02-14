import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }
  
  return (
    <Flex
      position="absolute"
      bottom={0}
      top={0}
      left={0}
      right={0}
      direction="column"
      alignItems="center"
      // justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
