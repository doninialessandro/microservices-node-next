import axiosClient from '../utils/api'
import { Hero } from '../components'

const Index = props => {
  const { currentUser } = props
  return currentUser ? (
    <Hero
      title="Welcome !!!"
      subtitle={`Hi ${currentUser?.email}! you are in the right place to find to the event of your dreams 💭💭💭`}
      ctaText="Source code"
      ctaLink=""
      image="/images/party.svg"
      disclaimer="Illustrative purposes only"
    />
  ) : (
    <Hero
      title="Log in to join us!"
      subtitle="or sign up if don't have an account"
      ctaText="Log in / Sign up"
      ctaLink="/auth/signup"
      isExternal={false}
      image="/images/notLogged.svg"
      disclaimer="Illustrative purposes only"
    />
  )
}

Index.getInitialProps = async context => {
  const API = axiosClient(context)
  const { data } = await API.get('/users/currentuser')

  return data
}

export default Index
