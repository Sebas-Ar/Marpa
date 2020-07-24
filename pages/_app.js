import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
import Layout from "../components/layout/Layout";

 const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )

}

const makeStore = () => store
const wrapper = createWrapper(makeStore);

export async function getserverSideProps({ Component, ctx }) {
    const pageProps = Component.getserverSideProps ? await Component.getserverSideProps(ctx) : {}
    
    return {pageProps}
}

export default wrapper.withRedux(MyApp);

