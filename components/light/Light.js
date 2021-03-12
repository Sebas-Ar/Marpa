import LightAnimation from "./LightAnimation"
import LightSection from "./LightSection"
import DownloadInfo from "../download/DownloadInfo"
import NumLight from "../options/NumLight"
import LightDescription from "./LightDescription"
import { useSelector, connect } from "react-redux"
import {
    mapStateToProps,
    mapDispatchToProps,
} from "../../redux/mapToProps/userMapToProps"
import { useEffect } from "react"
import { getDates } from "../../utils/getDates"

const Light = ({ saveValuesDates, changeNumLights }, ctx) => {
    const { light, id } = useSelector((state) => state.user)

    useEffect(() => {
        getDates(saveValuesDates, changeNumLights, ctx, "", 0, light, id)
    }, [light, id])

    return (
        <div className="wrapper-light">
            <div>
                <NumLight />
                <div className="light">
                    <section>
                        <LightAnimation />
                    </section>
                    <div className="line"></div>
                    <LightSection />
                </div>
                <div className="description">
                    <DownloadInfo />
                    {/* <LightDescription /> */}
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
                    background-color: var(--main-color);
                }

                .description {
                    display: grid;
                    grid-template-columns: auto auto;
                }

                section {
                    width: 400px;
                }
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Light)
