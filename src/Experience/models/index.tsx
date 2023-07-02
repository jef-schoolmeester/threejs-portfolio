import StreetPanel from './streetPanel/StreetPanel'
import Decoration from './decoration'
import Column from './morrisColumn/Column'
import Kiosk from './kiosk'
import HitBoxManager from './hitBoxes/HitBoxManager'
import Posters from './posters'

const Models = () => {
  return (
    <>
      <Decoration />
      <StreetPanel />
      <Column />
      <Kiosk />
      <HitBoxManager />
      <Posters />
    </>
  )
}

export default Models
