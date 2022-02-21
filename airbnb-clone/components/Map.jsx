import { Map as MapGL } from 'react-map-gl'

function Map() {
  return (
    <MapGL
      mapStyle="mapbox://styles/director37/ckzwwp02f000814rvmy7wx5eh"
      mapboxAccessToken={process.env.mapbox_key}
    />
  )
}

export default Map
