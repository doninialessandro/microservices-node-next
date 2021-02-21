import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  Heading,
  Box,
  Flex,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  Button,
  IconButton,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { Header } from '..'

import { useSignUp, useSignIn } from '../../hooks/useUsers'

const Credentials = props => {
  const { type, title, buttonTitle } = props
  const [showPassword, setShowPassword] = useState(false)
  const { handleSubmit, errors, register, formState } = useForm()
  const signUpMutation = useSignUp()
  const signInMutation = useSignIn()

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  function validateEmail(value) {
    if (!value) {
      return '😡 email is required'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return '😤 invalid email...'
    }
    return true
  }

  function validatePassword(value) {
    if (!value) {
      return '😡 password is required'
    }
    if (value.length < 4 || value.length > 20) {
      return '😤 invalid password...'
    }
    return true
  }

  function onSubmit(values) {
    ;(type === 'signin' ? signInMutation : signUpMutation).mutate({
      email: values.email,
      password: values.password,
    })
  }

  return (
    <>
      <Header />
      <Flex
        align="center"
        justify={{
          base: 'center',
          md: 'space-around',
          xl: 'space-between',
        }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
          <Image src={`/images/${type}.svg`} size="100%" />
        </Box>
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h1"
            size="2xl"
            pb={2}
            bgGradient="linear(to-l, #ECC94B,#ED8936)"
            bgClip="text"
            fontWeight="black"
            textAlign={['center', 'center', 'left', 'left']}
          >
            {title}
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Stack
              spacing={4}
              align={['center', 'center', 'flex-start', 'flex-start']}
            >
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  name="email"
                  id="email"
                  placeholder="Email"
                  size="md"
                  ref={register({ validate: validateEmail })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    name="password"
                    id="password"
                    placeholder="Password"
                    size="md"
                    pr="4.5rem"
                    type={showPassword ? 'text' : 'password'}
                    ref={register({ validate: validatePassword })}
                  />
                  <InputRightElement>
                    <IconButton
                      icon={
                        showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                      }
                      size="sm"
                      rounded="md"
                      onClick={handleClickShowPassword}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                isLoading={formState.isSubmitting}
                disabled={formState.errors.password || formState.errors.email}
                type="submit"
              >
                {buttonTitle}
              </Button>
            </Stack>
          </form>
          <Text
            fontSize="xs"
            mt={2}
            textAlign="left"
            color="primary.800"
            opacity="0.6"
            mb={5}
          >
            {type === 'signin' ? 'New user' : 'Do you already have an account'}?{' '}
            <Link href={type === 'signin' ? '/auth/signup' : '/auth/signin'}>
              <b>
                <ChakraLink color="orange">
                  {type === 'signin' ? 'Sign Up' : 'Sign In'}
                </ChakraLink>
              </b>
            </Link>
          </Text>
        </Stack>
      </Flex>
    </>
  )
}

export default Credentials
