import React, { useEffect, useState } from 'react'
// redux
import { connect, useSelector } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/userMapToProps";
// utils
import { getDates } from '../../utils/getDates';
import { getTodayDate } from '../../utils/getTodayDate';
// chart
import { Line } from "react-chartjs-2";
import { initialState } from '../../chart-js/initialState'
// style-jsx
import { styleButton } from '../../styles-jsx/style-button';
import DownloadInfo from '../download/DownloadInfo';
import NumLight from '../options/NumLight';
import ChangeRange from '../options/ChangeRange';


const Voltajes = ({ saveValuesDates, changeFetchDate, changeNumLights}, ctx) => {

    const [data, setData] = useState(initialState([1, 2, 3]))
    const [switchVoltage, setSwitchVoltage] = useState(false)

    const { dates, dateFetch, light, range, id } = useSelector((state) => state.user)

    useEffect(() => {
        if (dates.length === 0) {
            console.log('llamada 1')
            const now = getTodayDate()
            changeFetchDate(now)
            getDates(saveValuesDates, changeNumLights, ctx, now)
        }
    }, [])
    
    useEffect(() => {
        if (dateFetch !== "") {
            console.log(dateFetch)
            getDates(saveValuesDates, changeNumLights, ctx, dateFetch, range, light, id)
            setSwitchVoltage(false)
        }
    }, [dateFetch, light, range, id])

    useEffect(() => {
        if (dates.length !== 0) {
            setData(initialState(dates.panelVoltages, dates.dates))
        }
    }, [dates])

    const voltageBattery = () => {
        setSwitchVoltage(true)
        if (dates.length !== 0) {
            setData(initialState(dates.batteryVoltage, dates.dates))
        }
    }

    const voltagePanel = () => {
        setSwitchVoltage(false)
        if (dates.length !== 0) {
            setData(initialState(dates.panelVoltages, dates.dates))
        }
    }

    return (
        <div className="line">
            <div className="options">
                <NumLight />
                <ChangeRange />
                <label>
                    Fecha
                    <input type="date" name="" onChange={(e) => changeFetchDate(e.target.value)} value={dateFetch} />
                </label>
            </div>
            <div className="buttons">
                <button onClick={() => voltagePanel()} style={styleButton(!switchVoltage, "panel")} >
                    Panel
                </button>
                <button onClick={() => voltageBattery()} style={styleButton(switchVoltage, "battery")} >
                    Batería
                </button>
            </div>
            <Line data={data} options={{ maintainAspectRatio: false }} />

            <DownloadInfo />

            <style jsx>{`
                .line {
                    margin: auto;
                    width: 90%;
                    height: 400px;
                }

                .buttons {
                    margin-top: -15px;
                    margin-right: 6px;
                    float: right;
                    display: grid;
                    grid-template-columns: auto auto;
                    align-items: flex-end;
                    transform: translateY(32px);
                }

                label {
                    font-size: 14px;
                    justify-self: flex-end;
                    display: grid;
                    grid-template-columns: auto auto;
                    align-items: center;
                }

                input {
                    border-radius: 10px;
                    padding: 2px 5px;
                    margin-left: 5px;
                    margin-right: 10px;
                    border: 1px solid var(--main-color);
                    color: #3b3b3b;
                    cursor: pointer;
                }

                .options {
                    margin-top: 15px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Voltajes)
