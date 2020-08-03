import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import MenuHeaderAdmin from '../../components/empresa/menu/MenuHeaderAdmin'
import withAuth from '../../middlewares/withAuth'
import MapWrapper from '../../components/location/MapWrapper'


const ubicacion = () => {
    return (
        <Layout title1="UBICACIÓN DE LA" title2="LUZ" link="/admin/" menuHeader={<MenuHeaderAdmin />}>
            <MapWrapper />
        </Layout>
    )
}

export default withAuth(ubicacion, process.env.ADMIN_TOKEN)
