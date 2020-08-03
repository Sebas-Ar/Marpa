import React from 'react'
import { connect, useSelector } from 'react-redux'
import { mapStateToProps, mapDispatchToProps as user} from '../../../redux/mapToProps/userMapToProps'
import { mapDispatchToProps as popup } from '../../../redux/mapToProps/hoverMapToProps'
import User from './User'

const FindListUser = ({ getId, desativateFind }) => {

    const { userList } = useSelector(state => state.user)
    
    return (
        <>
            {
                userList 
                ?
                userList.length !== 0
                    ? 
                    userList.map((user) => <User key={user._id} user={user} getId={getId} desativateFind={desativateFind}/>)
                    :
                    <p>No se encuentran Coincidencias!</p>
                :
                ''    
            }
            
        </>
    )
}

export default connect(mapStateToProps, Object.assign({}, popup, user))(FindListUser)
