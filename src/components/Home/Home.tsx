import { Popup } from './Build/Popup';
import { Layout, Map } from './Build';

export const Home = () => {
    return (
        <Layout>
            <>
                <Map />
                <Popup />
            </>
        </Layout>
    )
}
