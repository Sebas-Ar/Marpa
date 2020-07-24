import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { mapStateToProps, mapDispatchToProps as user} from '../../../redux/mapToProps/userMapToProps'
import { mapDispatchToProps as popup } from '../../../redux/mapToProps/hoverMapToProps'

const FindListUser = ({ getId, desativateFind }) => {
    const { userList } = useSelector(state => state.user)

    const seeUser = (id) => {
        getId(id)
    }

    const seeButton = (id) => {
        seeUser(id)
        desativateFind()
    }
    
    return (
        <>
            {
                userList 
                ?
                userList.length !== 0
                    ? 
                    userList.map((user) => (
                        <section key={user._id}>
                            <h3>{user.name}</h3>
                            <p>NIT: {user.NIT ? user.NIT : 'no tiene'}</p>
                            <p>Emial: {user.email ? user.email : 'no tiene'}</p>
                            <button onClick={() => seeButton(user._id)}>Ver</button>
                            <button>Editar</button>
                        </section>
                    ))
                    :
                    <p>No se encuentran Coincidencias!</p>
                :
                ''    
            }
            <style jsx>{`
            
                section {
                    margin: 10px 10px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px 5px;
                    border: 1px solid #33333333;
                    padding: 10px;
                    border-radius: 10px;
                    
                    
                }

                h3 {
                    font-weight: 600;
                    text-transform: uppercase;
                    grid-column: 1/3;
                }
    
                section:hover {
                    background-color: #33333311;
                }

                button {
                    background-color: var(--main-color);
                    border-radius: 15px;
                    font-weight: 700;
                    width: 50%;
                    justify-self: center;
                    padding: 5px 0;
                }
            
            `}</style>
        </>
    )
}

export default connect(mapStateToProps, Object.assign({}, popup, user))(FindListUser)
