import React, { useState } from "react";
import Link from 'next/link'
import Axios from 'axios'

import { mapStateToProps, mapDispatchToProps as popup } from '../../../redux/mapToProps/hoverMapToProps';
import { mapDispatchToProps as user } from '../../../redux/mapToProps/userMapToProps'
import { connect, useSelector } from "react-redux";

const MenuHeaderAdmin = ({ activateFind, getUserList }) => {
    const hover = useSelector((state) => state.hover.value)

    const [userFind, setUserFind] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        const URL = "/api/user-list"
        const data = await Axios.post(URL, { userFind })
        getUserList(data.data.users)
        activateFind()
    }

    return (
        <div className="menu">
            <h2>
                <span className="first-line-h2">HOLA </span>
                <span className="second-line-h2">ADMIN</span>
            </h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <button></button>
                <input
                    type="text"
                    name="search"
                    placeholder="Buscar Empresa"
                    onChange={(e) => setUserFind(e.target.value)}
                />
            </form>
            <Link href="/admin/registrar-empresa">
                <a>
                    <span>+ REGISTRAR</span> NUEVA EMPRESA
                </a>
            </Link>

            <style jsx>{`
                .menu {
                    width: ${hover ? "14rem" : "0"};
                    align-self: center;
                    justify-self: center;
                    overflow: hidden;
                    opacity: ${hover ? "1" : "0"};
                    transition: width 0.5s, margin 0.5s,
                        opacity ${hover ? ".5s" : ".2s"} ${hover ? ".3s" : "0s"};
                }

                h2 {
                    height: min-content;
                    color: var(--main-color);
                    text-align: center;
                    white-space: nowrap;
                }

                .first-line-h2 {
                    font-size: 1.9rem;
                    font-weight: 100;
                }

                .second-line-h2 {
                    font-size: 2.4rem;
                    font-weight: 700;
                }

                form {
                    background: white;
                    border-radius: 10px;
                    display: grid;
                    grid-template-columns: 1.5rem 1fr;
                    overflow: hidden;
                    margin: 15px 0;
                }

                button {
                    background: #ffffff url("/img/icons/search.svg") no-repeat
                        center center;
                    background-size: 60%;
                }

                input {
                    border: none;
                    padding: 5px;
                }

                a {
                    color: white;
                    font-weight: 100;
                    white-space: nowrap;
                }

                span {
                    color: var(--main-color);
                    font-weight: 700;
                }
            `}</style>
        </div>
    )
}



export default connect(mapStateToProps, Object.assign({}, popup, user))(MenuHeaderAdmin)
