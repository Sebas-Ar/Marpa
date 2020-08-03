import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import MenuHeaderEmpresa from '../../components/empresa/menu/MenuHeaderEmpresa'
import MapWrapper from '../../components/location/MapWrapper'
import withAuth from '../../middlewares/withAuth'


const ubicacion = () => {
    return (
        <Layout title1="UBICACIÓN DE LA" title2="LUZ" link="/empresa/" menuHeader={<MenuHeaderEmpresa />}>
            <MapWrapper />
        </Layout>
    )
}

export default withAuth(ubicacion, process.env.USER_TOKEN)
