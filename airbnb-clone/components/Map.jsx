import { Map as MapGL } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResult }) {
  const coordinates = searchResult.map((el) => ({
    longitude: el.long,
    latitude: el.lat,
  }))

  console.log(coordinates)

  return (
    <MapGL
      mapStyle="mapbox://styles/director37/ckzwwp02f000814rvmy7wx5eh"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default Map
