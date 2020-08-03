import React, { useState } from 'react'
import Axios from 'axios';

const BtnsActive = ({light, user}) => {

    const [state, setState] = useState(light.state)

    const activate = async (user, light, userId, state) => {
        const url = '/api/mqtt'
        const response = await Axios.post(url, {
            user,
            light,
            userId,
            state
        })
        setState(!state)

        console.log(response)
    }

    const desactivate = async (user, light, state) => {

        const userName = user.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()
        const lightName = light.split('').map(letter => letter === ' ' ? '-' : letter).join('').toLowerCase()

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const urlBroker = proxyurl + `http://104.154.37.183:8081/api/v4/clients/${userName}_${lightName}`
        await Axios.delete(urlBroker, {
            headers: {
                authorization: 'Basic YWRtaW46cHVibGlj'
            }
        })

        setState(!state)
    }

    const btnState = (state, activate) => {
        if (state) {
            if (activate) {
                return {
                    cursor: 'initial',
                    background: '#22aa4466'
                    /* backgroundColor: 'red' */
                }
            }
        } else {
            if (!activate) {
                return {
                    cursor: 'initial',
                    background: '#F5253166'
                }
            }
        }
    }

    return (
        <div className="btn-wrapper">
            <button 
                style={btnState(state, true)} 
                className="btn-activate" 
                onClick={() => activate(user.name, light.lightName, user._id, state)}
                disabled={state}
            >Activar</button>
            <button 
                style={btnState(state, false)} 
                className="btn-desactivate" 
                onClick={() => desactivate(user.name, light.lightName, state)}
                disabled={!state}
            >Desactivar</button>

            <style jsx>{`
            
                .btn-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 5px;
                }

                .btn-activate {
                    background: #22aa44;
                }

                .btn-desactivate {
                    background: #F52531;
                }
            
            `}</style>
        </div>
    )
}

export default BtnsActive
