import Router from 'next/router'

import { useQuery, useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'
import axiosClient from '../utils/api'

const signOut = async () => {
  const API = axiosClient()
  const { data } = await API.get('/users/signout')
  return data
}

const signUp = async ({ email, password }) => {
  const API = axiosClient()
  const { data } = await API.post('/users/signup', {
    email,
    password,
  })
  return data
}

const signIn = async ({ email, password }) => {
  const API = axiosClient()
  const { data } = await API.post('/users/signin', {
    email,
    password,
  })
  return data
}

export const useSignOut = () => useQuery('signout', signOut)
export const useSignUp = () => {
  const toast = useToast()
  return useMutation(signUp, {
    onSuccess: () => {
      toast({
        title: '🥳 Thank you for joining us!!!',
        description: 'Find your ticket with us',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      Router.push('/')
    },
    onError: error => {
      toast({
        title: '🤭 Oops...!',
        description: `Error: ${error.response.data.errors.map(
          err => err.message
        )}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
  })
}
export const useSignIn = () => {
  const toast = useToast()
  return useMutation(signIn, {
    onSuccess: () => {
      toast({
        title: '🥳 Welcome back!!!',
        description: 'Find your ticket with us',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      Router.push('/')
    },
    onError: error => {
      toast({
        title: '🤭 Oops...!',
        description: `Error: ${error.response.data.errors.map(
          err => err.message
        )}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
  })
}
