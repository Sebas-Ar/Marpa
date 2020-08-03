import { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import LightAnimation from '../light/LightAnimation'


const Map = ({num, changeMapLocation, lat, lng, zoom}) => {
    const [viewPort, setViewPort] = useState({
        latitude: lat || 4.710989,
        longitude: lng || -74.072090,
        width: '100%',
        height: '100%',
        zoom: zoom || 8.7
    })

    const [marker, setMarker] = useState({
        lat: 0,
        lng: 0
    })

    useEffect(() => {
        const { lng, lat } = marker
        changeMapLocation(num, lat, lng)
    }, [marker])

    const failure = err => console.log(err)
    
    const options = {
        enableHightAccuracy: true,
        timeout: 5000,
        maxinumAge: 0
    }

    const selectLocation = click => {
        setMarker({
            lng: click.lngLat[0],
            lat: click.lngLat[1]
        })
    }

    return (
        <div>
            <ReactMapGl 
                {...viewPort}
                mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
                onViewportChange={viewPort => {
                    setViewPort(viewPort)
                }}
                mapStyle="mapbox://styles/sebas-ar/ckdb4118b07lv1iqhc43c035e/draft"
                onClick={selectLocation}
            >
                <Marker 
                    latitude={lat || marker.lat}
                    longitude={lng || marker.lng}
                >
                    <div className="light">
                        <LightAnimation />
                    </div>
                </Marker>

            </ReactMapGl>

            <style jsx>{`
            
                div {
                    width: 100%;
                    height: 100%;
                }

                .light {
                    width: 40px;
                    position: relative;
                    top: -17px;
                    left: -50%;
                }
            
            `}</style>
        </div>
    )
}

export default Map
