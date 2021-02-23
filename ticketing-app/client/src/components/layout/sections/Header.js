import Link from 'next/link'
import { useRouter } from 'next/router'

import { IoTicket } from 'react-icons/io5'
import { IoMdLogOut } from 'react-icons/io'

import { Box, Flex, IconButton, Stack, Button } from '@chakra-ui/react'

import DarkModeSwitch from '../../dataDisplay/DarkModeSwitch'

const MenuItem = ({ children, isLast, ...rest }) => (
  <Box mb={{ base: isLast ? 0 : 8 }} mr={{ base: 0 }} display="block" {...rest}>
    {children}
  </Box>
)

const Header = props => {
  const { currentUser, ...rest } = props
  const router = useRouter()

  const isActive = path => router.pathname === path

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...rest}
    >
      {currentUser && (
        <>
          <Link href="/">
            <Button
              display={{ base: 'none', sm: 'inline-flex' }}
              size="sm"
              colorScheme={isActive('/') ? 'orange' : null}
              variant={isActive('/') ? 'outline' : null}
              leftIcon={<IoTicket />}
            >
              Home
            </Button>
          </Link>
          <Link href="/">
            <IconButton
              display={{ base: 'inline-flex', sm: 'none' }}
              colorScheme={isActive('/') ? 'orange' : null}
              variant={isActive('/') ? 'outline' : null}
              size="sm"
              rounded="md"
              icon={<IoTicket />}
            />
          </Link>
        </>
      )}
      <div />
      <Box display={{ base: 'block' }} flexBasis={{ base: '100%', xs: 'auto' }}>
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <MenuItem isLast>
            <Stack direction="row">
              {currentUser && (
                <>
                  <Link href="/auth/signout">
                    <Button
                      size="sm"
                      display={{ base: 'none', sm: 'inline-flex' }}
                      leftIcon={<IoMdLogOut />}
                    >
                      Sign Out
                    </Button>
                  </Link>
                  <Link href="/auth/signout">
                    <IconButton
                      display={{ base: 'inline-flex', sm: 'none' }}
                      size="sm"
                      rounded="md"
                      icon={<IoMdLogOut />}
                    />
                  </Link>
                </>
              )}
              <DarkModeSwitch />
            </Stack>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
