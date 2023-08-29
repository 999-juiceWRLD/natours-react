import "./tours-core.styles.scss";
import FirstComponent from "../tours-row/first-component/first-comp.component";
import SecondComponent from "../tours-row/second-component/second-comp.component";
import ThirdComponent from "../tours-row/third-component/third-comp.component";
import DiscoverButton from "../tours-discover/tours-discover.components";

function ToursCore() {
    return (
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most Popular Tours
                </h2>
            </div>
            <div className="row">
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
            <DiscoverButton />
        </section>
    );
}

export default ToursCore;
