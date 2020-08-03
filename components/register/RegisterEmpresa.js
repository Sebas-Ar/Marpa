import React, { useState } from 'react'
import axios from 'axios'
import Map from '../location/Map';

const RegisterEmpresa = () => {

    const [lights, setLights] = useState([1])
    const [data, setData] = useState({
        lights: [{}],
        type: 'empresa'
    });
    const [map, setMap] = useState(false)

    const addLight = e => {
        e.preventDefault();
        let newLight = [...lights]
        const numbreLight = newLight[newLight.length - 1] + 1
        newLight.push(numbreLight)
        setLights(newLight);
    }

    const deleteLight = e => {
        e.preventDefault()
        if (lights.length > 1){
            let newLight = [...lights]
            newLight.pop()
            let newData = {...data}
            newData.lights.pop()
            setData(newData);
            setLights(newLight)
        }
    }

    const onChangeEmpresa = e => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onChangeLigth = (e, num) => {
        let newData = {...data}
        newData.lights[num - 1] = Object.assign({}, newData.lights[num - 1], {[e.target.name]: e.target.value, state: false})
        setData(Object.assign({}, data, {lights: newData.lights}));
    };

    const register = async e => {
        e.preventDefault()
        const url = '/api/signup'
        const result = await axios.post(url, data) 
        console.log(result.data)
    }

    const changeMapLocation = (num, lat, lng) => {
        let newData = {...data}
        newData.lights[num - 1] = Object.assign({}, newData.lights[num - 1], {lat, lng})
        setData(Object.assign({}, data, {lights: newData.lights}))
    }

    return (
        <form onSubmit={register}>
            <div className="empresa">
                <input onChange={onChangeEmpresa} type="text" name="name" placeholder="Nombre de la Empresa"/>
                <input onChange={onChangeEmpresa} type="text" name="NIT" placeholder="NIT"/>
                <input onChange={onChangeEmpresa} type="text" name="email" placeholder="Email"/>
                <input onChange={onChangeEmpresa} type="text" name="password" placeholder="Contraseña"/>                
            </div>
            <div className="add-light">
                <h3>AGREGAR LUCES</h3>
                {
                    lights.map(light => (
                        <div className="light" key={light}>
                            <h4>Luz {light}</h4>
                            <input onChange={e => onChangeLigth(e, light)} type="text" name="lightName" placeholder="Nombre de la Luz"/>
                            <br/>
                            <input onChange={e => onChangeLigth(e, light)} type="number" name="lat" placeholder="Latitud" value={data.lights[light - 1] && data.lights[light - 1].lat ? data.lights[light - 1].lat : ''}/>
                            <input onChange={e => onChangeLigth(e, light)} type="numbre" name="lng" placeholder="Longitud" value={data.lights[light - 1] && data.lights[light - 1].lng ? data.lights[light - 1].lng : ''}/>
                            <div className="wrapper-map">
                                <Map 
                                    num={light}
                                    changeMapLocation={changeMapLocation}
                                />
                            </div>
                        </div>
                    ))
                }
                <div className="buttons">
                    <button onClick={addLight}>AGREGAR LUZ</button>
                    <button onClick={deleteLight}>ELIMINAR LUZ</button>
                </div>
            </div>
            <button className="register">REGISTRAR</button>

            <style jsx>{`

                form {
                    margin: 1rem auto 0;
                    width: 75%;
                }
            
                .empresa {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 3rem;
                }

                input {
                    background: none;
                    border-top: none;
                    border-right: none;
                    border-left: none;
                    border-bottom: 1px solid: #000000;
                    padding: .5rem 0;
                    margin: 10px 0; 
                }

                input::placeholder {
                    font-size: .8rem;
                }


                .add-light {
                    padding: 1.5rem;
                    margin: 2rem 0;
                    border: 2px solid #00000011;
                    border-radius: 3px;
                }

                h3 {
                    color: var(--main-color);
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                h4 {
                    grid-column: 1/3;
                    font-weight: 600;
                    font-size: .8rem;
                }

                .light {
                    margin: 1.5rem 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 3rem;
                }

                .btn-map {
                    justify-self: center;
                    align-self: center;
                }

                .wrapper-map {
                    grid-column: 1/3;
                    height: 200px;
                }

                .buttons {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    justify-items: center;
                }

                button {
                    padding: 7px 10px;
                    width: 50%;
                    font-weight: 600;
                    background-color: var(--main-color);
                    border-radius: 20px;
                }

                .register {
                    width: 6.5rem;
                    display: block;
                    margin: .5rem auto 2rem;
                }
            
            `}</style>

        </form>
    )
}

export default RegisterEmpresa



