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
import DownloadInfo from '../download/DownloadInfo';
import NumLight from '../options/NumLight';
import ChangeRange from '../options/ChangeRange';

const Corriente = ({ saveValuesDates, changeFetchDate, changeNumLights}, ctx) => {

    const [data, setData] = useState(initialState([1, 2, 3]))

    const { dates, dateFetch, light, range, id} = useSelector((state) => state.user)

    useEffect(() => {
        if (dates.length === 0) {
            const now = getTodayDate()
            changeFetchDate(now)
            getDates(saveValuesDates, changeNumLights, ctx, now, id)
        }
    }, [])

    useEffect(() => {
        if (dateFetch !== "") {
            console.log(dateFetch)
            getDates(saveValuesDates, changeNumLights, ctx, dateFetch, range, light, id)
        }
    }, [dateFetch, light, range, id])

    useEffect(() => {
        if (dates.length !== 0) {
            setData(initialState(dates.circuitCurrent, dates.dates))
        }
    }, [dates])


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
            <Line data={data} options={{ maintainAspectRatio: false }} />
            <DownloadInfo />

            <style jsx>{`
                .line {
                    margin: auto;
                    width: 90%;
                    height: 400px;
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
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: center;
                    margin-bottom: 15px;
                }
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Corriente)
