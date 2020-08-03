import React, { useEffect } from 'react'
import Map from './Map'
import NumLight from '../options/NumLight'
import { useSelector, connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/mapToProps/userMapToProps'
import { getDates } from '../../utils/getDates'

const MapWrapper = ({ saveValuesDates,  changeNumLights}, ctx) => {

    const {dates, light, id} = useSelector(state => state.user)

    useEffect(() => {
        getDates(saveValuesDates, changeNumLights, ctx, '', 0, light, id)
    }, [light, id])
    
    return (
        <div className="map-wrapper">
            <NumLight />
            <div className="map">
                <Map changeMapLocation={() => {}} lat={dates.location ? dates.location.lat : 0} lng={dates.location ? dates.location.lng : 0} zoom={1}/>
            </div>

            <style jsx>{`

                .map-wrapper {
                    width: 90%;
                    margin: auto;
                }
            
                .map {
                    height: 450px;
                    box-sizing: border-box;
                    padding-top: 20px;
                }
            
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
