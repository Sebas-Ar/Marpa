import React, { useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios'
import { mapDispatchToProps, mapStateToProps } from '../../redux/mapToProps/userMapToProps'
import { connect } from 'react-redux'

const LoginForm = ({type, getId}) => {

    const [dataLogin, setDataLogin] = useState({type})
    
    const onChange = e => {
        setDataLogin(Object.assign({},dataLogin, {[e.target.name]: e.target.value}))
    }

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = '/api/login'
    
            const result = await axios.post(url, dataLogin);

            const id = result.data.message
            getId(id)

             
            
            router.push(`/${type}/voltajes`);
            
        } catch (error) {
            /* console.error(error) */
            alert('correo o contraseña incorrectos')
        }
    }

    return (
        <form onSubmit={onSubmit} >
            <input onChange={onChange} type="text" name="email" placeholder="email" autoFocus="autofocus" />
            <input onChange={onChange} type="password" name="password" placeholder="Contraseña" />
            <button>INGRESAR</button>

            <style jsx>{`
                form {
                    width: 80%;
                    display: grid;
                    row-gap: 1rem;
                }

                input {
                    background: none;
                    border: none;
                    border-bottom: 2px solid white;
                    padding: 10px 5px;
                    color: white;
                    outline: none;
                }

                input:focus {
                    border-bottom: 2px solid var(--main-color);
                }

                input::placeholder {
                    color: white;
                }

                button {
                    background-color: var(--main-color);
                    padding: 10px 0;
                    font-weight: 900;
                    border-radius: 30px;
                    margin: 20px 0 0px;
                    transition: transform .5s;
                }

                button:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </form>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
