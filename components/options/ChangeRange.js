import React from 'react'
import { connect, useSelector } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/mapToProps/userMapToProps'


const ChangeRange = ({ changeRang }) => {

    const { range } = useSelector(state => state.user)

    return (
        <select onChange={(e) => changeRang(parseInt(e.target.value))} value={range}>
            <option value={0}>Día</option>
            <option value={6}>Últimos 7 Días</option>
            <option value={29}>Últimos 30 Días</option>

            <style jsx>{`
            
                select {
                    justify-self: center;
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRange)
