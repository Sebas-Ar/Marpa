import LightAnimation from './LightAnimation'
import LightSection from './LightSection';
import DownloadInfo from '../download/DownloadInfo';
import NumLight from '../options/NumLight';
import LightDescription from './LightDescription';

const Light = () => {

    return (
        <div className="wrapper-light">

            <div>
                <NumLight />
                <div className="light">

                    <LightAnimation/>
                    <div className="line"></div>
                    <LightSection />
                
                </div>
                <div className="description">
                    <DownloadInfo /> 
                    <LightDescription />
                </div>
            </div>
            

            <style jsx>{`
            
                .wrapper-light {
                    margin: auto;
                    width: 90%;
                    height: 450px;
                }

                .light {
                    margin: 20px 0;
                    padding: 20px 0;
                    height: 90%;
                    border: 2px solid #00000011;
                    display: grid;
                    grid-template-columns: 2fr 2px 1.4fr;
                    align-items: center;
                    justify-items: center;
                }

                .line {
                    width: 100%;
                    height: 80%;
                    background-color: var(--main-color)
                }

                .description {
                    display: grid;
                    grid-template-columns: auto auto;
                }
            
            `}</style>
        </div>
    )
}

export default Light
