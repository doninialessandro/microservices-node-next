import { FaGithub } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  Image,
} from '@chakra-ui/react'

const Hero = ({
  title,
  subtitle,
  image,
  ctaLink,
  isExternal,
  ctaText,
  disclaimer,
}) => (
  <Flex
    align="center"
    justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
    direction={{ base: 'column-reverse', md: 'row' }}
    wrap="no-wrap"
    minH="70vh"
    px={8}
    mb={16}
  >
    <Stack
      spacing={4}
      w={{ base: '80%', md: '40%' }}
      align={['center', 'center', 'flex-start', 'flex-start']}
    >
      <Heading
        as="h1"
        size="4xl"
        pb={2}
        bgGradient="linear(to-l, #ECC94B,#ED8936)"
        bgClip="text"
        fontWeight="black"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {title}
      </Heading>
      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        {subtitle}
      </Heading>
      {ctaText && (
        <Link href={ctaLink} isExternal={isExternal}>
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            rightIcon={isExternal ? <FaGithub /> : <IoMdLogIn />}
          >
            {ctaText}{' '}
          </Button>
        </Link>
      )}
      <Text
        fontSize="xs"
        mt={2}
        textAlign="center"
        color="primary.800"
        opacity="0.6"
      >
        {disclaimer}
      </Text>
    </Stack>
    <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
      <Image src={image} size="100%" />
    </Box>
  </Flex>
)

Hero.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
  ctaText: '',
  ctaLink: '',
  isExternal: true,
  disclaimer: '',
}

export default Hero
