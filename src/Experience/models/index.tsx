import Kiosk from '@models/kiosk'
import Posters from '@models/posters'
import Decoration from '@models/decoration'
import Column from '@models/morrisColumn/Column'
import StreetPanel from '@models/streetPanel/StreetPanel'
import HitBoxManager from '@models/hitBoxes/HitBoxManager'

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
