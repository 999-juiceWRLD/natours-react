import "./header-logo.styles.scss";
import logoWhite from "../../../assets/img/logo-white.png"

function HeaderLogo() {
    return (
        <div className="header__logo-box">
                <img src={logoWhite}
                     alt="logo"
                     className="header__logo" 
                />
        </div>
    );
}

export default HeaderLogo;
