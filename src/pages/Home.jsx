import HeroScroll from '../components/HeroScroll.jsx'
import Manifesto from '../components/Manifesto.jsx'
import EpochSection from '../components/EpochSection.jsx'
import Quiz from '../components/Quiz.jsx'
import Booking from '../components/Booking.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { destinations } from '../data/destinations.js'

export default function Home() {
  usePageTitle()
  return (
    <main>
      <HeroScroll />
      <Manifesto />
      <div id="destinations">
        <EpochSection data={destinations['paris-1889']} align="left" id="paris" />
        <EpochSection data={destinations['cretace']} align="right" id="cretace" />
        <EpochSection data={destinations['florence-1504']} align="center" id="florence" />
      </div>
      <Quiz />
      <Booking />
    </main>
  )
}
