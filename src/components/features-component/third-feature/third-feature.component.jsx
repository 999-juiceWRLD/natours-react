import "./third-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function ThirdFeature() {
    return (
            <FeatureCore
                icon={"icon-basic-map"}
                heading={"Find Your Way"}
                text={"Unlock the path to self-discovery and find your true purpose. \
                      Navigate yourself."} 
            />
    );
}

export default ThirdFeature;
