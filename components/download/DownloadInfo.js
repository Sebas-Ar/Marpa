import React from 'react'
import Axios from 'axios'
import { connect, useSelector } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/mapToProps/userMapToProps';
import cookies from 'next-cookies';


const DownloadInfo = (ctx) => {

    const { light, id } = useSelector(state => state.user)
    const { userId } = cookies(ctx)

    const handleDownload = () => {
        const url = '/api/excel'
        Axios.post(url, {
            userId: id === '' ? userId : id,
            light
        }).then((result) => {
            if (result.data.status === 'ok') {
                const url = window.URL.createObjectURL(new Blob([result.data]))
                const link = document.createElement('a')
                const fileName = light.lightName.split('').map(letter => letter === ' ' ? '-' : letter).join('')
                link.href = url
                link.setAttribute('href', `/excels/${fileName}.zip`)
                link.setAttribute('download', `${fileName}.zip`)
                document.body.appendChild(link)
                link.click()
            } else {
                console.log('error')
            }
            console.log(result)
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
