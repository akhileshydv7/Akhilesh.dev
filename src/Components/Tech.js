import htmlLogo from "../Utils/Photos/Logo/html5-logo-png-transparent.png";
import cssLogo from "../Utils/Photos/Logo/css3-logo-png-transparent.png";
import javascriptLogo from "../Utils/Photos/Logo/javascript-logo-png-transparent.png";
import saasLogo from "../Utils/Photos/Logo/sass-1-logo-png-transparent.png";
import reactLogo from "../Utils/Photos/Logo/react-1-logo-png-transparent.png";
import reduxLogo from "../Utils/Photos/Logo/redux-logo-png-transparent.png";

const Tech = () => {
    return (
        <div className="tech">
            <p>Tech Stack</p>
            <ul>
                <li><img src={htmlLogo} alt='html-logo' /></li>
                <li><img src={cssLogo} alt='css-logo' /></li>
                <li><img src={javascriptLogo} alt='javascript-logo' /></li>
                <li><img src={saasLogo} alt='saas-logo' /></li>
                <li><img src={reactLogo} alt='react-logo' /></li>
                <li><img src={reduxLogo} alt='redux-logo' /></li>
            </ul>
        </div>
    )
}

export default Tech;