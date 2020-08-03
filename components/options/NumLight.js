import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/mapToProps/userMapToProps'


const NumLight = ({changeLight}) => {

    const { light, numLights } = useSelector((state) => state.user)

    useEffect(() => {
        if (numLights) {
            if ((light === '' || light === undefined) && numLights.length !== 0) {
                changeLight(numLights[0].lightName)
            }
        }
    
    }, [numLights])

    return (
        <select onChange={(e) => changeLight(e.target.value)} value={light ? light.lightName : ''}>
            {
                numLights
                    ?
                    numLights.map(num => (
                        <option key={num.lightName} value={num.lightName}>{num.lightName}</option>
                    ))
                    :
                    ''
            }

            <style jsx>{`
            
                select {
                    justify-self: flex-start;
                    border: none;
                    background: var(--main-color);
                    border-radius: 10px;
                    outline: none;
                    padding: 3px 10px;
                    cursor: pointer;
                    box-shadow: none;
                }

                option:hover {
                    background: none;
                    border: none;
                }
            
            `}</style>
        </select>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NumLight)
