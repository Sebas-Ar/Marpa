import React from 'react'
import { connect, useSelector } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/mapToProps/userMapToProps'


const NumLight = ({changeLight}) => {

    const { light, numLights } = useSelector((state) => state.user)

    return (
        <select onChange={(e) => changeLight(parseInt(e.target.value))} value={light}>
            {
                numLights.map(option => (
                    <option key={option} value={option}>Luz {option + 1}</option>
                ))
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
