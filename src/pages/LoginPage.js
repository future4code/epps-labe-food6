import { Button } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import { goToSignUp } from '../routing/Coordinator'
import LoginForm from './LoginForm'

const LoginPage = () => {
  const history = useHistory()
  return (
    <>
      <Header>Entrar</Header>
      <LoginForm />
      
    </>
  )

}

export default LoginPage