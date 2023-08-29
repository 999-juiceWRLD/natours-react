import "./header.styles.scss";
import "../../../assets/css/style.scss";
import HeaderText from '../header-text/header-text.component';
import HeaderLogo from "../header-logo/header-logo.component";

function HeaderComp() {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderText />
        </header>
    );
}

export default HeaderComp;
