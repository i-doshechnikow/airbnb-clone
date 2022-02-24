import { Map as MapGL, Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResult }) {
  const coordinates = searchResult.map((el) => ({
    longitude: el.long,
    latitude: el.lat,
  }))

  const center = getCenter(coordinates)

  return (
    <MapGL
      mapStyle="mapbox://styles/director37/ckzwwp02f000814rvmy7wx5eh"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 8,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* {searchResult.map((el, id) => (
        <div key={id}>
          <Marker
            longitude={center.longitude}
            latitude={center.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p>🎈</p>
          </Marker>
        </div>
      ))} */}
    </MapGL>
  )
}

export default Map
