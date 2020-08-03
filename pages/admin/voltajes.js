import React from 'react'
import Layout from '../../components/empresa/layout/Layout'
import withAuth from '../../middlewares/withAuth';
import Voltajes from '../../components/voltajes/Voltajes'
import MenuHeaderAdmin from '../../components/empresa/menu/MenuHeaderAdmin';

const voltajes = () => {
    return (
        <Layout title1="VOLTAJE BATERÍA &" title2="PANEL" link="/admin/" menuHeader={<MenuHeaderAdmin />} > 
        
            <Voltajes />

        </Layout>
    );
}

export default withAuth(voltajes, process.env.ADMIN_TOKEN);
