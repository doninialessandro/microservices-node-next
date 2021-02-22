import { Hero } from '../components'

function PageNotFound() {
  return (
    <Hero
      title="Looks like you're lost."
      subtitle="HINT: use the top bar to navigate"
      image="/images/404.svg"
      disclaimer="Illustrative purposes only"
    />
  )
}

export default PageNotFound
