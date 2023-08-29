import "./first-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function FirstFeature() {
    return (
            <FeatureCore
                icon={"icon-basic-world"}
                heading={"Explore The World"}
                text={"Remember every step you took — let \
                      everyone see what's amazing. Feel the \
                      freedom."} 
            />
    );
}

export default FirstFeature;
