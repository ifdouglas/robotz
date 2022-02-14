import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode = 'dark', toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
