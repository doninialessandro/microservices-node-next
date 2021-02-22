import axiosClient from '../utils/api'
import { Hero } from '../components'

const Index = props => {
  const { currentUser } = props
  return (
    <Hero
      title="Welcome !!!"
      subtitle={`Hi ${currentUser?.email}! you are in the right place to find to the event of your dreams`}
      ctaText="Source code"
      ctaLink=""
      image="/images/party.svg"
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
