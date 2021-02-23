import { useEffect } from 'react'
import Router from 'next/router'

import { Hero, LaodingStatus } from '../../components'
import { useSignOut } from '../../hooks/useUsers'

const Signout = () => {
  const { status, error } = useSignOut()

  useEffect(() => {
    const backToHome = () => Router.push('/auth/signin')
    if (status === 'success') {
      setTimeout(() => backToHome(), 5000)
    }
  }, [status])

  return (
    <>
      <Hero
        title="👋 Bye Bye, hope to see you again!!!"
        subtitle="we are redirecting to our login page...."
        image="/images/signout.svg"
      />
      {status === 'error' ||
        (status === 'loading' && (
          <LaodingStatus status={status} error={error} />
        ))}
    </>
  )
}

export default Signout
