import AboutUs from "../../../components/BarrieConcrete/AboutUs";
import Advantages from "../../../components/BarrieConcrete/Advantages/Advantages";
import BuildingStandards from "../../../components/BarrieConcrete/BuildingStandards";
import BuildingSuccessTogether from "../../../components/BarrieConcrete/BuildingSuccessTogether";
import ConcreteSource from "../../../components/BarrieConcrete/ConcreteSource";
import DosDont from "../../../components/BarrieConcrete/DosDont/DosDont";
import Feedback from "../../../components/BarrieConcrete/Feedback/Feedback";
import KeyFactors from "../../../components/BarrieConcrete/KeyFactors";
import PowerOfReadyMixInnovation from "../../../components/BarrieConcrete/PowerOfReadyMixInnovation";
import QualityEveryProject from "../../../components/BarrieConcrete/QualityEveryProject";
import Reviews from "../../../components/BarrieConcrete/Reviews/Reviews";

import ServicesArea from "../../../components/BarrieConcrete/SevicesArea/ServicesArea";
import Workflow from "../../../components/BarrieConcrete/Workflow";
import Banner from "../../../components/HomeSections/Banner";
import "../../globals.css";
import "./Barrie.css";

const BarrieConcreteReadyMixPage = () => {
    return (
        <div className='min-h-screen'>
            <>
                <Banner content="barrie" />
            </>

            <section className="p-section">
                <AboutUs />
            </section>

            <div className="my-60px">
                <ConcreteSource />
            </div>

            <section className="p-section">
                <QualityEveryProject />
            </section>

            <div className="my-60px">
                <BuildingSuccessTogether />
            </div>

            <div className="my-60px">
                <BuildingStandards />
            </div>

            <section className="p-section">
                <Workflow />
            </section>

            <section className="p-section">
                <DosDont />
            </section>

            <section className="p-section">
                <Reviews />
            </section>

            <div className="my-60px">
                <KeyFactors />
            </div>

            <section className="p-section">
                <Advantages />
            </section>

            <div className="my-60px">
                <PowerOfReadyMixInnovation />
            </div>

            <div className="my-60px">
                <ServicesArea />
            </div>

            <div className="p-section">
                <Feedback />
            </div>
        </div>
    );
};

export default BarrieConcreteReadyMixPage;