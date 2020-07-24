import React from 'react'
import Axios from 'axios'
import { connect, useSelector } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/mapToProps/userMapToProps';


const DownloadInfo = () => {

    const { light } = useSelector(state => state.user)

    const handleDownload = () => {
        const url = '/api/excel'
        Axios.post(url, {
            userId: "5ef98566f5c1ab54dc995be7",
            light,
        }).then((result) => {
            if (result.data.status === 'ok') {
                const url = window.URL.createObjectURL(new Blob([result.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('href', '/excels/test.zip')
                link.setAttribute('download', 'test.zip')
                document.body.appendChild(link)
                link.click()
            } else {
                console.log('error')
            }
        })

    }

    return (
        <div className="container">
            <button onClick={handleDownload}>
                <img src="/img/icons/descarga.svg" alt="botón de descarga" />
                Descargar Informe
            </button>

            <style jsx>{`
                .container {
                }

                button {
                    background: none;
                    display: grid;
                    grid-template-columns: auto auto;
                    align-items: center;
                    justify-items: center;
                    border: 1px solid white;
                    border-radius: 5px;
                    transition: border 0.5s;
                }

                button:hover {
                    border: 1px solid var(--main-color);
                }

                img {
                    margin: 5px;
                    width: 20px;
                }
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadInfo)
