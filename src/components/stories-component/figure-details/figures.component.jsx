/* eslint-disable react/prop-types */
import "./figures.styles.scss";

function Figure(props) {
    return (
        <figure className="story__shape">
            <img src={props.path} 
                 className="story__img"
                 alt="client on a tour" />
            <figcaption className="story__caption">{props.name}</figcaption>
        </figure>
    );
}

export default Figure;
